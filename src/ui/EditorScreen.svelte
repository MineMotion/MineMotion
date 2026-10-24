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

<button type="button" class="back" aria-label="Back to projects" onclick={onback}>
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 18-6-6 6-6" /></svg>
</button>

<style>
  canvas {
    position: fixed;
    inset: 0;
  }

  .back {
    position: fixed;
    top: calc(12px + env(safe-area-inset-top));
    left: calc(12px + env(safe-area-inset-left));
    width: 44px;
    height: 44px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(31, 33, 39, 0.85);
    border: 1px solid #2c2f37;
    border-radius: 12px;
    color: #c9ccd3;
    cursor: pointer;
  }
</style>
