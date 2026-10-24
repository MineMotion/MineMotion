<script>
  import { mm } from './mm'

  let canvas

  $effect(() => {
    mm.mount(canvas)
    return () => mm.dispose()
  })
</script>

<canvas bind:this={canvas}></canvas>
