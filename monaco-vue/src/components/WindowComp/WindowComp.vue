<template>
  <div class="window-view flex-layout flex-col">
    <header class="flex-layout flex-row">
      <div class="logo flex-0">OO</div>
      <ul class="menu-list flex-0 flex-layout flex-row">
        <li class="menu-item" v-for="menu in menus" :key="menu.id">
          {{menu.test}}
        </li>
      </ul>
      <div class="center flex-auto" @mousedown="onDragstart" @mouseup="onDragend">
        <!--  -->
      </div>
      <div class="right flex-0 flex-layout flex-row">
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

const menus = readonly([
  {id:"File",test:"File"},
  {id:"Edit",test:"Edit"},
  {id:"View",test:"View"},
  {id:"Window",test:"Window"},
  {id:"Help",test:"Help"},
])

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
