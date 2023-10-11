import { ipcMain, IpcMainEvent } from 'electron'

interface LisentCbRet { disposed:boolean, result?:any }
type LisentCb = (event: IpcMainEvent, ...args: any[]) => LisentCbRet
interface IpcLisent { channel: string, winId: number, cb: LisentCb }
class IpcManage{
  static channels: Record<string, IpcManage> = {}
  static addLisent(ipcLisent: IpcLisent){
    var ipc = this.channels[ipcLisent.channel]
    if (!ipc){
      ipc = new IpcManage(ipcLisent.channel)
      this.channels[ipcLisent.channel] = ipc
    }
    ipc.addLisent(ipcLisent)
  }
  static removeLisent(channel: string, winId: number) {
    var ipc = this.channels[channel]
    if (!ipc) return
    ipc.removeLisent(winId)
  }

  channel=""
  lisents: Record<number, IpcLisent> = {}
  constructor(channel:string){
    this.channel = channel
    ipcMain.on(channel,this.onIpcMessage)
  }
  addLisent(ipcLisent: IpcLisent){
    this.lisents[ipcLisent.winId] = ipcLisent
  }
  onIpcMessage(event: IpcMainEvent, ...args: any[]){
    Object.keys( this.lisents).find((winId)=>{
      if (Number( winId) === event.sender.id){
        var lisent = this.lisents[Number(winId)]
        var res = lisent.cb(event, ...args)
        if(res.disposed){
          console.log(`${lisent.channel} ${lisent.winId} 已处理`)
        }
        return res.disposed
      }
    })
  }
  removeLisent(winId: number) {
    delete this.lisents[winId]
  }
}

export default IpcManage
