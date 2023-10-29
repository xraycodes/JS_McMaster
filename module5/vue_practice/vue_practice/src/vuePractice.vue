<script setup>
import { ref, reactive } from 'vue'
import { duma } from './main'

const message = 'hello world'
const rawHTML = 'my name is bob'
const truth = true
const objectOfAttrs = {
  id: 'bob',
  class: 'wrapper'
}

const state = reactive({count: 0})

const ob = ref(0)
</script>

<template>
<button @click="duma.age++">{{duma.name}}</button>
<h2>{{ duma.age }}</h2>
<h1>{{ message }}</h1>
<h1 id="bob" v-html="rawHTML" :id="bob"></h1>
<h1 :disabled="truth">hello</h1>
<div :="objectOfAttrs">sdsd</div>
<p v-if="truth">hello v-if</p>
 <p>{{ ob }}</p>
 <p>state count{{ state.count }}</p>
 <button @click="state.count++">increment</button>
</template>

<style scoped>


#bob {
  color:red;
}
</style>
