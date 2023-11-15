<script>
import {ref, reactive} from 'vue'

export default {
  setup() {
    const name = ref(0)

    return {
      name
    }
  }
}
</script>




<template>
<button @click="name++">Click to add</button>
<h1> {{ name }}</h1>
</template>

<style scoped>

</style>
