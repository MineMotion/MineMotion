<script>
  import { onMount } from 'svelte'
  import logo from '../assets/logo.png'
  import { ProjectStore } from '../projects/ProjectStore.js'
  import ProjectDialog from './ProjectDialog.svelte'
  import Thumb from './Thumb.svelte'
  import { scenes } from './scenes.js'

  let { onopen } = $props()

  let projects = $state([])
  let dialog = $state(null)
  let menu = $state(null)
  let armed = $state(false)
  let error = $state('')

  const refresh = async () => (projects = await ProjectStore.list())

  const ago = (t) => {
    const m = Math.floor((Date.now() - t) / 60000)
    if (m < 1) return 'Edited just now'
    if (m < 60) return `Edited ${m} min ago`
    if (m < 1440) return `Edited ${Math.floor(m / 60)} h ago`
    return `Edited ${new Date(t).toLocaleDateString('en', { month: 'short', day: 'numeric' })}`
  }

  const toggleMenu = (id) => {
    menu = menu === id ? null : id
    armed = false
  }

  const submit = async (name) => {
    if (dialog.project) await ProjectStore.rename(dialog.project.id, name)
    else await ProjectStore.create(name)
    dialog = null
    await refresh()
  }

  const remove = async (project) => {
    if (!armed) return (armed = true)
    await ProjectStore.remove(project.id)
    menu = null
    await refresh()
  }

  onMount(async () => {
    try {
      await ProjectStore.init()
      await refresh()
    } catch (e) {
      error = e.message
    }
  })
</script>

<div class="screen">
  <header>
    <div class="brand">
      <img src={logo} alt="" />
      <span>MineMotion</span>
    </div>
    <button type="button" class="icon" aria-label="Settings">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
    </button>
  </header>

  <main>
    <div class="title">
      <h1>Projects</h1>
      <button type="button" class="sort">
        Recent
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
    </div>

    <div class="grid">
      {#each projects as project (project.id)}
        <div class="card">
          <button type="button" class="open" onclick={() => onopen(project)}>
            <span class="thumb"><Thumb cubes={scenes.cube} axes /></span>
            <span class="info">
              <span class="name">{project.name}</span>
              <span class="meta">{ago(project.modified)}</span>
            </span>
          </button>
          <button type="button" class="more" aria-label="More options for {project.name}" onclick={() => toggleMenu(project.id)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>
          </button>
          {#if menu === project.id}
            <button type="button" class="scrim" aria-label="Close menu" onclick={() => (menu = null)}></button>
            <div class="menu">
              <button type="button" onclick={() => ((dialog = { project }), (menu = null))}>Rename</button>
              <button type="button" class:danger={armed} onclick={() => remove(project)}>
                {armed ? 'Tap again to delete' : 'Delete'}
              </button>
            </div>
          {/if}
        </div>
      {/each}
    </div>

    {#if error}
      <p class="note error">{error}</p>
    {:else if !projects.length}
      <p class="note">No projects yet. Tap New Project to create one.</p>
    {/if}
  </main>

  <footer>
    <div class="path">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
      <span class="mono">Documents/MineMotion/projects</span>
      <span aria-hidden="true">·</span>
      <span>{projects.length} projects</span>
    </div>
    <button type="button" class="fab" onclick={() => (dialog = {})}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
      New Project
    </button>
  </footer>

  {#if dialog}
    <ProjectDialog
      title={dialog.project ? 'Rename project' : 'New project'}
      action={dialog.project ? 'Rename' : 'Create'}
      value={dialog.project?.name}
      onsubmit={submit}
      oncancel={() => (dialog = null)}
    />
  {/if}
</div>

<style>
  .screen {
    position: relative;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    background: #17181c;
    color: #ececef;
  }

  header {
    flex: none;
    height: 56px;
    box-sizing: content-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: env(safe-area-inset-top) calc(12px + env(safe-area-inset-right)) 0 calc(20px + env(safe-area-inset-left));
    border-bottom: 1px solid #26282e;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 17px;
    font-weight: 700;
  }

  .brand img {
    display: block;
    height: 32px;
    width: auto;
  }

  button {
    font: inherit;
    cursor: pointer;
  }

  .icon {
    width: 44px;
    height: 44px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #1f2127;
    border: 1px solid #2c2f37;
    border-radius: 12px;
    color: #c9ccd3;
  }

  main {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    padding: 16px calc(20px + env(safe-area-inset-right)) 110px calc(20px + env(safe-area-inset-left));
  }

  .title {
    height: 44px;
    margin-bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 600;
  }

  .sort {
    height: 44px;
    padding: 0 14px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid #2c2f37;
    border-radius: 12px;
    color: #c9ccd3;
    font-size: 13px;
    font-weight: 500;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
    gap: 12px;
  }

  .card {
    position: relative;
    overflow: hidden;
    background: #1f2127;
    border: 1px solid #2c2f37;
    border-radius: 14px;
  }

  .open {
    display: block;
    width: 100%;
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
    color: inherit;
    text-align: left;
  }

  .thumb {
    display: block;
    height: 108px;
    background: linear-gradient(#2c3039, #1b1d23);
  }

  .info {
    display: block;
    padding: 10px 44px 12px 12px;
  }

  .name {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
  }

  .meta {
    display: block;
    font-size: 12px;
    line-height: 16px;
    color: #9a9ea8;
  }

  .more {
    position: absolute;
    right: 2px;
    bottom: 4px;
    width: 44px;
    height: 44px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: 0;
    border-radius: 12px;
    color: #9a9ea8;
  }

  .scrim {
    position: fixed;
    inset: 0;
    z-index: 5;
    padding: 0;
    background: none;
    border: 0;
  }

  .menu {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 6;
    display: flex;
    flex-direction: column;
    min-width: 150px;
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
    font-size: 14px;
    text-align: left;
  }

  .menu .danger {
    color: #e5675f;
  }

  .note {
    margin: 24px 0 0;
    text-align: center;
    font-size: 13px;
    color: #9a9ea8;
  }

  .note.error {
    color: #e5675f;
  }

  footer {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 96px;
    pointer-events: none;
    background: linear-gradient(transparent, #17181c 70%);
  }

  .path {
    position: absolute;
    left: calc(20px + env(safe-area-inset-left));
    bottom: 26px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12px;
    color: #9a9ea8;
  }

  .mono {
    font-family: ui-monospace, 'JetBrains Mono', monospace;
  }

  .fab {
    position: absolute;
    right: calc(20px + env(safe-area-inset-right));
    bottom: 20px;
    height: 52px;
    padding: 0 22px 0 16px;
    display: flex;
    align-items: center;
    gap: 10px;
    pointer-events: auto;
    background: #204b11;
    border: 1px solid #286d0f;
    border-radius: 16px;
    color: #f1f7ee;
    font-size: 15px;
    font-weight: 600;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45);
  }
</style>
