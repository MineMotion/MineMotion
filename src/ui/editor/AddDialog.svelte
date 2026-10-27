<script>
  import { addObject, flash, ui } from './store.svelte.js'
  import Icon from './Icon.svelte'

  const items = {
    primitives: ['Cube', 'Sphere', 'Cylinder', 'Cone', 'Plane'],
    lights: ['Point', 'Sun', 'Spot'],
    blocks: ['Grass', 'Dirt', 'Stone', 'Wood', 'Sand'],
    entities: ['Humanoid', 'Quadruped', 'Creature'],
    worlds: ['Flat', 'Hills', 'Empty'],
    library: []
  }

  const label = (id) => id[0].toUpperCase() + id.slice(1)
  const close = () => (ui.addOpen = false)
  const add = (name) => {
    addObject(name)
    close()
  }
</script>

<div class="overlay" role="presentation" onclick={close}>
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="add-title" onclick={(e) => e.stopPropagation()}>
    <nav aria-label="Add object sections">
      <h2>Add object</h2>
      {#each Object.keys(items) as id (id)}
        <button class="btn" type="button" aria-pressed={ui.addTab === id} onclick={() => (ui.addTab = id)}>
          <Icon name={id} size={18} />
          {label(id)}
        </button>
      {/each}
    </nav>
    <div class="main">
      <header class="dhead">
        <h3 id="add-title">{label(ui.addTab)}</h3>
        <button class="btn" type="button" aria-label="Close add object" onclick={close}><Icon name="close" size={20} /></button>
      </header>
      <div class="pane">
        {#if ui.addTab === 'library'}
          <div class="field">
            <span>Library</span>
            <button class="btn chip" type="button" aria-label="Import" onclick={() => flash('Import is not available yet')}>
              <Icon name="import" size={18} />
              Import
            </button>
            <p class="sub">No imports yet. Images and models you import appear here.</p>
          </div>
        {:else}
          <div class="items" role="group" aria-label={label(ui.addTab)}>
            {#each items[ui.addTab] as name (name)}
              <button class="btn item" type="button" aria-label={`Add ${name}`} onclick={() => add(name)}>{name}</button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
