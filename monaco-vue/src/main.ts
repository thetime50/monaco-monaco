import './assets/main.css'
// import './assets/tailwind.css'
import './assets/define.scss'
import tialwindUrl from './assets/tailwind.css?inline' 

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { Input, ConfigProvider, Dropdown, Menu } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css'; 

const app = createApp(App)

const tailwindCss = document.createElement("style")
tailwindCss.innerHTML = tialwindUrl;
tailwindCss.setAttribute("data-note-id","tailwind")
const headDom = document.querySelector("head")

app.use(createPinia())
app.use(router)
app.use(Input);
app.use(ConfigProvider)
app.use(Dropdown)
app.use(Menu)

app.mount('#app')
headDom?.prepend(tailwindCss)

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
