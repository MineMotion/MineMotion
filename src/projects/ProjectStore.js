import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'

const ROOT = 'MineMotion/projects'
const directory = Directory.Documents

const clean = (name) => name.trim().replace(/[\\/:*?"<>|]/g, '_')
const path = (id, file = '') => `${ROOT}/${id}${file && `/${file}`}`
const exists = (id) => Filesystem.stat({ path: path(id), directory }).then(() => true, () => false)

export const ProjectStore = {
  async init() {
    await Filesystem.requestPermissions().catch(() => {})
    await Filesystem.mkdir({ path: ROOT, directory, recursive: true }).catch(() => {})
  },

  async read(id) {
    const { data } = await Filesystem.readFile({ path: path(id, 'project.json'), directory, encoding: Encoding.UTF8 })
    return { id, ...JSON.parse(data) }
  },

  async write(id, { name, created }) {
    await Filesystem.writeFile({
      path: path(id, 'project.json'),
      directory,
      encoding: Encoding.UTF8,
      data: JSON.stringify({ name, created, modified: Date.now() })
    })
  },

  async list() {
    const { files } = await Filesystem.readdir({ path: ROOT, directory })
    const projects = await Promise.all(
      files.filter((f) => f.type === 'directory').map((f) => this.read(f.name).catch(() => null))
    )
    return projects.filter(Boolean).sort((a, b) => b.modified - a.modified)
  },

  async create(name) {
    const id = clean(name)
    if (await exists(id)) throw new Error('A project with that name already exists')
    await Filesystem.mkdir({ path: path(id), directory, recursive: true })
    await this.write(id, { name: name.trim(), created: Date.now() })
    return this.read(id)
  },

  async rename(id, name) {
    const to = clean(name)
    if (to !== id) {
      if (await exists(to)) throw new Error('A project with that name already exists')
      await Filesystem.rename({ from: path(id), to: path(to), directory, toDirectory: directory })
    }
    await this.write(to, { ...(await this.read(to)), name: name.trim() })
  },

  async touch(id) {
    await this.write(id, await this.read(id))
  },

  remove(id) {
    return Filesystem.rmdir({ path: path(id), directory, recursive: true })
  }
}
