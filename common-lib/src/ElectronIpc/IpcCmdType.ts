import {IPC_CMD} from "./IpcCmdDef"

export interface IpcCmdMsg {
  action: IPC_CMD,
  params?: any,
}
