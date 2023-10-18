<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { theme } from 'ant-design-vue';
// import HelloWorld from './components/HelloWorld.vue'
import WindowComp from "@/components/WindowComp/WindowComp.vue"

</script>

<template>
  <a-config-provider
    :theme="{
      algorithm: theme.darkAlgorithm,
    }">
  <WindowComp>
    <RouterView />
  </WindowComp>
</a-config-provider>
</template>

<style scoped>

</style>
