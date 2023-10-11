import { app, BrowserWindow,ipcMain } from 'electron'
import path from 'path'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload:path.join(__dirname, 'preload/index.js')
    }
  })

  // win.loadFile('index.html')
  win.loadURL("http://localhost:5173/editer")
  win.webContents.openDevTools()
  // win.whenReady().then(()=>{

  // })
}

app.whenReady().then(() => {
  createWindow()
  
  ipcMain.on('ipc_cmd',(event, message) => {
    // 获取发送消息的窗口的 ID
    const senderWindowId = event.sender.id;

    console.log(`Received message from window with ID: ${senderWindowId}`);
    console.log(`Message content: ${JSON.stringify( message)}`);
  });

})
