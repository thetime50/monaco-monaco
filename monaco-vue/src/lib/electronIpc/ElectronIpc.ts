import { ipcRenderer } from 'electron'

export class ElectronIpc{
  static send = (channel: string, ...args: any[]) => {
    ipcRenderer.send(channel, ...args)
  }
}


