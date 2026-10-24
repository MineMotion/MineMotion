import { TYPE_IDS } from './objectTypes.js'

export const EXTENSION = '.mmp'
const FORMAT = 'mmp'
const VERSION = 1

export const newId = () => crypto.randomUUID?.() ?? `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`

export const fileName = (name) => `${name}${EXTENSION}`
export const baseName = (file) => file.slice(0, -EXTENSION.length)

export function sanitizeName(raw) {
  return raw
    .replace(/[\\/:*?"<>|\u0000-\u001f]/g, '')
    .trim()
    .replace(/\s+/g, '_')
    .replace(/^\.+/, '')
    .slice(0, 40)
}

export function createProject(name) {
  const now = Date.now()
  return { format: FORMAT, version: VERSION, name, created: now, modified: now, scene: { objects: [] } }
}

export function stringifyProject(project, objects) {
  return JSON.stringify({ ...project, modified: Date.now(), scene: { objects } }, null, 2)
}

const vec = (v, fallback) => (Array.isArray(v) && v.length === 3 && v.every(Number.isFinite) ? v : fallback)

export function normalizeObject(d) {
  if (!d || !TYPE_IDS.has(d.type)) return null
  return {
    id: typeof d.id === 'string' ? d.id : newId(),
    type: d.type,
    name: typeof d.name === 'string' ? d.name : d.type,
    position: vec(d.position, [0, 0.5, 0]),
    rotation: vec(d.rotation, [0, 0, 0]),
    scale: vec(d.scale, [1, 1, 1]),
    color: /^#[0-9a-f]{6}$/i.test(d.color) ? d.color : '#b0b0b0'
  }
}

export function parseProject(text, name) {
  const raw = JSON.parse(text)
  if (raw?.format !== FORMAT) throw new Error('El archivo no es un proyecto .mmp válido')
  const now = Date.now()
  return {
    format: FORMAT,
    version: VERSION,
    name,
    created: raw.created ?? now,
    modified: raw.modified ?? now,
    scene: { objects: (raw.scene?.objects ?? []).map(normalizeObject).filter(Boolean) }
  }
}
