<script>
  import logo from '../assets/logo.png'
  import NewProjectDialog from './NewProjectDialog.svelte'
  import Thumb from './Thumb.svelte'
  import { scenes } from './scenes.js'

  let projects = $state([
    { name: 'Creeper Walk', edited: 'Edited 12 min ago', cubes: scenes.creeper },
    { name: 'Steve Run Cycle', edited: 'Edited yesterday', cubes: scenes.steve },
    { name: 'Village Flyover', edited: 'Edited 3 days ago', cubes: scenes.village },
    { name: 'Test Rig', edited: 'Edited Oct 12', cubes: scenes.cube, axes: true }
  ])
  let creating = $state(false)

  const create = (name) => {
    projects.unshift({ name, edited: 'Edited just now', cubes: scenes.cube, axes: true })
    creating = false
  }
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
      {#each projects as project (project)}
        <div class="card">
          <button type="button" class="open">
            <span class="thumb"><Thumb cubes={project.cubes} axes={project.axes} /></span>
            <span class="info">
              <span class="name">{project.name}</span>
              <span class="meta">{project.edited}</span>
            </span>
          </button>
          <button type="button" class="more" aria-label="More options for {project.name}">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><circle cx="12" cy="5" r="1.7" /><circle cx="12" cy="12" r="1.7" /><circle cx="12" cy="19" r="1.7" /></svg>
          </button>
        </div>
      {/each}
    </div>
  </main>

  <footer>
    <div class="path">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
      <span class="mono">Documents/MineMotion/projects</span>
      <span aria-hidden="true">·</span>
      <span>{projects.length} projects</span>
    </div>
    <button type="button" class="fab" onclick={() => (creating = true)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
      New Project
    </button>
  </footer>

  {#if creating}
    <NewProjectDialog oncreate={create} oncancel={() => (creating = false)} />
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
