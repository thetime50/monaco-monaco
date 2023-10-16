import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Input } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; 

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Input);

app.mount('#app')

window.addEventListener("keyup", (e)=>{
  console.log(e.key)
  if(e.key =="F12"){
    console.log(window.webContents.isDevToolsOpened())
    if (window.webContents.isDevToolsOpened()) {
      window.webContents.closeDevTools()
    }else{
      window.webContents.openDevTools()
    }
  }
})
