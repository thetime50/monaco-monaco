<template>
  <div class="about">
    <h1 class="text-2xl font-bold">This is an about page</h1>
    <div class="block">
      <p class="p1">你好</p>
      <p class="p2">monaco-vue</p>
      <a-input  v-model:value="userName" />
      <p>{{ userName }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const userName = ref<string>("")
</script>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.block{
  .p1{
    color: #ffaaaa;
    font-weight: 600;
  }
  .p2{
    color: #fff;
    background-color: #8888ff;
  }
}
</style>
