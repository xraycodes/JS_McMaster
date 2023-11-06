<script setup>
import JSONfile from './assets/questions.json'

import {reactive, ref} from 'vue'
import QuestionTemplate from './components/questionTemplate.vue'

const test = reactive(JSONfile)

const paragraph = ref([])
const addParagraph = () =>{
  paragraph.value.push(paragraph.value.length+1)
}

const removeParagraph = () => {
  paragraph.value.pop()
}
console.log(paragraph.value.length)
const flag = true


</script>

<template>
  <h1>Quiz</h1>
  <div v-if="flag" v-for="question in test">
      <p> {{ question.statement }}</p>
      <div v-for="(answer, key) in question.answers">
        <label :for="key">{{ key }} {{ answer }}</label>
        <input type="radio"
                :id ="key"
                :name="'question-' + question.question">
      </div>
   </div>

  <div>
    <button @click="addParagraph">Click to add template</button>
    <button @click="removeParagraph">Click to remove template</button>
    <h1>{{ paragraph }}</h1>
  
    
   
   <QuestionTemplate />


  </div>


</template>



<style scoped>
</style>
