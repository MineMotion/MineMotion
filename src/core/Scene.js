import { AmbientLight, BoxGeometry, Color, DirectionalLight, Mesh, MeshStandardMaterial, Scene as ThreeScene } from 'three'

export class Scene {
  root = new ThreeScene()

  constructor(mm) {
    this.mm = mm
    this.root.background = new Color(0x1e1f24)

    const sun = new DirectionalLight(0xffffff, 1.6)
    sun.position.set(3, 6, 4)

    this.cube = new Mesh(new BoxGeometry(), new MeshStandardMaterial({ color: 0x6abe3e }))
    this.root.add(new AmbientLight(0xffffff, 1.2), sun, this.cube)
  }
}
