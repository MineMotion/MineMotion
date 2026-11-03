<script>
  import { onMount } from 'svelte'
  import { Engine } from './core/Engine.js'

  let canvas = $state()

  onMount(() => {
    const engine = new Engine(canvas).init()
    return () => engine.dispose()
  })
</script>

<canvas bind:this={canvas}></canvas>
