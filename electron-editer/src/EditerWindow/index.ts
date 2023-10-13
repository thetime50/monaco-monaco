import { BrowserWindow, IpcMainEvent } from 'electron'
import path from 'path'
import { IPC_CMD } from "common-lib/src/ElectronIpc"
import type { IpcCmdMsg } from "common-lib/src/ElectronIpc"

class EditerWindow{
  constructor(){
    this.onIpcCmd = this.onIpcCmd.bind(this)
  }
  win?: BrowserWindow = null
  create(){
    console.log("__dirname", __dirname)
    this.win = new BrowserWindow({
      width: 1200,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload/index.js')
      }
    })

    // const WinURL = isDev
    //   ? `http://localhost:3000`
    //   : 'file://' + join(__dirname, '../../dist/render/index.html')
    // win.loadFile('index.html')
    this.win.loadURL("http://localhost:5173/editer?" + __dirname)
    this.win.webContents.openDevTools()
  // win.whenReady().then(()=>{

  // })
  }


  onIpcCmd(event: IpcMainEvent, message: IpcCmdMsg) {
    // 获取发送消息的窗口的 ID
    const senderWindowId = event.sender.id;
    let disposed = false
    let result:any = null
    // if (senderWindowId == this.win.id){
    // }
    console.log(`Received message from window with ID: ${senderWindowId}`);
    console.log(`Message content: ${JSON.stringify(message)}`);

    const actionMap = {
      [IPC_CMD.HEAD_MOVESTART]: this.onIPC_CMD_HEAD_MOVESTART.bind(this),
      [IPC_CMD.HEAD_MOVEEND]: this.onIPC_CMD_HEAD_MOVEEND.bind(this),
      [IPC_CMD.HEAD_MAXIMIZE]: this.onIPC_CMD_HEAD_MAXIMIZE.bind(this),
      [IPC_CMD.HEAD_MINIMIZE]: this.onIPC_CMD_HEAD_MINIMIZE.bind(this),
      [IPC_CMD.HEAD_CLOSE]: this.onIPC_CMD_HEAD_CLOSE.bind(this),
    }
    if (actionMap[message.action]){
      disposed = true
      result = actionMap[message.action]()
    }
    return { disposed, result }
  }

  onIPC_CMD_HEAD_MOVESTART(){
    // 
  }
  onIPC_CMD_HEAD_MOVEEND(){
    // 
  }
  onIPC_CMD_HEAD_MAXIMIZE(){
    if (this.win.isMaximized()){
      this.win.unmaximize()
    }else{
      this.win.maximize()
    }
  }
  onIPC_CMD_HEAD_MINIMIZE(){
    this.win.minimize()
  }
  onIPC_CMD_HEAD_CLOSE(){
    this.win.close()
  }
}

export default EditerWindow;
