<script>
  import Icon from './Icon.svelte'

  let { onclose } = $props()

  const duration = 5
  const fps = 30

  let playing = $state(false)
  let time = $state(0)
  let keys = $state([0, 1, 2.5])
  let track = $state()

  const pct = (t) => `${(t / duration) * 100}%`

  const seek = (e) => {
    if (!e.buttons) return
    const { left, width } = track.getBoundingClientRect()
    const t = ((e.clientX - left) / width) * duration
    time = Math.round(Math.min(duration, Math.max(0, t)) * fps) / fps
  }

  const down = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    seek(e)
  }

  const addKey = () => {
    if (!keys.includes(time)) keys.push(time)
  }
</script>

<section>
  <div class="bar">
    <button type="button" class="btn" aria-label={playing ? 'Pause' : 'Play'} onclick={() => (playing = !playing)}>
      <Icon name={playing ? 'pause' : 'play'} />
    </button>
    <button type="button" class="btn key" onclick={addKey}>
      <Icon name="keyframe" size={20} />
      Keyframe
    </button>
    <span class="time">{time.toFixed(2)} / {duration.toFixed(2)} s</span>
    <button type="button" class="btn close" aria-label="Hide timeline" onclick={onclose}>
      <Icon name="down" />
    </button>
  </div>

  <div class="track" bind:this={track} onpointerdown={down} onpointermove={seek}>
    <div class="ruler">
      {#each Array(duration + 1) as _, i}
        <span class="tick" style:left={pct(i)}>{i}s</span>
      {/each}
    </div>
    <div class="lane">
      {#each keys as k (k)}
        <i class="diamond" class:on={k === time} style:left={pct(k)}></i>
      {/each}
    </div>
    <div class="playhead" style:left={pct(time)}></div>
  </div>
</section>

<style>
  section {
    position: fixed;
    left: calc(76px + env(safe-area-inset-left));
    right: calc(12px + env(safe-area-inset-right));
    bottom: calc(12px + env(safe-area-inset-bottom));
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 8px 8px 12px;
    background: rgba(23, 24, 28, 0.92);
    border: 1px solid #2c2f37;
    border-radius: 16px;
    color: #ececef;
  }

  .bar {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .key {
    width: auto;
    padding: 0 14px 0 10px;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
  }

  .time {
    flex: 1;
    padding-left: 6px;
    font-size: 12px;
    color: #9a9ea8;
    font-family: ui-monospace, 'JetBrains Mono', monospace;
  }

  .track {
    position: relative;
    margin: 0 18px;
    touch-action: none;
    cursor: pointer;
  }

  .ruler {
    position: relative;
    height: 20px;
    border-bottom: 1px solid #2c2f37;
  }

  .tick {
    position: absolute;
    bottom: 2px;
    transform: translateX(-50%);
    font-size: 10px;
    color: #9a9ea8;
  }

  .lane {
    position: relative;
    height: 36px;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 0 0 8px 8px;
  }

  .diamond {
    position: absolute;
    top: 50%;
    width: 12px;
    height: 12px;
    background: #e8b84a;
    border: 1px solid #7a5a12;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  .diamond.on {
    background: #fff;
    border-color: #e8b84a;
  }

  .playhead {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 2px;
    margin-left: -1px;
    background: #e5675f;
    pointer-events: none;
  }
</style>
