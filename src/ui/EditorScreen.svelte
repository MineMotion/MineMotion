<script>
  import { App } from '@capacitor/app'
  import { onMount } from 'svelte'
  import { Engine } from '../Engine.js'
  import { ProjectStore } from '../projects/ProjectStore.js'
  import AddDialog from './editor/AddDialog.svelte'
  import './editor/editor.css'
  import Icon from './editor/Icon.svelte'
  import RenderDialog from './editor/RenderDialog.svelte'
  import SettingsDialog from './editor/SettingsDialog.svelte'
  import SidePanel from './editor/SidePanel.svelte'
  import Timeline from './editor/Timeline.svelte'
  import { flash, ui } from './editor/store.svelte.js'

  let { project, onback } = $props()

  let canvas = $state()

  const tools = [
    ['select', 'Select'],
    ['translate', 'Translate'],
    ['rotate', 'Rotate'],
    ['scale', 'Scale']
  ]

  const menuItems = [
    { label: 'Save project', icon: 'save', run: () => flash('Project saved') },
    { label: 'Render', icon: 'render', run: () => (ui.renderOpen = true) },
    null,
    { label: 'Settings', icon: 'settings', run: () => (ui.settingsTab = 'general') },
    { label: 'Help', icon: 'help', run: () => (ui.settingsTab = 'help') },
    null,
    { label: 'Home', icon: 'home', run: () => onback() }
  ]

  const runMenu = (item) => {
    ui.menuOpen = false
    item.run()
  }

  const closeOverlays = () => {
    if (!(ui.addOpen || ui.menuOpen || ui.renderOpen || ui.settingsTab)) return false
    Object.assign(ui, { addOpen: false, menuOpen: false, renderOpen: false, settingsTab: null })
    return true
  }

  $effect(() => {
    try {
      localStorage.setItem('mm-theme', ui.prefs.theme)
    } catch {}
  })

  onMount(() => {
    const engine = new Engine(canvas).init()
    const backButton = App.addListener('backButton', () => {
      if (!closeOverlays()) onback()
    })
    ProjectStore.touch(project.id).catch(() => {})

    return () => {
      engine.dispose()
      backButton.then((h) => h.remove())
    }
  })
</script>

<div class="mm editor" data-theme={ui.prefs.theme}>
  <canvas bind:this={canvas}></canvas>

  <button class="btn add" type="button" aria-label="Add object" title="Add" aria-haspopup="menu" aria-expanded={ui.addOpen} onclick={() => (ui.addOpen = true)}>
    <Icon name="add" size={26} />
  </button>

  <div class="tools" role="toolbar" aria-label="Transform tools" aria-orientation="vertical">
    {#each tools as [id, label] (id)}
      <button class="btn" type="button" aria-label={label} title={label} aria-pressed={ui.tool === id} onclick={() => (ui.tool = id)}>
        <Icon name={id} />
      </button>
    {/each}
  </div>

  <div class="top" role="toolbar" aria-label="History and menu">
    <button class="btn" type="button" aria-label="Undo" title="Undo" disabled><Icon name="undo" /></button>
    <button class="btn" type="button" aria-label="Redo" title="Redo" disabled><Icon name="redo" /></button>
    <button class="btn" type="button" aria-label="Menu" title="Menu" aria-haspopup="menu" aria-expanded={ui.menuOpen} onclick={() => (ui.menuOpen = !ui.menuOpen)}>
      <Icon name="menu" />
    </button>
  </div>

  {#if ui.menuOpen}
    <button class="scrim" type="button" aria-label="Close menu" tabindex="-1" onclick={() => (ui.menuOpen = false)}></button>
    <nav class="sidepanel" role="menu" aria-label="Main menu">
      {#each menuItems as item}
        {#if item}
          <button class="menuitem" type="button" role="menuitem" onclick={() => runMenu(item)}>
            <Icon name={item.icon} size={20} />
            {item.label}
          </button>
        {:else}
          <div class="sep" role="separator"></div>
        {/if}
      {/each}
    </nav>
  {/if}

  {#if ui.addOpen}<AddDialog />{/if}
  {#if ui.settingsTab}<SettingsDialog />{/if}
  {#if ui.renderOpen}<RenderDialog />{/if}

  <SidePanel />

  {#if ui.timeline}
    <Timeline />
  {:else}
    <button class="btn tab" type="button" onclick={() => (ui.timeline = true)}>
      <Icon name="up" size={18} />
      Timeline
    </button>
  {/if}

  {#if ui.toast}
    <div class="toast" role="status">{ui.toast}</div>
  {/if}
</div>
