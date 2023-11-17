<script>
import {ref} from 'vue';

export default{
    setup() {
        const toDoList = ref([])
        const selectedItems= ref([])
        const textRequest = ref(false);
        const empty = ref(false)
        const inputValue = ref('')
       

        const addToDoList = () => {
            if (inputValue.value.trim() === ''){
                empty.value = true;
                return
            }
            toDoList.value.push(inputValue.value)
                inputValue.value ='';
                empty.value = false
            }        
        
        const deleteListItems = () => {
            // Returns selectedItems.value(index) in descending order 
            selectedItems.value.sort(function(a,b){return b-a})  
            // Iterates over the selectedItems index, and removes the element in the toDoList array 
            // using the index of the selectedItems
            for(let i of selectedItems.value){
                toDoList.value.splice(i,1)
            }
            // Resets the variable as empty array since the requested element is deleted
            selectedItems.value = [];
        }
    

        return {
            addToDoList,
            deleteListItems,
            textRequest,
            toDoList,
            inputValue,
            selectedItems,
            empty
        }
    }

}
</script>

<template>
    <div>
        <div v-for="(list,index) in toDoList">
            <!-- Sets the v-model value of the index into selectedItems reactive variable -->
            <input type="checkbox" id="list" v-model="selectedItems" :value="index"> 
            &nbsp;
            <label for="list">  {{ list }}</label>
        </div>
    </div>

    <input v-if="textRequest" type="textbox" placeholder="toDo List" v-model="inputValue" @keyup.enter="addToDoList">
    <p id="message" v-if="textRequest">Press enter to add to list</p>
    <p id="warning" v-if="empty">Can't be empty</p>

    <div>
    <button id="newButton" @click="textRequest = !textRequest">New</button>
    &nbsp;
    <button id="deleteButton" @click="deleteListItems">Delete</button>
    <br>
    </div>
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
    color: red;
}
</style>
