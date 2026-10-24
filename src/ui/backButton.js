import { App } from '@capacitor/app'

export function onBack(handler) {
  const handle = App.addListener('backButton', handler)
  return () => handle.then((h) => h.remove())
}

export const exitApp = () => App.exitApp()
