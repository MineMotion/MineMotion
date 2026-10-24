<script>
  import { onMount } from 'svelte'
  import { OBJECT_TYPES } from '../core/objectTypes.js'
  import { SceneEngine } from '../scene/SceneEngine.js'
  import { leaveProject } from '../state/app.svelte.js'
  import { saveProject } from '../storage/projectStore.js'
  import { onBack } from './backButton.js'

  let { project } = $props()

  const STATUS = { saved: 'Guardado', dirty: 'Sin guardar', saving: 'Guardando…', error: 'Error al guardar' }

  let host
  let engine
  let timer
  let revision = 0
  let status = $state('saved')
  let selected = $state(null)
  let menuOpen = $state(false)

  async function save() {
    clearTimeout(timer)
    const current = revision
    status = 'saving'
    try {
      await saveProject(project, engine.serialize())
      status = current === revision ? 'saved' : 'dirty'
    } catch {
      status = 'error'
    }
  }

  function changed() {
    revision++
    status = 'dirty'
    clearTimeout(timer)
    timer = setTimeout(save, 1500)
  }

  async function exit() {
    if (status !== 'saved') await save()
    if (status === 'error' && !confirm('No se pudo guardar. ¿Salir sin guardar?')) return
    leaveProject()
  }

  function add(type) {
    menuOpen = false
    engine.add(type)
  }

  onMount(() => {
    engine = new SceneEngine(host, { onChange: changed, onSelect: (info) => (selected = info) })
    engine.load(project.scene.objects)

    const hidden = () => {
      if (document.hidden && status === 'dirty') save()
    }
    document.addEventListener('visibilitychange', hidden)
    const removeBack = onBack(exit)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('visibilitychange', hidden)
      removeBack()
      engine.dispose()
    }
  })
</script>

<div class="editor">
  <div class="viewport" bind:this={host}></div>

  <header>
    <button onclick={exit} aria-label="Volver">←</button>
    <span class="title">{project.name}</span>
    <span class="status {status}">{STATUS[status]}</span>
    <button onclick={save} disabled={status === 'saved' || status === 'saving'}>Guardar</button>
  </header>

  <footer>
    {#if menuOpen}
      <div class="menu">
        {#each OBJECT_TYPES as t (t.type)}
          <button onclick={() => add(t.type)}>{t.label}</button>
        {/each}
      </div>
    {/if}
    <button class="primary" onclick={() => (menuOpen = !menuOpen)}>+ Agregar</button>
    <span class="selection">{selected ? selected.name : 'Toca un objeto para seleccionarlo'}</span>
    <button class="danger" onclick={() => engine.removeSelected()} disabled={!selected}>Eliminar</button>
  </footer>
</div>

<style>
  .editor {
    position: fixed;
    inset: 0;
  }

  .viewport {
    position: absolute;
    inset: 0;
  }

  header,
  footer {
    position: absolute;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    padding-left: calc(10px + env(safe-area-inset-left));
    padding-right: calc(10px + env(safe-area-inset-right));
    background: rgba(30, 31, 36, 0.85);
  }

  header {
    top: 0;
    padding-top: calc(8px + env(safe-area-inset-top));
    padding-bottom: 8px;
  }

  footer {
    bottom: 0;
    padding-top: 8px;
    padding-bottom: calc(8px + env(safe-area-inset-bottom));
  }

  .title {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 600;
  }

  .status {
    font-size: 12px;
    color: var(--muted);
  }

  .status.dirty {
    color: #e8c547;
  }

  .status.error {
    color: var(--danger);
  }

  .selection {
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 13px;
    color: var(--muted);
    text-align: center;
  }

  .menu {
    position: absolute;
    bottom: 100%;
    left: calc(10px + env(safe-area-inset-left));
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 8px;
    margin-bottom: 6px;
    background: rgba(30, 31, 36, 0.95);
    border-radius: 10px;
  }
</style>
