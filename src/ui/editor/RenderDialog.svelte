<script>
  import { flash, ui } from './store.svelte.js'
  import Icon from './Icon.svelte'
  import Segment from './Segment.svelte'

  const tabs = [
    ['render', 'Render'],
    ['post', 'Postprocessing']
  ]

  const title = $derived(tabs.find(([id]) => id === ui.renderTab)[1])
  const close = () => (ui.renderOpen = false)
  const set = (key) => (value) => (ui.prefs[key] = value)
</script>

<div class="overlay" role="presentation" onclick={close}>
  <div class="dialog" role="dialog" aria-modal="true" aria-labelledby="render-title" onclick={(e) => e.stopPropagation()}>
    <nav aria-label="Render sections">
      <h2>Render</h2>
      {#each tabs as [id, label] (id)}
        <button class="btn" type="button" aria-pressed={ui.renderTab === id} onclick={() => (ui.renderTab = id)}>{label}</button>
      {/each}
    </nav>
    <div class="main">
      <header class="dhead">
        <h3 id="render-title">{title}</h3>
        <button class="btn" type="button" aria-label="Close render" onclick={close}><Icon name="close" size={20} /></button>
      </header>
      <div class="pane">
        {#if ui.renderTab === 'render'}
          <div class="field">
            <span>Resolution</span>
            <Segment options={[['1280', '1280 × 720'], ['1920', '1920 × 1080'], ['3840', '3840 × 2160']]} value={ui.prefs.res} onpick={set('res')} />
          </div>
          <div class="field">
            <span>Frame rate</span>
            <Segment options={[['12', '12'], ['24', '24'], ['30', '30'], ['60', '60']]} value={ui.prefs.fps} onpick={set('fps')} />
          </div>
          <div class="field">
            <span>Format</span>
            <Segment options={[['mp4', 'MP4'], ['webm', 'WebM']]} value={ui.prefs.fmt} onpick={set('fmt')} />
          </div>
          <button class="btn chip" type="button" onclick={() => flash('Render is not available yet')}>
            <Icon name="render" size={18} />
            Render
          </button>
        {:else}
          <div class="field">
            <span>Anti-aliasing</span>
            <Segment options={[['off', 'Off'], ['2x', '2x'], ['4x', '4x']]} value={ui.prefs.aa} onpick={set('aa')} />
          </div>
          <div class="field">
            <span>Vignette</span>
            <Segment options={[['off', 'Off'], ['low', 'Low'], ['high', 'High']]} value={ui.prefs.vig} onpick={set('vig')} />
          </div>
          <div class="field">
            <span>Film grain</span>
            <Segment options={[['off', 'Off'], ['low', 'Low'], ['high', 'High']]} value={ui.prefs.grain} onpick={set('grain')} />
          </div>
          <div class="field">
            <span>Audio</span>
            <Segment options={[['off', 'Off'], ['on', 'On']]} value={ui.prefs.audio} onpick={set('audio')} />
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
