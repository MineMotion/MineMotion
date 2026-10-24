export const OBJECT_TYPES = [
  { type: 'cube', label: 'Cubo' },
  { type: 'sphere', label: 'Esfera' },
  { type: 'cylinder', label: 'Cilindro' }
]

export const TYPE_IDS = new Set(OBJECT_TYPES.map((o) => o.type))
