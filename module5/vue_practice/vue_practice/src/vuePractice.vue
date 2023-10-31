<script>
import { ref } from 'vue';

export default {
    setup() {
        const hello = 'greeting'
        const para = ref(23)

        const handleClick = () => {
            console.log(para, para.value)
            para.value.classList.add('test')
            para.value.textContent = ('wagwan')
        }

        return{hello, para, handleClick}
    }
}

</script>

<template>
<p ref="para">{{ hello}} brian</p>
<button @click="handleClick">click me</button>

</template>

<style scoped>

</style>
