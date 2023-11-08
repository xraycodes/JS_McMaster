<template>
  <h2>Volume tracker (0-20)</h2>
  <h3>Current volume - {{ volume }}</h3>
  <div>
      <button @click="volume += 2">Increase</button>
      <button @click="volume -= 2">Decrease</button>
  </div>

</template>

<script>
export default {
  name: 'App',
  data() {
      return {
          volume:0
      }
  },
  methods: {},
  computed: {},
  watch: {
      volume(newValue, oldValue) {
          if (newValue > oldValue && newValue === 16) {
              alert("Listening to high volume is bad for your ears")
          }
      } 
  }
}
</script>