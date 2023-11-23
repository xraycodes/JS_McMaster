<script setup>
import toDoItems from './toDoItems.vue'
import {ref, watch} from 'vue'


const counter = ref(0)
watch(counter,(newValue, oldValue) => {
        if (newValue == 5){
            console.log("Reached maximum of 5")
            console.log(oldValue)
        }
    }
)

const InputValue = ref('')

const ToDoListArray = ref([])

const toDoListSelection = ref([])

const addInputToList = () => {
    if(InputValue.value){
        ToDoListArray.value.push(InputValue.value)
        counter.value++
        InputValue.value = ''
    }
}

const deleteToDoList = () => {
    for (let selection of toDoListSelection.value){
        console.log(selection)
        const index = ToDoListArray.value.indexOf(selection)
        ToDoListArray.value.splice(index,1)
    }
    toDoListSelection.value = []

}

</script>

<template>
    <div>
        <div class="container">
            <h1>ToDo Lists: </h1>
            <button id="newButton" @click="addInputToList">New</button>
            <button id="deleteButton" @click="deleteToDoList">Delete</button>
        </div>

        <div v-for="(item,index) in ToDoListArray">
            <input type="checkbox" :value="`${item + index}`" :id="index" v-model="toDoListSelection">
            <label :for="index">{{ item }}</label>

        </div>

        <div>
            <input id="input1" type="textbox" v-model="InputValue" required>
            <label for="input1"> Click New to add to ToDo List</label>
        </div>
    </div>

    <toDoItems :toDoListSelection="toDoListSelection"/>

    <!-- <h1>{{ counter }}</h1> -->
    <!-- <h1>{{ InputValue }}</h1>
    <h1>{{ ToDoListArray }}</h1> -->
    <!-- <h1>{{ toDoListSelection }}</h1> -->

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