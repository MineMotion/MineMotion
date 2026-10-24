import { PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export class Viewport {
  camera = new PerspectiveCamera(60, 1, 0.1, 300)

  constructor(mm) {
    this.mm = mm
    this.camera.position.set(3, 2.5, 4)
  }

  mount(canvas) {
    this.renderer = new WebGLRenderer({ canvas, antialias: true })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    this.controls = new OrbitControls(this.camera, canvas)
    this.observer = new ResizeObserver(() => this.resize())
    this.observer.observe(canvas)
    this.renderer.setAnimationLoop(() => this.renderer.render(this.mm.scene.root, this.camera))
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.renderer.domElement
    if (!w || !h) return
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  dispose() {
    this.renderer.setAnimationLoop(null)
    this.observer.disconnect()
    this.controls.dispose()
    this.renderer.dispose()
  }
}
