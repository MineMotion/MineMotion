import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
import { createMesh, disposeMesh, newObjectData, toData } from './objects.js'
import { createWorld } from './world.js'

const TAP_DISTANCE = 8
const TAP_TIME = 500
const HIGHLIGHT = 0x333333

export class SceneEngine {
  constructor(host, { onChange, onSelect }) {
    this.host = host
    this.onChange = onChange
    this.onSelect = onSelect
    this.selected = null
    this.down = null

    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    host.appendChild(this.renderer.domElement)

    this.scene = new THREE.Scene()
    createWorld(this.scene)
    this.objects = new THREE.Group()
    this.scene.add(this.objects)

    this.camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300)
    this.camera.position.set(4, 3, 5)

    const el = this.renderer.domElement

    this.orbit = new OrbitControls(this.camera, el)
    this.orbit.target.set(0, 0.5, 0)
    this.orbit.update()

    this.transform = new TransformControls(this.camera, el)
    this.transform.setMode('translate')
    this.transform.size = 1.4
    this.transform.addEventListener('dragging-changed', (e) => {
      this.orbit.enabled = !e.value
    })
    this.transform.addEventListener('objectChange', () => this.onChange())
    this.scene.add(this.transform.getHelper())

    this.raycaster = new THREE.Raycaster()
    this.pointer = new THREE.Vector2()

    this.handleDown = (e) => {
      if (!e.isPrimary) return
      this.down = { x: e.clientX, y: e.clientY, t: performance.now(), gizmo: this.transform.axis !== null }
    }
    this.handleUp = (e) => {
      const d = this.down
      this.down = null
      if (!e.isPrimary || !d || d.gizmo) return
      if (Math.hypot(e.clientX - d.x, e.clientY - d.y) > TAP_DISTANCE || performance.now() - d.t > TAP_TIME) return
      this.pick(e)
    }
    el.addEventListener('pointerdown', this.handleDown)
    el.addEventListener('pointerup', this.handleUp)

    this.observer = new ResizeObserver(() => this.resize())
    this.observer.observe(host)
    this.resize()

    this.renderer.setAnimationLoop(() => this.renderer.render(this.scene, this.camera))
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.host
    if (!w || !h) return
    this.renderer.setSize(w, h)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  pick(e) {
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.pointer.set(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1)
    this.raycaster.setFromCamera(this.pointer, this.camera)
    const hit = this.raycaster.intersectObjects(this.objects.children, false)[0]
    this.select(hit ? hit.object : null)
  }

  select(mesh) {
    if (this.selected === mesh) return
    this.selected?.material.emissive.setHex(0x000000)
    this.selected = mesh
    if (mesh) {
      mesh.material.emissive.setHex(HIGHLIGHT)
      this.transform.attach(mesh)
    } else {
      this.transform.detach()
    }
    this.onSelect(mesh ? { id: mesh.userData.id, name: mesh.name } : null)
  }

  load(list) {
    this.select(null)
    for (const mesh of [...this.objects.children]) {
      this.objects.remove(mesh)
      disposeMesh(mesh)
    }
    for (const data of list) this.objects.add(createMesh(data))
  }

  serialize() {
    return this.objects.children.map(toData)
  }

  add(type) {
    const mesh = createMesh(newObjectData(type, this.serialize()))
    this.objects.add(mesh)
    this.select(mesh)
    this.onChange()
  }

  removeSelected() {
    const mesh = this.selected
    if (!mesh) return
    this.select(null)
    this.objects.remove(mesh)
    disposeMesh(mesh)
    this.onChange()
  }

  dispose() {
    const el = this.renderer.domElement
    el.removeEventListener('pointerdown', this.handleDown)
    el.removeEventListener('pointerup', this.handleUp)
    this.observer.disconnect()
    this.renderer.setAnimationLoop(null)
    this.transform.dispose()
    this.orbit.dispose()
    for (const mesh of this.objects.children) disposeMesh(mesh)
    this.renderer.dispose()
    el.remove()
  }
}
