import { contextBridge, ipcRenderer } from 'electron'
import { getCurrentWindow } from '@electron/remote'

contextBridge.exposeInMainWorld('electronAPI', {
  // send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args)
  send: (channel:string, ...args: any[]) => ipcRenderer.send(channel, ...args),
})

contextBridge.exposeInMainWorld('webContents', {
  isDevToolsOpened: () =>  getCurrentWindow().webContents.isDevToolsOpened(),
  closeDevTools: () => getCurrentWindow().webContents.closeDevTools(),
  openDevTools: () => getCurrentWindow().webContents.openDevTools(),
})
