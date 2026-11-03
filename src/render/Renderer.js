import { PerspectiveCamera, WebGLRenderer } from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { installHeightFog } from './HeightFog.js'

export class Renderer {
  #canvas
  #renderer
  #observer

  constructor(canvas, { fogCeiling }) {
    installHeightFog(fogCeiling)

    this.#canvas = canvas
    this.camera = new PerspectiveCamera(60, 1, 0.1, 300)
    this.camera.position.set(4, 3, 6)

    this.#renderer = new WebGLRenderer({ canvas, antialias: true })
    this.#renderer.setPixelRatio(Math.min(devicePixelRatio, 2))

    this.controls = new OrbitControls(this.camera, canvas)
    this.controls.target.set(0, 0.5, 0)
    this.controls.maxPolarAngle = Math.PI / 2 - 0.02
    this.controls.update()

    this.#observer = new ResizeObserver(() => this.resize())
    this.#observer.observe(canvas)
  }

  start(root) {
    this.#renderer.setAnimationLoop(() => this.#renderer.render(root, this.camera))
  }

  stop() {
    this.#renderer.setAnimationLoop(null)
  }

  resize() {
    const { clientWidth: width, clientHeight: height } = this.#canvas
    if (!width || !height) return
    this.#renderer.setSize(width, height, false)
    this.camera.aspect = width / height
    this.camera.updateProjectionMatrix()
  }

  dispose() {
    this.stop()
    this.#observer.disconnect()
    this.controls.dispose()
    this.#renderer.dispose()
  }
}
