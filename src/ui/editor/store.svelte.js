const savedTheme = () => {
  try {
    return localStorage.getItem('mm-theme') || 'dark'
  } catch {
    return 'dark'
  }
}

export const ui = $state({
  tool: 'select',
  addOpen: false,
  addTab: 'primitives',
  menuOpen: false,
  settingsTab: null,
  renderOpen: false,
  renderTab: 'render',
  panel: 'outliner',
  timeline: false,
  playing: false,
  time: 0,
  keys: [0, 1, 2.5],
  selId: 'cube',
  objects: [
    { id: 'cube', name: 'Cube', visible: true, x: 0, y: 0, z: 0, s: 1 },
    { id: 'camera', name: 'Camera', visible: true, x: 0, y: 2, z: -8, s: 1 },
    { id: 'light', name: 'Sun Light', visible: false, x: 4, y: 6, z: 2, s: 1 }
  ],
  toast: '',
  prefs: {
    lang: 'en',
    theme: savedTheme(),
    scale: '100',
    autosave: true,
    interval: '60',
    undo: '50',
    res: '1920',
    fps: '30',
    fmt: 'mp4',
    aa: '2x',
    vig: 'off',
    grain: 'off',
    audio: 'off'
  }
})

let toastTimer
export const flash = (message) => {
  ui.toast = message
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (ui.toast = ''), 2400)
}

let nextId = 1
export const addObject = (name) => {
  const id = `${name.toLowerCase()}-${nextId++}`
  ui.objects.push({ id, name, visible: true, x: 0, y: 0, z: 0, s: 1 })
  ui.selId = id
}
