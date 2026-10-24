import * as THREE from 'three'

const SIZE = 32

function grassTexture() {
  let seed = 7
  const random = () => (seed = (seed * 16807) % 2147483647) / 2147483647
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = 16
  const ctx = canvas.getContext('2d')
  for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
      ctx.fillStyle = `hsl(${95 + random() * 12}, 48%, ${38 + random() * 22}%)`
      ctx.fillRect(x, y, 1, 1)
    }
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestFilter
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(SIZE, SIZE)
  return texture
}

function axis(to, color) {
  const geometry = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(), to])
  return new THREE.Line(geometry, new THREE.LineBasicMaterial({ color }))
}

export function createWorld(scene) {
  scene.background = new THREE.Color(0x87b8e8)

  scene.add(
    new THREE.Mesh(
      new THREE.PlaneGeometry(SIZE, SIZE).rotateX(-Math.PI / 2),
      new THREE.MeshLambertMaterial({ map: grassTexture() })
    )
  )

  const grid = new THREE.GridHelper(SIZE, SIZE, 0x000000, 0x000000)
  grid.material.transparent = true
  grid.material.opacity = 0.18
  grid.position.y = 0.005
  scene.add(grid)

  const half = SIZE / 2
  for (const line of [axis(new THREE.Vector3(half, 0, 0), 0xe53935), axis(new THREE.Vector3(0, 0, half), 0x1e88e5)]) {
    line.position.y = 0.01
    scene.add(line)
  }
  scene.add(axis(new THREE.Vector3(0, half, 0), 0x43a047))

  scene.add(new THREE.AmbientLight(0xffffff, 1.2))
  const sun = new THREE.DirectionalLight(0xffffff, 1.6)
  sun.position.set(3, 6, 4)
  scene.add(sun)
}
