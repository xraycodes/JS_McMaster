<script setup>
  import {ref} from 'vue'

  let tempInCelcius = ref(0);
  let tempInFahrenheit = ref(32);
  
  // Both methods rounds to nearest whole number
  let celciusToFarenheit = function() {
    tempInFahrenheit.value = ((tempInCelcius.value * 9/5) + 32).toFixed()
  }

  let farenheitToCelcius = function() {
    tempInCelcius.value = ((tempInFahrenheit.value - 32) * 5/9).toFixed()
  }
</script>

<template>
  <h1>Welcome to temperature converter app</h1>
  <br>

  <!-- Converts C to F using function upon input event listener -->
  <label for="celcius">Degree in celcius is </label>
  <input type="text" id="celcius" @input="celciusToFarenheit" placeholder="Place a valid number" v-model="tempInCelcius" >

  <!-- Converts F to C using function upon input event listener -->
  <label for="fahrenheit"> degree in fahrenheit </label>
  <input type="text" id="fahrenheit" @input="farenheitToCelcius" placeholder="Place a valid number" v-model="tempInFahrenheit">

  <!-- Creates a p tag if any of the inputs are not numbers -->
  <p v-if="isNaN(tempInCelcius) || isNaN(tempInFahrenheit)" :style="{color:'red', fontWeight:'bold'}">Enter valid number</p>
</template>


