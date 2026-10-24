<script>
  import { onMount } from 'svelte'
  import { enterProject } from '../state/app.svelte.js'
  import { createNew, listProjects, openProject, removeProject, storageLocation } from '../storage/projectStore.js'
  import { exitApp, onBack } from './backButton.js'

  let name = $state('')
  let projects = $state([])
  let location = $state('')
  let error = $state('')
  let loading = $state(true)
  let busy = $state(false)

  const fail = (e) => (error = e?.message ?? String(e))
  const formatDate = (ms) => (ms ? new Date(ms).toLocaleString('es', { dateStyle: 'medium', timeStyle: 'short' }) : '')

  async function refresh() {
    try {
      projects = await listProjects()
      error = ''
    } catch (e) {
      fail(e)
    }
    loading = false
  }

  async function create() {
    if (busy || !name.trim()) return
    busy = true
    try {
      enterProject(await createNew(name))
    } catch (e) {
      fail(e)
    }
    busy = false
  }

  async function open(projectName) {
    try {
      enterProject(await openProject(projectName))
    } catch (e) {
      fail(e)
    }
  }

  async function remove(projectName) {
    if (!confirm(`¿Eliminar "${projectName}"?`)) return
    try {
      await removeProject(projectName)
      await refresh()
    } catch (e) {
      fail(e)
    }
  }

  onMount(() => {
    refresh()
    storageLocation().then((p) => (location = p), () => {})
    return onBack(exitApp)
  })
</script>

<main>
  <h1>MineMotion</h1>
  {#if location}<p class="path">{location}</p>{/if}

  <form
    onsubmit={(e) => {
      e.preventDefault()
      create()
    }}
  >
    <input bind:value={name} maxlength="40" placeholder="Nombre del proyecto" autocomplete="off" />
    <button class="primary" type="submit" disabled={busy || !name.trim()}>Crear</button>
  </form>

  {#if error}<p class="error">{error}</p>{/if}

  <h2>Proyectos</h2>
  {#if loading}
    <p class="hint">Cargando…</p>
  {:else if projects.length === 0}
    <p class="hint">Aún no hay proyectos.</p>
  {:else}
    <ul>
      {#each projects as p (p.name)}
        <li>
          <button class="open" onclick={() => open(p.name)}>
            <span class="name">{p.name}</span>
            <span class="date">{formatDate(p.modified)}</span>
          </button>
          <button class="danger" onclick={() => remove(p.name)}>Borrar</button>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  main {
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    max-width: 640px;
    margin: 0 auto;
    padding: calc(24px + env(safe-area-inset-top)) calc(20px + env(safe-area-inset-right)) calc(24px + env(safe-area-inset-bottom))
      calc(20px + env(safe-area-inset-left));
  }

  h1 {
    margin: 0;
    font-size: 28px;
    color: var(--accent);
  }

  h2 {
    margin: 28px 0 10px;
    font-size: 16px;
    color: var(--muted);
    font-weight: 600;
  }

  .path {
    margin: 4px 0 20px;
    font-size: 12px;
    color: var(--muted);
    word-break: break-all;
  }

  form {
    display: flex;
    gap: 8px;
  }

  input {
    flex: 1;
    min-width: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li {
    display: flex;
    gap: 8px;
  }

  .open {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
    text-align: left;
  }

  .name {
    font-size: 16px;
    word-break: break-all;
  }

  .date {
    font-size: 12px;
    color: var(--muted);
  }

  .error {
    margin: 12px 0 0;
    color: var(--danger);
    font-size: 14px;
  }

  .hint {
    color: var(--muted);
    font-size: 14px;
  }
</style>
