<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="d-flex flex-column justify-content-center">
          <h1>Pick your next vacation</h1>
          <ul class="list-group">
            <li class="list-group-item bg-dark text-white" v-for="(country, index) in countryData.countries" v-bind:key="country.id" v-bind:title="country.details" @click="selectCountry(index)">
              {{country.name}}
            </li>
          </ul>

          <div class="row text-center">
            <div class="col mt-4">
              <button @click="decrement()" class="btn btn-danger px-4">-</button>
              <button @click="increment()" class="btn btn-success px-4">+</button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <h2>selected countries</h2>
        <ul class="list-group">
          <li class="list-group-item">
            {{selectedCountry.id}}
          </li>
          <li class="list-group-item">
            <img :src="(selectedCountry.img)" class="img-fluid" alt="test" />
          </li>
          <li class="list-group-item">
            {{selectedCountry.name}}
          </li>
          <li class="list-group-item">
            {{selectedCountry.capital}}
          </li>
          <li class="list-group-item">
            <details>
              <summary>more info</summary>
              {{selectedCountry.details}}
            </details>
          </li>
          <li class="list-group-item">
            {{selectedCountry.cost}}
          </li>
          <li v-if="isExpensive" class="list-group-item pt-3">
            <p class="bg-danger text-white">DUUR</p>
          </li>
        </ul>
      </div>
    </div>
  </div>

</template>
<script>
import countryData from '@/data/countryData'
export default {
  name: "VacationPicker",
  data(){
    return {
      countryData,
      selectedCountryIndex: 0,
      counter:0
    };
  },
  methods: {
    increment() {
      this.selectedCountryIndex++;
    },
    decrement() {
      this.selectedCountryIndex--;
    },
    selectCountry(index) {
      console.warn("click")
      this.selectedCountryIndex = index;
    },
    getImgUrl() {
      this.selectedCountryIndex ;
    },
  },
  computed: {
    selectedCountry(){
      console.log("selectedCountry aangeroepen");
      return {
        ...this.countryData.countries[this.selectedCountryIndex],
      };
    },
    isExpensive(){
      return this.countryData.countries[this.selectedCountryIndex].cost > 1000;
    },
    // inSale(){
    //     return this.countryData.countries[this.selectedCountryIndex].cost > 800;
    // },
  },
};
</script>

<style scoped>
h3{
  margin: 40px 0 0;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: green;
}
</style>