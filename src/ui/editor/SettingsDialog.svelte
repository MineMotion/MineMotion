<script>
  import { ui } from './store.svelte.js'
  import Icon from './Icon.svelte'
  import Segment from './Segment.svelte'

  const tabs = [
    ['general', 'General'],
    ['storage', 'Storage'],
    ['editing', 'Editing'],
    ['about', 'About'],
    ['help', 'Help']
  ]

  const current = $derived(ui.settingsTab ?? 'general')
  const title = $derived(tabs.find(([id]) => id === current)[1])
  const close = () => (ui.settingsTab = null)
</script>

<div class="overlay" role="presentation" onclick={close}>
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="settings-title" onclick={(e) => e.stopPropagation()}>
    <nav aria-label="Settings sections">
      <h2 id="settings-title">Settings</h2>
      {#each tabs as [id, label] (id)}
        <button class="btn" type="button" aria-pressed={current === id} onclick={() => (ui.settingsTab = id)}>
          <Icon name={id} size={18} />
          {label}
        </button>
      {/each}
    </nav>
    <div class="main">
      <header class="dhead">
        <h3>{title}</h3>
        <button class="btn" type="button" aria-label="Close settings" onclick={close}><Icon name="close" size={20} /></button>
      </header>
      <div class="pane">
        {#if current === 'general'}
          <div class="field">
            <span>Language</span>
            <Segment options={[['en', 'English'], ['es', 'Español']]} value={ui.prefs.lang} onpick={(v) => (ui.prefs.lang = v)} />
          </div>
          <div class="field">
            <span>Theme</span>
            <Segment options={[['dark', 'Dark'], ['light', 'Light'], ['system', 'System']]} value={ui.prefs.theme} onpick={(v) => (ui.prefs.theme = v)} />
          </div>
          <div class="field">
            <span>Interface scale</span>
            <Segment options={[['80', '80%'], ['100', '100%'], ['120', '120%']]} value={ui.prefs.scale} onpick={(v) => (ui.prefs.scale = v)} />
          </div>
        {:else if current === 'storage'}
          <div class="field">
            <span>Projects folder</span>
            <p class="path">Documents/MineMotion/Projects</p>
          </div>
          <div class="field">
            <span>Export folder</span>
            <p class="path">Documents/MineMotion/Exports</p>
          </div>
        {:else if current === 'editing'}
          <div class="info-row">
            <div>
              <div>Autosave</div>
              <p class="sub">Save the project automatically while you edit.</p>
            </div>
            <button class="btn switch" type="button" role="switch" aria-label="Autosave" aria-checked={ui.prefs.autosave} onclick={() => (ui.prefs.autosave = !ui.prefs.autosave)}></button>
          </div>
          <div class="field">
            <span>Autosave interval</span>
            <Segment options={[['30', '30 s'], ['60', '1 min'], ['300', '5 min']]} value={ui.prefs.interval} disabled={!ui.prefs.autosave} onpick={(v) => (ui.prefs.interval = v)} />
          </div>
          <div class="field">
            <span>Undo / redo steps</span>
            <Segment options={[['25', '25'], ['50', '50'], ['100', '100']]} value={ui.prefs.undo} onpick={(v) => (ui.prefs.undo = v)} />
          </div>
        {:else if current === 'about'}
          <div>
            <div>MineMotion</div>
            <p class="sub">Version 0.1.0</p>
          </div>
          <a class="btn link" href="https://github.com/MineMotion/MineMotion" target="_blank" rel="noreferrer">GitHub · MineMotion/MineMotion</a>
        {:else}
          <p class="sub">Use the + button to add primitives, lights, blocks, entities and worlds. Select objects in the Outliner and change them in Properties. Keyframe the timeline with the diamond button, then render from the menu.</p>
        {/if}
      </div>
    </div>
  </div>
</div>
