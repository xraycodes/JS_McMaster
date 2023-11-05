<script setup>
import JSONfile from './assets/questions.json'

console.log(JSONfile)


</script>

<template>
  <h1>Quiz</h1>
  <div v-for="question in JSONfile">
      <p> {{ question.statement }}</p>
      <div v-for="(answer, key) in question.answers">
        <label :for="key">{{ key }} {{ answer }}</label>
        <input type="radio"
                :id ="key"
                :name="'question-' + question.question">
      </div>
   </div>

</template>



<style scoped>
</style>
