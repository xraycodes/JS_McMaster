<script>
import {ref, reactive, computed, watch} from 'vue'

export default {
  setup() {
    const id = ref(0)
    const names = reactive({
      name: "Brian",
      age: 29
    })
    
    const count = ref(0)

    watch(count, (newValue, oldValue) => {
      if (newValue == 10) {
        alert("dingding")
      }
    })

    const isEven = computed(() => names.age / 2)

    return {
      id,
      names,
      isEven,
      count
    }
  }
}
</script>




<template>
<button @click="count++">Click to add</button>
<h1> {{ id }}</h1>
<h1>{{ isEven }}</h1>
<p>{{ names.name }}</p>
</template>




<style scoped>

</style>
