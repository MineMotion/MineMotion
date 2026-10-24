let project = null

export const app = $state({ screen: 'projects' })

export const currentProject = () => project

export function enterProject(next) {
  project = next
  app.screen = 'editor'
}

export function leaveProject() {
  project = null
  app.screen = 'projects'
}
