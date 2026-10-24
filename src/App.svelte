<script>
  import { Engine } from './Engine'

  let canvas

  $effect(() => {
    const engine = new Engine(canvas).init()
    return () => engine.dispose()
  })
</script>

<canvas bind:this={canvas}></canvas>
