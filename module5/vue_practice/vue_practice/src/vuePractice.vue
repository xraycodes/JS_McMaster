<script>
import { ref,reactive, computed } from 'vue';

export default {
    setup() {
        const hello = ref('greeting')
        const para = ref(23)

        const search = ref('')

        const names = ref(['bob', 'billy', 'joel','david','peter','kim','lucy'])

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

        const matchingNames = computed(() => {
            return names.value.filter((name) => name.includes(search.value))
        })

        return{hello, para, handleClick, update,updateInfo, matchingNames, names, search}
    }
}

</script>

<template>
<p v-for="name in matchingNames">{{ name }}</p>
<input type="text" v-model="search">
<p >{{ hello }} brian you are {{ para  }} years old</p>
<button @click="handleClick">click me</button>
<input type="text" v-model="hello">
<h1>Using reactive</h1>
<h1> name is {{ update.name }} and age is {{ update.age }} </h1>
<button @click="updateInfo">Reactive change</button>

</template>

<style scoped>

</style>
