<template>
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
</template>

<script>
export default {
  name: "CountryDetail",
  props: {
    country: []
  }
}
</script>

<style scoped>

</style>