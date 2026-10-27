<script>
  let { options, value, onpick, disabled = false } = $props()
</script>

<div class="seg" role="group">
  {#each options as [id, label] (id)}
    <button class="btn" type="button" aria-pressed={String(value) === String(id)} {disabled} onclick={() => onpick(id)}>{label}</button>
  {/each}
</div>
