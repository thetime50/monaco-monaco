import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Input } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; 

import { getCurrentWindow } from '@electron/remote'
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Input);

app.mount('#app')

window.addEventListener("keypress", (e)=>{
  const win = getCurrentWindow()
  if(e.key =="F12"){
    if (win.webContents.isDevToolsOpened()) {
      win.webContents.closeDevTools()
    }else{
      win.webContents.openDevTools()
    }
  }
})
