import { Scene } from './Scene'
import { Viewport } from './Viewport'

export class MineMotion {
  scene = new Scene(this)
  viewport = new Viewport(this)

  mount(canvas) {
    this.viewport.mount(canvas)
  }

  dispose() {
    this.viewport.dispose()
  }
}
