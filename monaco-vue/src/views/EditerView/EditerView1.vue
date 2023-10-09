<template>
  <div class="editer-view">
    <monacoEditor
      v-model="value"
      :language="language"
      :hight-change="hightChange"
      :read-only="false"
      theme="vs-dark"
      width="100%"
      height="100%"
      @editor-mounted="editorMounted"
    />
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import monacoEditor from './monacoEditor.vue'
const value = ref('import aaa from "1234"\nvar a =3;\nconsole.log("eee")')
const language = ref('typescript')
const hightChange = ref<any>(false)
const editorMounted = (editor: any) => {
  console.log('editor实例加载完成', editor)
}

</script>

<style scoped lang="scss">

.editer-view {
  width: 100%;
  height: 100%;
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
