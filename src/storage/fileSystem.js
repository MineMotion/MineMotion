import { Capacitor } from '@capacitor/core'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem'

const ROOT = 'MineMotion/Projects'
let directory = Directory.Documents
let ready

async function probe() {
  const path = `${ROOT}/.probe`
  await Filesystem.mkdir({ path: ROOT, directory, recursive: true }).catch(() => {})
  await Filesystem.writeFile({ path, directory, data: 'ok', encoding: Encoding.UTF8 })
  await Filesystem.deleteFile({ path, directory })
}

async function setup() {
  if (Capacitor.getPlatform() === 'android') await Filesystem.requestPermissions().catch(() => {})
  try {
    await probe()
  } catch {
    directory = Directory.Data
    await probe()
  }
}

export function init() {
  ready ??= setup().catch((e) => {
    ready = undefined
    throw e
  })
  return ready
}

export async function location() {
  await init()
  try {
    return (await Filesystem.getUri({ path: ROOT, directory })).uri.replace(/^file:\/\//, '')
  } catch {
    return ROOT
  }
}

export async function list() {
  await init()
  const { files } = await Filesystem.readdir({ path: ROOT, directory })
  return files.filter((f) => f.type === 'file' && f.name.endsWith('.mmp')).map((f) => ({ file: f.name, modified: f.mtime ?? 0 }))
}

export async function read(file) {
  await init()
  const { data } = await Filesystem.readFile({ path: `${ROOT}/${file}`, directory, encoding: Encoding.UTF8 })
  return data
}

export async function write(file, text) {
  await init()
  await Filesystem.writeFile({ path: `${ROOT}/${file}`, directory, data: text, encoding: Encoding.UTF8 })
}

export async function exists(file) {
  await init()
  try {
    await Filesystem.stat({ path: `${ROOT}/${file}`, directory })
    return true
  } catch {
    return false
  }
}

export async function remove(file) {
  await init()
  await Filesystem.deleteFile({ path: `${ROOT}/${file}`, directory })
}
