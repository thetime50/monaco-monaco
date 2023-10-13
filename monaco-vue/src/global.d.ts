declare global {
  interface Window {
    electronAPI: {
      send: (channel: string, ...args: any[])=>void,
      webContents: {
        isDevToolsOpened: () => boolean,
        closeDevTools: () => void,
        openDevTools: () => void,
      }
    };
  }
}
export let window: Window
