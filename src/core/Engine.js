import { EventBus } from '../events/EventBus.js'
import { Renderer } from '../render/Renderer.js'
import { Scene } from '../scene/Scene.js'

const FOG_CEILING = 12

export class Engine {
  constructor(canvas) {
    this.events = new EventBus()
    this.renderer = new Renderer(canvas, { fogCeiling: FOG_CEILING })
    this.scene = new Scene(this.events)
  }

  init() {
    this.#createTestScene()
    this.renderer.start(this.scene.root)
    return this
  }

  dispose() {
    this.renderer.dispose()
    this.scene.dispose()
  }

  #createTestScene() {
    this.scene.add({ type: 'plane', size: 100, color: 0x5d9c3f })
    this.scene.add({ type: 'block', position: [0, 0.5, 0] })
  }
}
