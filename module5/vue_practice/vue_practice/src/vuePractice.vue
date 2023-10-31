<script>
import { ref,reactive } from 'vue';

export default {
    setup() {
        const hello = ref('greeting')
        const para = ref(23)

        const update = reactive({name: 'Brian', age: 29})

        const handleClick = () => {
            // console.log(para, para.value)
            // para.value.classList.add('test')
            // para.value.textContent = ('wagwan')
            hello.value = 'sweg'
            para.value = 50
        }

        const updateInfo = () => {
            update.name = 'Jimmy'
            update.age = '20'
        }

        return{hello, para, handleClick, update,updateInfo}
    }
}

</script>

<template>
<p >{{ hello }} brian you are {{ para  }} years old</p>
<button @click="handleClick">click me</button>
<input type="text" v-model="hello">
<h1>Using reactive</h1>
<h1> name is {{ update.name }} and age is {{ update.age }} </h1>
<button @click="updateInfo">Reactive change</button>

</template>

<style scoped>

</style>
