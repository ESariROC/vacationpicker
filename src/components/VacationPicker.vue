<template>
<h2>vacationpicker</h2>
  <li class="list-group-item" v-for="country in countryData.countries" v-bind:key="country.id">
    {{country.name}}
  </li>
  <p>Teller = {{counter}}</p>
  <button v-on:click="counter++" class="btn btn-success">+</button>
  <button v-on:click="counter--" class="btn btn-danger">-</button>
  <p>Teller 2= {{count}}</p>
  <button @click="increment()" class="btn btn-success">+</button>
  <button @click="decrement()" class="btn btn-danger">-</button>
  <HelloWorld msg="dit is een message van HelloWorld"/>
  <NewComp />
</template>

<script>
import countryData from '@/data/countryData';
import NewComp from "@/components/newComp";
export default {
  name: "VacationPicker",
  components:{
    NewComp
  },
  data(){
    return {
      countryData,
      counter: 0,
      count: 0,

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

<style scoped>

</style>