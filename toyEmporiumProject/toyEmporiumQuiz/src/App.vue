<script setup>
import JSONfile from './assets/questions.json'

import {reactive, ref} from 'vue'
import QuestionTemplate from './components/questionTemplate.vue'

const test = reactive(JSONfile)

const questionsLength = ref(JSONfile.length)
const addTemplate = () => {
  questionsLength.value++
}
const removeTemplate = () => {
  questionsLength.value--
}


// const paragraph = ref([])
// const addParagraph = () =>{
//   paragraph.value.push(paragraph.value.length+1)
// }

// const removeParagraph = () => {
//   paragraph.value.pop()
// }

const flag = true
const template = QuestionTemplate

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

   <br>
   <div>
    <button>Click to edit</button>
   </div>
<!-- 
<QuestionTemplate v-for="i in questionsLength"/>

  <div>
    <button @click="addTemplate">Click to add template</button>
    <button @click="removeTemplate">Click to remove template</button>
    <h1>{{ questionsLength }}</h1>
  </div> -->


</template>



<style scoped>
</style>
