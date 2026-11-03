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

const builders = {
  block: ({ color }) => new Mesh(new BoxGeometry(), new MeshStandardMaterial({ color })),
  plane: ({ color, size }) =>
    new Mesh(new PlaneGeometry(size, size).rotateX(-Math.PI / 2), new MeshStandardMaterial({ color }))
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
  #root = new ThreeScene()
  #items = new Map()
  #environment = defaultEnvironment

  constructor(events) {
    this.#events = events

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
    const entry = { data: item, mesh: builders[item.type](item) }
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
