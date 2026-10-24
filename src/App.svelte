<script>
  import EditorScreen from './ui/EditorScreen.svelte'
  import ProjectsScreen from './ui/ProjectsScreen.svelte'

  let project = $state(null)
</script>

{#if project}
  <EditorScreen {project} onback={() => (project = null)} />
{:else}
  <ProjectsScreen onopen={(p) => (project = p)} />
{/if}
