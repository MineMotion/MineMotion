<script>
  import { ui } from './store.svelte.js'
  import Icon from './Icon.svelte'

  const current = $derived(ui.objects.find((o) => o.id === ui.selId) ?? ui.objects[0])
  const axes = ['x', 'y', 'z']
</script>

<div class="side">
  <div class="rail" role="group" aria-label="Side panel">
    <button class="btn" type="button" aria-label="Outliner" title="Outliner" aria-pressed={ui.panel === 'outliner'} onclick={() => (ui.panel = 'outliner')}>
      <Icon name="outliner" />
    </button>
    <button class="btn" type="button" aria-label="Properties" title="Properties" aria-pressed={ui.panel === 'properties'} onclick={() => (ui.panel = 'properties')}>
      <Icon name="properties" />
    </button>
  </div>

  <div class="content">
    {#if ui.panel === 'outliner'}
      <div role="tree" aria-label="Outliner">
        {#each ui.objects as o (o.id)}
          <div class="row" role="treeitem" tabindex="0" aria-selected={o.id === ui.selId} onclick={() => (ui.selId = o.id)} onkeydown={(e) => e.key === 'Enter' && (ui.selId = o.id)}>
            {o.name}
            <button class="btn" type="button" aria-label={`${o.visible ? 'Hide' : 'Show'} ${o.name}`} onclick={(e) => { e.stopPropagation(); o.visible = !o.visible }}>
              <Icon name="eye" size={16} />
            </button>
          </div>
        {/each}
      </div>
    {:else if current}
      <div class="props">
        <div class="field">
          <span>Name</span>
          <input type="text" aria-label="Name" value={current.name} oninput={(e) => (current.name = e.target.value)} />
        </div>
        <div class="field">
          <span>Position</span>
          <div class="grid3">
            {#each axes as a (a)}
              <input type="number" aria-label={`Position ${a.toUpperCase()}`} value={current[a]} oninput={(e) => (current[a] = Number(e.target.value))} />
            {/each}
          </div>
        </div>
        <div class="field">
          <span>Scale</span>
          <input type="number" aria-label="Scale" value={current.s} oninput={(e) => (current.s = Number(e.target.value))} />
        </div>
        <button class="btn chip" type="button" aria-pressed={current.visible} onclick={() => (current.visible = !current.visible)}>
          {current.visible ? 'Shown' : 'Hidden'}
        </button>
      </div>
    {/if}
  </div>
</div>
