import { Assets } from '../assets/Assets.js'
import { EventBus } from '../events/EventBus.js'
import { Renderer } from '../render/Renderer.js'
import { Scene } from '../scene/Scene.js'

export class Engine {
  constructor(canvas) {
    this.events = new EventBus()
    this.assets = new Assets()
    this.renderer = new Renderer(canvas)
    this.scene = new Scene(this.events, this.assets)
  }

  init() {
    this.#createTestScene()
    this.renderer.start(this.scene.root)
    return this
  }

  dispose() {
    this.renderer.dispose()
    this.scene.dispose()
    this.assets.dispose()
  }

  #createTestScene() {
    this.scene.add({ type: 'plane', size: 100, texture: 'textures/grass.png' })
    this.scene.add({ type: 'block', position: [0, 0.5, 0] })
  }
}
