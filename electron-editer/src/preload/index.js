const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  // send: (channel: string, ...args: any[]) => ipcRenderer.send(channel, ...args)
  send: (channel, ...args) => ipcRenderer.send(channel, ...args)
})
