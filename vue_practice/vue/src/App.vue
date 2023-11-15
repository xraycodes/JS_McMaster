<script>
import {ref, reactive, computed} from 'vue'

export default {
  setup() {
    const id = ref(0)
    const names = reactive({
      name: "Brian",
      age: 29
    })

    const isEven = computed(() => names.age / 2)

    return {
      id,
      names,
      isEven
    }
  }
}
</script>




<template>
<button @click="id++">Click to add</button>
<h1> {{ id }}</h1>
<h1>{{ isEven }}</h1>
<p>{{ names.name }}</p>
</template>




<style scoped>

</style>
