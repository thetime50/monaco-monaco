declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, ...args: any[])=>void
    };
  }
}

export class ElectronIpc{
  static send = (channel: string, ...args: any[]) => {
    if (!window.electronAPI || !window.electronAPI.send){
      console.log("window.ipcRenderer", window.electronAPI)
      throw new Error("找不到 window.electronAPI.send")
    }
    window.electronAPI.send(channel, ...args)
  }

}


