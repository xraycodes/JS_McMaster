<script setup>
import JSONfile from './assets/questions.json'




</script>

<template>
  <h1>Quiz</h1>
  <div v-for="question in JSONfile">
    <p> {{ question.statement }}</p>
    <div v-for="(answer, key) in question.answers">
      <label :for="key">{{ answer }}</label>
      <input type="radio"
              :id ="key"
              :value="key + answer">
    </div>
   </div>


</template>



<style scoped>
</style>
