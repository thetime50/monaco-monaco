import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electronAPI', {
  // send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args)
  send: (channel:string, ...args: any[]) => ipcRenderer.send(channel, ...args)
})
