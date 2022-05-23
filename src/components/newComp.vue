<template>
  <h1>Pick your next vacation</h1>
  <ul class="list-group">
    <li class="list-group-item"
      v-for="countries in countryData.countries"
      v-bind:key="countries.id">
      {{countries.name}}
    </li>
  </ul>
  <p>{{this.name}}<br>{{this.color}}<br>{{this.concept}}<br></p>
  <h2>{{todo}}</h2>
</template>

<script>

import countryData from "@/data/countryData";
export default {
  data(){
    return {
      countryData,
      name: "randomName",
      color: "Baby blue",
      concept: "Modern",
      todo: 'Clean kitchen'
    }
  }
}

</script>