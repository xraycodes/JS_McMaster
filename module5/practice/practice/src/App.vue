<script setup>
// Import you custom component(s) here
import newToDo from './components/newToDo.vue';

</script>

<template>
  <header id="container">
    <h1>Welcome to our ToDo web app</h1>
    <img src="./assets/todo.png" alt="">
      <newToDo />
  </header>
</template>

<style scoped>
#container {
  /* background-color: rgb(81, 169, 241); */
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}

#title {
  color:blue;
  font-size: 20px;
}




</style>
