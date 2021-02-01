<template>
  <v-app>
    <v-main>
      <the-header></the-header>
      <v-container>
        <v-row class="pt-5 pb-5">
          <base-button text="Back" @clicked="back">
          </base-button>
        </v-row>
        <v-row v-if="country" class="pt-5 pb-5">
          <div class=" d-flex">
            <div class="pr-5 part">
              <img :src="country.flag" />
            </div>
            <div class="pl-5 part">
              <h1 class="mb-5">{{ country.name }}</h1>
              <div class=" d-flex justify-space-between">
                <div>
                  <p><b> Native name: </b> {{ country.nativeName }}</p>
                  <p><b> Population: </b> {{ country.population }}</p>
                  <p><b> Region: </b> {{ country.region }}</p>
                  <p><b> Subregion: </b> {{ country.subregion }}</p>
                  <p><b> Capital: </b> {{ country.capital }}</p>
                </div>
                <div>
                  <p>
                    <b> Top Level Domain: </b> {{ country.topLevelDomain[0] }}
                  </p>
                  <p>
                    <b> Currencies: </b>
                    <span
                      v-for="currency in country.currencies"
                      :key="currency.name"
                    >
                      {{ currency.name }}
                    </span>
                  </p>
                  <p>
                    <b> Languages: </b>
                    <span
                      v-for="language in country.languages"
                      :key="language.name"
                    >
                      {{ language.name }}
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <b> Border countries: </b>
                <span v-for="border in country.borders" :key="border">
                  <base-button
                    :text="border"
                    @clicked="redirect(country.border)"
                  >
                  </base-button>
                </span>
              </div>
            </div>
          </div>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { onMounted, ref } from '@vue/composition-api';
import TheHeader from '../components/layout/TheHeader';
import BaseButton from '../components/ui/BaseButton';
import { fetchCountry } from '../api/countries';

export default {
  components: {
    TheHeader,
    BaseButton,
  },
  setup(props, context) {
    const country = ref(null);

    const getCountry = async () => {
      country.value = await fetchCountry(context.root.$route.params.country);
    };

    onMounted(getCountry);

    const back = () => {
      context.root.$router.go(-1);
    };

    const redirect = (countryCode) => {
      console.log(countryCode);
    };

    return {
      back,
      country,
      redirect,
    };
  },
};
</script>

<style lang="scss" scoped>
.d-flex {
  .part {
    width: 50%;

    img {
      width: 100%;
    }
  }
}
</style>
