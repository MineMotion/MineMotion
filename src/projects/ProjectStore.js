import { Capacitor } from '@capacitor/core'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'

const ROOT = 'MineMotion/projects'
const PROBE = `${ROOT}/.probe`
const directory = Directory.Documents
const DB_NAME = 'minemotion'
const STORE = 'projects'

const clean = (name) => name.trim().replace(/[\\/:*?"<>|]/g, '_')
const pathOf = (id, file) => (file ? `${ROOT}/${id}/${file}` : `${ROOT}/${id}`)

const fsBackend = {
  async init() {
    await Filesystem.requestPermissions().catch(() => {})
    await Filesystem.mkdir({ path: ROOT, directory, recursive: true }).catch(() => {})
    await Filesystem.writeFile({ path: PROBE, directory, data: '1', encoding: Encoding.UTF8 })
    await Filesystem.deleteFile({ path: PROBE, directory })
  },

  async list() {
    const { files } = await Filesystem.readdir({ path: ROOT, directory })
    const dirs = files.filter((f) => f.type === 'directory')
    const records = await Promise.all(dirs.map((f) => this.read(f.name).catch(() => null)))
    return records.filter(Boolean)
  },

  async read(id) {
    const { data } = await Filesystem.readFile({ path: pathOf(id, 'project.json'), directory, encoding: Encoding.UTF8 })
    return { id, ...JSON.parse(data) }
  },

  async write(id, { name, created, modified }) {
    await Filesystem.writeFile({
      path: pathOf(id, 'project.json'),
      directory,
      encoding: Encoding.UTF8,
      data: JSON.stringify({ name, created, modified })
    })
  },

  async create(id, record) {
    await Filesystem.mkdir({ path: pathOf(id), directory, recursive: true })
    await this.write(id, record)
  },

  exists(id) {
    return Filesystem.stat({ path: pathOf(id), directory }).then(() => true, () => false)
  },

  rename(from, to) {
    return Filesystem.rename({ from: pathOf(from), to: pathOf(to), directory, toDirectory: directory })
  },

  remove(id) {
    return Filesystem.rmdir({ path: pathOf(id), directory, recursive: true })
  }
}

let db
const openDb = () => (db ??= new Promise((resolve, reject) => {
  const request = indexedDB.open(DB_NAME, 1)
  request.onupgradeneeded = () => request.result.createObjectStore(STORE, { keyPath: 'id' })
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(request.error)
}))

const run = async (mode, op) => {
  const database = await openDb()
  return new Promise((resolve, reject) => {
    const transaction = database.transaction(STORE, mode)
    const request = op(transaction.objectStore(STORE))
    transaction.oncomplete = () => resolve(request.result)
    transaction.onerror = () => reject(transaction.error)
    transaction.onabort = () => reject(transaction.error)
  })
}

const put = (id, { name, created, modified }) => run('readwrite', (s) => s.put({ id, name, created, modified }))

const idbBackend = {
  init: () => openDb().then(() => {}),
  list: () => run('readonly', (s) => s.getAll()),

  async read(id) {
    const record = await run('readonly', (s) => s.get(id))
    if (!record) throw new Error('Project not found')
    return record
  },

  write: put,
  create: put,

  async exists(id) {
    return (await run('readonly', (s) => s.get(id))) !== undefined
  },

  async rename(from, to) {
    await put(to, await this.read(from))
    await run('readwrite', (s) => s.delete(from))
  },

  remove: (id) => run('readwrite', (s) => s.delete(id))
}

let active

const pick = async () => {
  if (Capacitor.isNativePlatform()) {
    try {
      await fsBackend.init()
      return fsBackend
    } catch {}
  }
  await idbBackend.init()
  return idbBackend
}

const ready = () => (active ??= pick())

export const ProjectStore = {
  async init() {
    await ready()
  },

  async list() {
    return (await (await ready()).list()).sort((a, b) => b.modified - a.modified)
  },

  async create(name) {
    const b = await ready()
    const id = clean(name)
    if (await b.exists(id)) throw new Error('A project with that name already exists')
    const now = Date.now()
    await b.create(id, { name: name.trim(), created: now, modified: now })
    return b.read(id)
  },

  async rename(id, name) {
    const b = await ready()
    const to = clean(name)
    if (to !== id) {
      if (await b.exists(to)) throw new Error('A project with that name already exists')
      await b.rename(id, to)
    }
    await b.write(to, { ...(await b.read(to)), name: name.trim(), modified: Date.now() })
  },

  async touch(id) {
    const b = await ready()
    await b.write(id, { ...(await b.read(id)), modified: Date.now() })
  },

  async remove(id) {
    await (await ready()).remove(id)
  }
}
