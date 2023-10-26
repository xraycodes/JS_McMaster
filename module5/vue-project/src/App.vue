<script>

import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'My first Vue App'
    }
  },
  methods: {
    HandleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add()
    }
  }
}
</script>

<template>
  <h1>{{ title }}</h1>
  <modal/>
  <input type="text" ref="name">
  <button @click="HandleClick">Click me</button>
</template>

<style>
h1 {
  color: red;
}

</style>
