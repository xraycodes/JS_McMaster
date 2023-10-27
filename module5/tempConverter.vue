<script>
export default {
    name: 'App',
    data() {
        return {
            tempInCelcius: 0,
            tempInFahrenheit: 0,
        }
    },
    methods: {
        celciusToFarenheit() {
            this.tempInFahrenheit = ((this.tempInCelcius * 9/5) + 32)
        },
        farenheitToCelcius() {
            this.tempInCelcius = ((this.tempInFahrenheit - 32) * 5/9)
        }
    }
} 

</script>

<template>
<h1>Welcome to temperature converter app</h1>
<label for="celcius">Degree in celcius is </label>
<input type="text" id="celcius" @input="celciusToFarenheit()" v-model="tempInCelcius" >

<label for="fahrenheit"> degree in fahrenheit </label>
<input type="text" id="fahrenheit" @input="farenheitToCelcius()" v-model="tempInFahrenheit">
</template>

<style scoped>

</style>