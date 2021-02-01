<template>
  <v-app>
    <v-main>
      <the-header></the-header>

      <v-container>
        <v-row class="pt-5 pb-5 d-flex-container justify-space-between">
         <base-search
            :icon="'mdi-magnify'"
            :text="searchQuery"
            @searched="search"
            :placeholderText="'Search for a country'"
          ></base-search>
          <base-dropdown> </base-dropdown>
        </v-row>
        <v-row class="pt-5 pb-5  d-flex-container justify-space-between">
            <v-col
            v-for="country in countriesMatchingSearchQuery"
            :key="country.name"
            cols="4"
          >
            <base-card
              :country="country"
              @clicked="redirectToCountry"
            ></base-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { fetchCountries } from "../api/countries";
import { ref, onMounted } from "@vue/composition-api";
import BaseCard from '../components/ui/BaseCard';
import BaseSearch from '../components/ui/BaseSearch.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import BaseDropdown from '../components/ui/BaseDropdown.vue';
import useCountryNameSearch from "../hooks/useCountryNameSearch";
import router from "../router";

export default {
  components: { BaseCard, BaseSearch, TheHeader, BaseDropdown },
  name: 'Home',
  setup() {

    const regions = ref(["Europe", "Africa", "Americas", "Asia", "Oceania"]);


    const countries = ref([]);
    const getCountries = async filter => {
      countries.value = await fetchCountries(filter);
    };

    onMounted(() => getCountries(regions.value[0]));
    const {
      searchQuery,
      search,
       countriesMatchingSearchQuery
    } = useCountryNameSearch(countries);

  const redirectToCountry = country => {
      router.push(country);
    };
    return {
      searchQuery,
      search,
     countriesMatchingSearchQuery,
     redirectToCountry
     
    };
  },
};
</script>
<style></style>
