<template>
  <h1>Pick your next vacation</h1>
  <ul class="list-group">
    <li class="list-group-item"
      v-for="country in countryData.countries"
      v-bind:key="country.id">
      {{country.name}}
    </li>
  </ul>
</template>

<script>

import countryData from "@/data/countryData";
export default {
  data(){
    return {
      countryData,
      name: "randomName"
    }
  }
}

</script>