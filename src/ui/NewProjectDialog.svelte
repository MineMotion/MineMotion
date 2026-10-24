<script>
  let { oncreate, oncancel } = $props()

  let name = $state('Untitled animation')

  const submit = (e) => {
    e.preventDefault()
    oncreate(name.trim() || 'Untitled animation')
  }
</script>

<div class="scrim">
  <form class="dialog" role="dialog" aria-label="New project" onsubmit={submit}>
    <h2>New project</h2>
    <div class="field">
      <label for="project-name">Project name</label>
      <!-- svelte-ignore a11y_autofocus -->
      <input id="project-name" type="text" bind:value={name} autofocus autocomplete="off" />
      <div class="path">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>
        <span>MineMotion/projects/{name.trim() || 'Untitled animation'}/</span>
      </div>
    </div>
    <div class="actions">
      <button type="button" class="ghost" onclick={oncancel}>Cancel</button>
      <button type="submit" class="accent">Create</button>
    </div>
  </form>
</div>

<style>
  .scrim {
    position: fixed;
    inset: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    background: rgba(8, 9, 11, 0.68);
  }

  .dialog {
    width: 380px;
    max-width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 18px;
    padding: 22px;
    background: #1f2127;
    border: 1px solid #2c2f37;
    border-radius: 20px;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
  }

  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
  }

  .field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    font-size: 12px;
    font-weight: 500;
    color: #9a9ea8;
  }

  input {
    height: 48px;
    box-sizing: border-box;
    padding: 0 14px;
    background: #17181c;
    border: 1px solid #3a3d46;
    border-radius: 12px;
    color: #ececef;
    font: inherit;
    font-size: 15px;
    outline: none;
    user-select: text;
  }

  input:focus {
    border-color: #6aa84a;
    box-shadow: 0 0 0 3px rgba(106, 168, 74, 0.25);
  }

  .path {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #9a9ea8;
    font-size: 12px;
  }

  .path svg {
    flex: none;
  }

  .path span {
    min-width: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-family: ui-monospace, 'JetBrains Mono', monospace;
  }

  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  button {
    height: 44px;
    padding: 0 20px;
    border-radius: 12px;
    font: inherit;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }

  .ghost {
    background: transparent;
    border: 1px solid #3a3d46;
    color: #ececef;
  }

  .accent {
    background: #204b11;
    border: 1px solid #286d0f;
    color: #f1f7ee;
  }
</style>
