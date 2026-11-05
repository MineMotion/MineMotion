import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Fog,
  Mesh,
  MeshStandardMaterial,
  PlaneGeometry,
  Scene as ThreeScene
} from 'three'

const createMaterial = ({ color, texture }, assets, repeat = 1) => {
  const material = new MeshStandardMaterial({ color })
  if (texture) {
    material.map = assets.texture(texture).clone()
    material.map.repeat.set(repeat, repeat)
    material.map.needsUpdate = true
  }
  return material
}

const builders = {
  block: (data, assets) => new Mesh(new BoxGeometry(), createMaterial(data, assets)),
  plane: (data, assets) =>
    new Mesh(
      new PlaneGeometry(data.size, data.size).rotateX(-Math.PI / 2),
      createMaterial(data, assets, data.size)
    )
}

const defaults = {
  color: 0xffffff,
  size: 1,
  position: [0, 0, 0],
  rotation: [0, 0, 0],
  scale: [1, 1, 1]
}

const defaultEnvironment = { sky: 0x78a7ff, fog: { near: 10, far: 45 } }

export class Scene {
  #events
  #assets
  #root = new ThreeScene()
  #items = new Map()
  #environment = defaultEnvironment

  constructor(events, assets) {
    this.#events = events
    this.#assets = assets

    const sun = new DirectionalLight(0xffffff, 1.6)
    sun.position.set(3, 6, 4)
    this.#root.add(new AmbientLight(0xffffff, 1.2), sun)

    this.#applyEnvironment()
  }

  get root() {
    return this.#root
  }

  add(data) {
    const item = this.#create(data)
    this.#changed()
    return item.id
  }

  update(id, patch) {
    const entry = this.#items.get(id)
    if (!entry) return
    entry.data = { ...entry.data, ...patch, id }
    this.#apply(entry)
    this.#changed()
  }

  remove(id) {
    const entry = this.#items.get(id)
    if (!entry) return
    this.#destroy(entry)
    this.#items.delete(id)
    this.#changed()
  }

  get(id) {
    return this.#items.get(id)?.data
  }

  all() {
    return [...this.#items.values()].map((entry) => entry.data)
  }

  setEnvironment(patch) {
    this.#environment = { ...this.#environment, ...patch }
    this.#applyEnvironment()
    this.#changed()
  }

  clear() {
    this.#items.forEach((entry) => this.#destroy(entry))
    this.#items.clear()
    this.#changed()
  }

  toJSON() {
    return { environment: this.#environment, objects: this.all() }
  }

  fromJSON({ environment = defaultEnvironment, objects = [] }) {
    this.#items.forEach((entry) => this.#destroy(entry))
    this.#items.clear()
    this.#environment = environment
    this.#applyEnvironment()
    objects.forEach((data) => this.#create(data))
    this.#changed()
  }

  dispose() {
    this.#items.forEach((entry) => this.#destroy(entry))
    this.#items.clear()
  }

  #create(data) {
    const item = { ...defaults, ...data, id: data.id ?? crypto.randomUUID() }
    const entry = { data: item, mesh: builders[item.type](item, this.#assets) }
    this.#apply(entry)
    this.#root.add(entry.mesh)
    this.#items.set(item.id, entry)
    return item
  }

  #apply({ data, mesh }) {
    mesh.position.set(...data.position)
    mesh.rotation.set(...data.rotation)
    mesh.scale.set(...data.scale)
    mesh.material.color.set(data.color)
  }

  #destroy({ mesh }) {
    this.#root.remove(mesh)
    mesh.geometry.dispose()
    mesh.material.map?.dispose()
    mesh.material.dispose()
  }

  #applyEnvironment() {
    const { sky, fog } = this.#environment
    this.#root.background = new Color(sky)
    this.#root.fog = new Fog(sky, fog.near, fog.far)
  }

  #changed() {
    this.#events.emit('scene:changed')
  }
}
