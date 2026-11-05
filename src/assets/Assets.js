import { NearestFilter, NearestMipmapLinearFilter, RepeatWrapping, SRGBColorSpace, TextureLoader } from 'three'

export class Assets {
  #loader = new TextureLoader()
  #textures = new Map()

  texture(path) {
    let texture = this.#textures.get(path)
    if (!texture) {
      texture = this.#loader.load(path)
      texture.colorSpace = SRGBColorSpace
      texture.wrapS = texture.wrapT = RepeatWrapping
      texture.magFilter = NearestFilter
      texture.minFilter = NearestMipmapLinearFilter
      this.#textures.set(path, texture)
    }
    return texture
  }

  dispose() {
    this.#textures.forEach((texture) => texture.dispose())
    this.#textures.clear()
  }
}
