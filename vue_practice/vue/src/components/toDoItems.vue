<script setup>
import {ref,reactive,} from 'vue'


const x = defineProps(['toDoListSelection'])

// const x = ref(props.toDoListSelection)



const InputValue = ref('')
const ToDoItemArray = reactive({})

const addInputToItems = () => {
    for (let value of Object.values(x)){
        ToDoItemArray[value] = InputValue.value
    }
}

</script>

<template>
    <div>
        <div class="container">
            <h1>ToDo Items: </h1>
            <button id="newButton" @click="addInputToItems">New</button>
            <button id="deleteButton">Delete</button>
        </div>

        <!-- <div v-for="(item,index) in ToDoItemArray">
            <input type="checkbox" :value="item" :id="index" v-model="toDoListSelection">
            <label :for="index">{{ item }}</label>
        </div> -->



        <div>
            <input id="input1" type="textbox" v-model="InputValue" required>
            <label for="input1"> Click New to add to ToDo Item</label>
        </div>

        <!-- <h1 v-for="i in toDoListSelection">{{ i }}</h1> -->
        <!-- <h1>{{ ToDoItemArray }}</h1> -->
     
    </div>


</template>

<style scoped>
.container {
    display:flex
}

#newButton {
  background-color: #4c76ea;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 20px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
}   

#deleteButton {
  background-color: #EA4C89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #FFFFFF;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 20px;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none
}
</style>