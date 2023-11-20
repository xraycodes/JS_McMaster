<script setup>
defineEmits(['close'])
defineProps(['selectedItems'])
</script>

<template>
     <p>Please enter items to be done for {{ selectedItems.toString() }}</p>
<div>
    &nbsp;
    <button id="deleteButton" @click="$emit('close')">Delete</button>
</div>
</template>

<style>
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

#title {
  color:blue;
}

#warning {
    color: red;}
</style>
