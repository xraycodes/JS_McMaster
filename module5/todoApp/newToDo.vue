<script setup>
import {ref, computed,reactive,watch} from 'vue';
import toDoItems from './toDoItems.vue';

const toDoList = ref([])
const selectedItems= ref([])
const textRequest = ref(false);
const empty = ref(false)
const inputValue = ref('')
const subItem = ref('')
const subItemArray = ref([])
const obj = reactive({})
const currentSelection = ref('')
const selectedSubItems = ref([])
    
// The following parts are for the toDo List section
const addToDoList = () => {
    //Add the inputValue if its not empty
    if (inputValue.value.trim() === ''){
        empty.value = true;
        return
    }
    toDoList.value.push(inputValue.value)
        inputValue.value ='';
        empty.value = false
    }        
    
    const deleteListItems = () => {
    // iterates over selectedItems and finds its index position 
    // and cuts out the element in the toDoList array
    for (let i of selectedItems.value) {
        const index = toDoList.value.indexOf(i)
        toDoList.value.splice(index, 1);
        delete obj[i];
    }
    // Create a temp obj called updateObj since index order is off due to deleting of elements in array
    // Appendd the value of the remaining element(key) into updateObj
    const updateObj = {}
    toDoList.value.forEach((item, index) => {
        updateObj[index] = obj[index];
    })
    // Clear out the remaining obj object
    for(const key in obj.value) {
        delete obj[key]
    }
    // Copy and paste updateObj into obj object
    for (const key in updateObj) {
        obj[key] = updateObj[key];
    }
    // Reset the value of selectedItems into empty array
    selectedItems.value = [];
};

// The following parts are for the toDo Items section
//Adds items to the main list 
const addItemToSubList = () => {
    if (selectedItems.value.length > 0){
        subItemArray.value.push(subItem.value)  
        const hold = subItemArray.value
        obj[selectedItems.value.toString()] = hold
        subItem.value = ''
    }
}

const deleteSubListItems = () => {
    const selectedItemKey = selectedItems.value;
    if (obj[selectedItemKey]) {
        // Get the array associated with the selected item
        const selectedArray = obj[selectedItemKey];
        // Sort the selectedSubItems to delete them in descending order
        // selectedSubItems.value.sort((a, b) => b - a);
        for (let i of selectedSubItems.value) {
            const indexSubItem = selectedSubItems.value.indexOf(i)
            selectedArray.splice(indexSubItem, 1);
        }
        }
        // Clear the selectedSubItems list after deletion
        selectedSubItems.value = [];
    }
    ;

// Extra functionality such as computed and watch
    const elementsToObject = computed(() => {
        selectedItems.value.forEach((item, index) => {
            obj[index] = []
        })
        return obj;
    })

watch(() => selectedItems.value, (newValue, oldValue) => {
  currentSelection.value = newValue;
  // Reset subItemArray when selectedItems change
  subItemArray.value = [];
});  
</script>

<template>
<h1 id="title">ToDo Lists</h1>
<div>
    <div v-for="(list,index) in toDoList">
        <!-- Sets the v-model value of the index into selectedItems reactive variable -->
        <input type="checkbox" id="list" v-model="selectedItems" :value="list"> 
        &nbsp;
        <label for="list">  {{ list }}</label>
    </div>
</div>

<input type="textbox" placeholder="toDo List" v-model="inputValue" @keyup.enter="addToDoList">
<br>
<p id="message" v-if="textRequest">Press enter to add to list</p>
<p id="warning" v-if="empty">Can't be empty</p>

<div>
    <button id="newButton" @click="textRequest = !textRequest">New</button>
    &nbsp;
    <button id="deleteButton" @click="deleteListItems">Delete</button>
    <br>
</div>
<br>
<!-- TO DO ITEMS -->
<h1 id="title">ToDo Items</h1>
<div>
    <div v-for="(item,index) in obj[selectedItems]">
    <!-- Sets the v-model value of the index into selectedItems reactive variable -->
        <input type="checkbox" id="sublist" v-model="selectedSubItems" :value="item"> 
        &nbsp;
        <label for="sublist">  {{ item }}</label>
    </div>
</div>

<input type="textbox" placeholder="toDo Items" v-model="subItem" @keyup.enter="addItemToSubList">
<br>

<toDoItems @close="deleteSubListItems" :selected-Items="selectedItems"/>
</template>

<style scoped>
#message {
    color: rgb(10, 139, 245);
}
#deleteButton {
    outline: 0;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    text-align: center;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 6px 12px;
                    font-size: 1rem;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    color: #fd290d;
                    border-color: #0d6efd;;
}
#newButton{
    cursor: pointer;
                    outline: 0;
                    display: inline-block;
                    font-weight: 400;
                    line-height: 1.5;
                    text-align: center;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 6px 12px;
                    font-size: 1rem;
                    border-radius: .25rem;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    color: #0d6efd;
                    border-color: #0d6efd;
                                    
}
#warning {
    color: red;}

</style>