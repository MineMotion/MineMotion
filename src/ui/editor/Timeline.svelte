<script>
  import { ui } from './store.svelte.js'
  import Icon from './Icon.svelte'

  const duration = 5
  const fps = 30
  const pct = (t) => `${(t / duration) * 100}%`

  let track = $state()

  $effect(() => {
    if (!ui.playing) return
    let frame
    let last = performance.now()
    const tick = (now) => {
      ui.time = Math.min(duration, ui.time + (now - last) / 1000)
      last = now
      if (ui.time >= duration) ui.playing = false
      else frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  })

  const seek = (e) => {
    const { left, width } = track.getBoundingClientRect()
    const t = Math.min(duration, Math.max(0, ((e.clientX - left) / width) * duration))
    ui.time = Math.round(t * fps) / fps
  }
  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    seek(e)
  }
  const drag = (e) => {
    if (e.buttons) seek(e)
  }
  const addKey = () => {
    if (!ui.keys.includes(ui.time)) ui.keys.push(ui.time)
  }
</script>

<div class="timeline" role="group" aria-label="Timeline">
  <button class="btn" type="button" aria-label={ui.playing ? 'Pause' : 'Play'} title={ui.playing ? 'Pause' : 'Play'} aria-pressed={ui.playing} onclick={() => (ui.playing = !ui.playing)}>
    <Icon name={ui.playing ? 'pause' : 'play'} />
  </button>
  <div class="track" bind:this={track} role="slider" tabindex="0" aria-label="Playhead" aria-valuemin="0" aria-valuemax={duration} aria-valuenow={ui.time} onpointerdown={down} onpointermove={drag}>
    <div class="playhead" style:left={pct(ui.time)}></div>
    {#each ui.keys as k (k)}
      <span class="key" style:left={pct(k)}></span>
    {/each}
  </div>
  <span class="time">{ui.time.toFixed(2)}s</span>
  <button class="btn" type="button" aria-label="Add keyframe" title="Add keyframe" onclick={addKey}><Icon name="keyframe" size={20} /></button>
  <button class="btn" type="button" aria-label="Collapse timeline" title="Collapse" onclick={() => (ui.timeline = false)}><Icon name="down" size={18} /></button>
</div>
