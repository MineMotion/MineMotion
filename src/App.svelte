<script>
  import { app, currentProject } from './state/app.svelte.js'
  import EditorScreen from './ui/EditorScreen.svelte'
  import ProjectsScreen from './ui/ProjectsScreen.svelte'
</script>

{#if app.screen === 'editor'}
  <EditorScreen project={currentProject()} />
{:else}
  <ProjectsScreen />
{/if}
