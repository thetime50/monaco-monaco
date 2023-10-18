<template>
  <div class="component-menu-item">
    <a-dropdown trigger="click">
      <div>
        {{props.menu.text}}
      </div>
      <template #overlay>
        <a-menu v-if="props.menu.child" class="dropdown-menu">
          <template v-for="item in props.menu.child" :key="item.id">
            <a-menu-item class="menu-item" :disabled="item.disable"  @click="(info)=>itemClick(item)">
              {{item.text}}
            </a-menu-item>
          </template>
        </a-menu>
      </template>
    </a-dropdown>
  </div>
</template>

<script setup lang="ts">
/* message */
import { 
  defineProps, defineEmits, useSlots, useAttrs,
  unref,toRaw
} from "vue";
import type {MenuItem} from "./menu"
import type {MenuInfo} from "ant-design-vue"

const props = defineProps({
  menu:Object as MenuItem
}); // eslint-disable-line

const emit = defineEmits([]); // eslint-disable-line
const slots = useSlots(); // eslint-disable-line
const attrs = useAttrs(); // eslint-disable-line

function itemClick(item:MenuItem){
  const itemVal = toRaw( item)
  if(!itemVal.disable && itemVal.action){
    console.log("do action")
    itemVal.action()
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/define.scss";
.component-menu-item {
  //
}
.dropdown-menu{
  padding:0;
  border-radius:0;
  border-width:1px;
  border-color: $-border-color
}
.menu-item{
  border-radius:0;
}
</style>