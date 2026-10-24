import {
  AmbientLight,
  BoxGeometry,
  Color,
  DirectionalLight,
  Mesh,
  MeshStandardMaterial,
  NearestFilter,
  NearestMipmapLinearFilter,
  PerspectiveCamera,
  PlaneGeometry,
  RepeatWrapping,
  Scene,
  SRGBColorSpace,
  TextureLoader,
  WebGLRenderer
} from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import grassUrl from './assets/grass.png'

const FLOOR_SIZE = 128

export class Engine {
  constructor(canvas) {
    this.canvas = canvas
  }

  init() {
    this.scene = new Scene()
    this.scene.background = new Color(0x1e1f24)

    const sun = new DirectionalLight(0xffffff, 1.6)
    sun.position.set(3, 6, 4)

    this.cube = new Mesh(new BoxGeometry(), new MeshStandardMaterial({ color: 0x6abe3e }))
    this.cube.position.y = 0.5
    this.scene.add(new AmbientLight(0xffffff, 1.2), sun, this.cube, this.createFloor())

    this.camera = new PerspectiveCamera(60, 1, 0.1, 300)
    this.camera.position.set(3, 2.5, 4)

    this.renderer = new WebGLRenderer({ canvas: this.canvas, antialias: true })
    this.renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
    this.renderer.setAnimationLoop(() => this.renderer.render(this.scene, this.camera))

    this.controls = new OrbitControls(this.camera, this.canvas)

    this.observer = new ResizeObserver(() => this.resize())
    this.observer.observe(this.canvas)

    return this
  }

  createFloor() {
    const map = new TextureLoader().load(grassUrl)
    map.colorSpace = SRGBColorSpace
    map.wrapS = map.wrapT = RepeatWrapping
    map.magFilter = NearestFilter
    map.minFilter = NearestMipmapLinearFilter
    map.repeat.set(FLOOR_SIZE, FLOOR_SIZE)

    const floor = new Mesh(new PlaneGeometry(FLOOR_SIZE, FLOOR_SIZE), new MeshStandardMaterial({ map }))
    floor.rotation.x = -Math.PI / 2
    return floor
  }

  resize() {
    const { clientWidth: w, clientHeight: h } = this.canvas
    if (!w || !h) return
    this.renderer.setSize(w, h, false)
    this.camera.aspect = w / h
    this.camera.updateProjectionMatrix()
  }

  dispose() {
    this.observer.disconnect()
    this.renderer.setAnimationLoop(null)
    this.controls.dispose()
    this.renderer.dispose()
  }
}
