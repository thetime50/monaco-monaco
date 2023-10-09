<template>
  <div class="editer-view">
    <MonacoEditor
      v-model:value="code"
      :key="kk"
      language="typescript"
      theme="vs-dark"
      :editorOptions="options"
      @mounted="onEditerMounted"
      @codeChange="onCodeChange">
    </MonacoEditor>
  </div>
</template>

<script setup lang="ts">
import { ref,readonly,reactive,nextTick,onMounted } from 'vue';

import * as monaco from "monaco-editor"
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'; // 语法高亮?
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

// 语法提示

import MonacoEditor,{ loader }  from '@guolao/vue-monaco-editor'

window.MonacoEnvironment = {
  // getWorkerUrl: function (moduleId, label) {
  //   if (label === 'javascript') {
  //     return './monaco.ts.worker.js';
  //   }

  //   return './monaco.editor.worker.js';
  // },
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

loader.config({ monaco })

const kk = ref<number>(1)
onMounted(async ()=>{
  await nextTick()
  kk.value+=1
})

const code = ref<string>('import aaa from "1234"\nvar a =3;\nconsole.log("eee")')
const options = readonly({
  selectOnLineNumbers: false,
 })
const editor = ref<any>()


function onEditerMounted(editor){
  editor.value = editor
}
function onCodeChange(editor){
   console.log(this.editor.getValue());
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
