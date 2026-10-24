<script>
  import { grid, palette } from './scenes.js'

  let { cubes, axes = false } = $props()
</script>

<svg viewBox="0 0 190 112" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
  <polygon points="95,33 173,72 95,111 17,72" fill="#263f29" stroke="#3b5c3a" />
  {#each grid as [x1, y1, x2, y2]}
    <line {x1} {y1} {x2} {y2} stroke="#3b5c3a" />
  {/each}
  {#if axes}
    <g stroke-width="1.6" stroke-linecap="round">
      <line x1="95" y1="72" x2="152" y2="100" stroke="#e5675f" />
      <line x1="95" y1="72" x2="38" y2="100" stroke="#5aa0ff" />
      <line x1="95" y1="72" x2="95" y2="10" stroke="#6fd05c" />
    </g>
  {/if}
  <g stroke="rgba(0,0,0,0.25)" stroke-linejoin="round">
    {#each cubes as [x, y, color]}
      <g transform="translate({x} {y}) scale(0.8)">
        <polygon points="0,0 17.3,10 0,20 -17.3,10" fill={palette[color][0]} />
        <polygon points="-17.3,10 0,20 0,40 -17.3,30" fill={palette[color][1]} />
        <polygon points="0,20 17.3,10 17.3,30 0,40" fill={palette[color][2]} />
      </g>
    {/each}
  </g>
</svg>

<style>
  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
