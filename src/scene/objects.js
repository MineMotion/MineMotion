import * as THREE from 'three'
import { OBJECT_TYPES } from '../core/objectTypes.js'
import { newId } from '../core/project.js'

const GEOMETRIES = {
  cube: () => new THREE.BoxGeometry(1, 1, 1),
  sphere: () => new THREE.SphereGeometry(0.5, 24, 16),
  cylinder: () => new THREE.CylinderGeometry(0.5, 0.5, 1, 24)
}

const LABELS = Object.fromEntries(OBJECT_TYPES.map((o) => [o.type, o.label]))
const COLORS = ['#b0b0b0', '#c58a4b', '#d9534f', '#4a90d9', '#e8c547']

const round = (values) => values.map((v) => +v.toFixed(4))

function freeSlot(existing) {
  const taken = new Set(existing.map((o) => `${Math.round(o.position[0])},${Math.round(o.position[2])}`))
  for (let i = 0; ; i++) {
    const x = i === 0 ? 0 : i % 2 ? (i + 1) / 2 : -i / 2
    if (!taken.has(`${x},0`)) return x
  }
}

export function newObjectData(type, existing) {
  return {
    id: newId(),
    type,
    name: `${LABELS[type]} ${existing.filter((o) => o.type === type).length + 1}`,
    position: [freeSlot(existing), 0.5, 0],
    rotation: [0, 0, 0],
    scale: [1, 1, 1],
    color: COLORS[existing.length % COLORS.length]
  }
}

export function createMesh(data) {
  const mesh = new THREE.Mesh(GEOMETRIES[data.type](), new THREE.MeshStandardMaterial({ color: data.color }))
  mesh.name = data.name
  mesh.userData = { id: data.id, type: data.type }
  mesh.position.fromArray(data.position)
  mesh.rotation.fromArray(data.rotation)
  mesh.scale.fromArray(data.scale)
  return mesh
}

export function toData(mesh) {
  return {
    id: mesh.userData.id,
    type: mesh.userData.type,
    name: mesh.name,
    position: round(mesh.position.toArray()),
    rotation: round([mesh.rotation.x, mesh.rotation.y, mesh.rotation.z]),
    scale: round(mesh.scale.toArray()),
    color: `#${mesh.material.color.getHexString()}`
  }
}

export function disposeMesh(mesh) {
  mesh.geometry.dispose()
  mesh.material.dispose()
}
