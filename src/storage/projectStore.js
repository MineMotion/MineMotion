import { baseName, createProject, fileName, parseProject, sanitizeName, stringifyProject } from '../core/project.js'
import * as fs from './fileSystem.js'

export const storageLocation = fs.location

export async function listProjects() {
  const files = await fs.list()
  return files.map((f) => ({ name: baseName(f.file), modified: f.modified })).sort((a, b) => b.modified - a.modified)
}

export async function createNew(rawName) {
  const name = sanitizeName(rawName)
  if (!name) throw new Error('Nombre inválido')
  if (await fs.exists(fileName(name))) throw new Error('Ya existe un proyecto con ese nombre')
  const project = createProject(name)
  await fs.write(fileName(name), stringifyProject(project, []))
  return project
}

export async function openProject(name) {
  return parseProject(await fs.read(fileName(name)), name)
}

export async function saveProject(project, objects) {
  await fs.write(fileName(project.name), stringifyProject(project, objects))
}

export const removeProject = (name) => fs.remove(fileName(name))
