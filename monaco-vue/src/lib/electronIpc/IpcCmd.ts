import { ElectronIpc } from "./ElectronIpc"
import {IPC_CMD} from "./cmdDef"

interface IpcCmdMsg{
  action: IPC_CMD,
  params?: any,
}

export class IpcCmd {
  static sendCmd = (msg: IpcCmdMsg) => {
    ElectronIpc.send("ipc_cmd", msg)
  }
  static head = {
    move_start:() => {
      this.sendCmd({action:IPC_CMD.HEAD_MOVESTART})
    },
    move_end: () => {
      this.sendCmd({ action: IPC_CMD.HEAD_MOVEEND })
    },
    minimize: () => {
      this.sendCmd({ action: IPC_CMD.HEAD_MINIMIZE })
    },
    maximize: () => {
      this.sendCmd({ action: IPC_CMD.HEAD_MAXIMIZE })
    },
    close: () => {
      this.sendCmd({ action: IPC_CMD.HEAD_CLOSE })
    },
  }
}

