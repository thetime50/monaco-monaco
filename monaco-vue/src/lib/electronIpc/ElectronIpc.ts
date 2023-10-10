declare global {
  interface Window {
    ipcRenderer: {
      send: (channel: string, ...args: any[])=>void
    };
  }
}

export class ElectronIpc{
  static send = (channel: string, ...args: any[]) => {
    if (!window.ipcRenderer || !window.ipcRenderer.send){
      throw new Error("找不到 window.ipcRenderer.send")
    }
    window.ipcRenderer.send(channel, ...args)
  }

}


