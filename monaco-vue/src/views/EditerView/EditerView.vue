<template>
  <div class="editer-view">
    <MonacoEditor
      :code="code"
      :editorOptions="options"
      @mounted="onEditerMounted"
      @codeChange="onCodeChange">
    </MonacoEditor>
  </div>
</template>

<script setup lang="ts">
import { ref,readonly,reactive } from 'vue';

import * as monaco from "monaco-editor"
// import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'; // 语法高亮?
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"

// 语法提示

import MonacoEditor,{ loader }  from '@guolao/vue-monaco-editor'

self.MonacoEnvironment = {
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

const code = ref<string>("")
const options = readonly({
  language:"typescript",
  selectOnLineNumbers: false,
  theme:"vs-dark"
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
