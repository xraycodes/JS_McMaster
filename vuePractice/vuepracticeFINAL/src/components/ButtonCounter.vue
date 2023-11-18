<script setup>
import {ref, reactive} from 'vue'

const button = reactive({
    count : 0,
})
const props = defineProps({
    name: String
})

</script>




<template>
<h1>Hi {{ name }} hows it going</h1>
<p>Learning about components and props</p><br>

<p> {{ button.count }}</p>
<button @click="button.count++">Click to increment by 1</button>
</template>