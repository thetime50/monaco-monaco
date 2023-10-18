<template>
  <div class="window-view flex flex-col">
    <header class="flex flex-row">
      <div class="logo flex-0">OO</div>
      <ul class="menu-list flex-0 flex flex-row">
        <template v-for="menu in menus" :key="menu.id">
          <MenuItemCom :menu="menu" />
        </template>
      </ul>
      <div class="center flex-auto" @mousedown="onDragstart" @mouseup="onDragend">
        <!--  -->
        <!-- <a-button>222</a-button> -->
      </div>
      <div class="right flex-0 flex flex-row">
        <button class="right-btn" @click="minimizeClick">-</button>
        <button class="right-btn" @click="maximizeClick">□</button>
        <button class="right-btn" @click="closeClick">×</button>
      </div>
    </header>
    <div class="flex-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref,readonly,reactive,nextTick,onMounted } from 'vue';
import {IpcCmd} from "@/lib/electronIpc/IpcCmd"
import {Button as AButton}from "ant-design-vue"
import type {MenuItem} from "./menu"
import {getMenuList} from "./menu"
import MenuItemCom from "./MenuItemCom.vue"
import { openFile }from "@/lib/electronIpc/utils"

const menus = readonly<MenuItem>(getMenuList({
  actions:{
    createFile:onCreateFile,
    openFile:onOpenFile,
  }
}))

function onCreateFile(){}
async function onOpenFile(){
  console.log("onOpenFile")
  const fileRes = await openFile()
  console.log("fileRes",fileRes)
}

function onDragstart(){
  IpcCmd.head.move_start()
}
function onDragend(){
  IpcCmd.head.move_end()
}
function minimizeClick(){
  IpcCmd.head.minimize()
}
function maximizeClick(){
  IpcCmd.head.maximize()
}
function closeClick(){
  IpcCmd.head.close()
}
</script>

<style scoped lang="scss">

.window-view {
  width: 100%;
  height: 100%;
}
header{
  user-select: none; 
}
.logo{
  padding:2px;
  margin-right: 5px
}
.menu-list{
  margin: 0;
}

.menu-item{
  padding: 2px;
  cursor: pointer;
  margin: 0 2px;
}

.right-btn{
  width: 25px;
  
}

</style>
