<script>
  import { App } from '@capacitor/app'
  import { onMount } from 'svelte'
  import createIcon from '../assets/create.png'
  import { Engine } from '../Engine.js'
  import { ProjectStore } from '../projects/ProjectStore.js'
  import Icon from './Icon.svelte'
  import Timeline from './Timeline.svelte'

  let { project, onback } = $props()

  const tools = [
    ['select', 'Select'],
    ['translate', 'Translate'],
    ['rotate', 'Rotate'],
    ['scale', 'Scale']
  ]

  let canvas = $state()
  let tool = $state('select')
  let menu = $state(false)
  let timeline = $state(false)

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

<button type="button" class="btn create" aria-label="Create">
  <img src={createIcon} alt="" />
</button>

<nav class="tools" aria-label="Transform tools">
  {#each tools as [id, label] (id)}
    <button type="button" class="btn" class:active={tool === id} aria-label={label} aria-pressed={tool === id} onclick={() => (tool = id)}>
      <Icon name={id} />
    </button>
  {/each}
</nav>

<div class="top">
  <button type="button" class="btn" aria-label="Undo"><Icon name="undo" /></button>
  <button type="button" class="btn" aria-label="Redo"><Icon name="redo" /></button>
  <button type="button" class="btn" class:active={menu} aria-label="Menu" onclick={() => (menu = !menu)}>
    <Icon name="menu" />
  </button>
</div>

{#if menu}
  <button type="button" class="scrim" aria-label="Close menu" onclick={() => (menu = false)}></button>
  <div class="menu">
    <button type="button">Save</button>
    <button type="button">Export</button>
    <button type="button" onclick={onback}>Back to projects</button>
  </div>
{/if}

{#if timeline}
  <Timeline onclose={() => (timeline = false)} />
{:else}
  <button type="button" class="btn tab" onclick={() => (timeline = true)}>
    <Icon name="up" size={18} />
    Timeline
  </button>
{/if}

<style>
  canvas {
    position: fixed;
    inset: 0;
  }

  .create {
    position: fixed;
    top: calc(12px + env(safe-area-inset-top));
    left: calc(12px + env(safe-area-inset-left));
    width: 52px;
    height: 52px;
    background: #204b11;
    border-color: #286d0f;
  }

  .create img {
    width: 38px;
    height: 38px;
  }

  .tools {
    position: fixed;
    top: calc(76px + env(safe-area-inset-top));
    left: calc(12px + env(safe-area-inset-left));
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 4px;
    background: rgba(23, 24, 28, 0.92);
    border: 1px solid #2c2f37;
    border-radius: 14px;
  }

  .tools .btn {
    width: 44px;
    border: 0;
    background: none;
  }

  .tools .btn.active {
    background: #204b11;
  }

  .top {
    position: fixed;
    top: calc(12px + env(safe-area-inset-top));
    right: calc(12px + env(safe-area-inset-right));
    display: flex;
    gap: 8px;
  }

  .scrim {
    position: fixed;
    inset: 0;
    padding: 0;
    background: none;
    border: 0;
  }

  .menu {
    position: fixed;
    top: calc(64px + env(safe-area-inset-top));
    right: calc(12px + env(safe-area-inset-right));
    display: flex;
    flex-direction: column;
    min-width: 180px;
    background: #25272e;
    border: 1px solid #3a3d46;
    border-radius: 12px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  }

  .menu button {
    height: 44px;
    padding: 0 14px;
    background: none;
    border: 0;
    color: #ececef;
    font: inherit;
    font-size: 14px;
    text-align: left;
    cursor: pointer;
  }

  .tab {
    position: fixed;
    left: 50%;
    bottom: calc(12px + env(safe-area-inset-bottom));
    width: auto;
    padding: 0 16px 0 12px;
    gap: 6px;
    transform: translateX(-50%);
    font-size: 13px;
    font-weight: 600;
  }
</style>
