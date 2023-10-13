import { app, ipcMain } from 'electron'

import EditerWindow from "./EditerWindow"
import IpcManage from "./IpcManage"

app.whenReady().then(() => {
  var ewin = new EditerWindow()
  ewin.create()

  IpcManage.addLisent({
    channel: "ipc_cmd",
    winId: ewin.win.id, 
    cb:ewin.onIpcCmd
  } )

})
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
})
