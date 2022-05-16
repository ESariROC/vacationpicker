<template>
  <vacation-picker />
  <li class="list-group-item" v-for="country in countryData.countries" v-bind:key="country.id">
    {{country.name}}
  </li>
  <p>Teller = {{counter}}</p>
  <button v-on:click="counter++" class="btn btn-success">+</button>
  <button v-on:click="counter--" class="btn btn-danger">-</button>
  <p>Teller 2= {{count}}</p>
  <button @click="increment()" class="btn btn-success">+</button>
  <button @click="decrement()" class="btn btn-danger">-</button>
</template>

<script>
import countryData from './data/countryData'
import VacationPicker from "@/components/VacationPicker";
export default {
  name: 'App',
  components: {
    VacationPicker
},
  data(){
    return {
      countryData,
      counter: 0,
      count: 0
    }
  },
  methods:{
    increment(){
      this.count++;
    },
    decrement(){
      this.count--;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

