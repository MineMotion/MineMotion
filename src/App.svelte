<script>
  import { onMount } from 'svelte'
  import * as THREE from 'three'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

  let host

  const SIZE = 32

  function grassTexture() {
    const canvas = document.createElement('canvas')
    canvas.width = canvas.height = 16
    const ctx = canvas.getContext('2d')
    for (let x = 0; x < 16; x++) {
      for (let y = 0; y < 16; y++) {
        const l = 38 + Math.random() * 22
        ctx.fillStyle = `hsl(${95 + Math.random() * 12}, 48%, ${l}%)`
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

  onMount(() => {
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    host.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x87b8e8)

    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 300)
    camera.position.set(4, 3, 5)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0.5, 0)
    controls.update()

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(SIZE, SIZE).rotateX(-Math.PI / 2),
      new THREE.MeshLambertMaterial({ map: grassTexture() })
    )
    scene.add(ground)

    const grid = new THREE.GridHelper(SIZE, SIZE, 0x000000, 0x000000)
    grid.material.transparent = true
    grid.material.opacity = 0.18
    grid.position.y = 0.005
    scene.add(grid)

    const half = SIZE / 2
    for (const line of [
      axis(new THREE.Vector3(half, 0, 0), 0xe53935),
      axis(new THREE.Vector3(0, 0, half), 0x1e88e5)
    ]) {
      line.position.y = 0.01
      scene.add(line)
    }
    scene.add(axis(new THREE.Vector3(0, half, 0), 0x43a047))

    scene.add(new THREE.AmbientLight(0xffffff, 1.2))
    const sun = new THREE.DirectionalLight(0xffffff, 1.6)
    sun.position.set(3, 6, 4)
    scene.add(sun)

    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshStandardMaterial({ color: 0xb0b0b0 })
    )
    cube.position.y = 0.5
    scene.add(cube)

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = host
      renderer.setSize(w, h)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
    }
    const observer = new ResizeObserver(resize)
    observer.observe(host)
    resize()

    renderer.setAnimationLoop(() => renderer.render(scene, camera))

    return () => {
      observer.disconnect()
      renderer.setAnimationLoop(null)
      controls.dispose()
      renderer.dispose()
      renderer.domElement.remove()
    }
  })
</script>

<div bind:this={host} class="viewport"></div>

<style>
  .viewport {
    width: 100%;
    height: 100%;
  }
</style>
