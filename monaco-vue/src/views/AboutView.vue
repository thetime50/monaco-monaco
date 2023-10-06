<template>
  <div class="about">
    <h1 class="text-2xl font-bold">This is an about page</h1>
    <div class="block">
      <p class="p1">你好</p>
      <p class="p2">monaco-vue</p>
    </div>
  </div>
</template>

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
