<script>
  import { App } from '@capacitor/app'
  import { onMount } from 'svelte'
  import { Engine } from '../Engine.js'
  import { ProjectStore } from '../projects/ProjectStore.js'

  let { project, onback } = $props()

  let canvas = $state()

  onMount(() => {
    const engine = new Engine(canvas).init()
    const backButton = App.addListener('backButton', onback)
    ProjectStore.touch(project.id).catch(() => {})

    return () => {
      engine.dispose()
      backButton.then((h) => h.remove())
    }
  })
</script>

<canvas bind:this={canvas}></canvas>
