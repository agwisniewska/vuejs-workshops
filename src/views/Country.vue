<template>
  <v-app>
    <v-main>
      <the-header></the-header>
      <v-container>
        <v-row class="pt-5 pb-5">
                  <base-button text="Back" @clicked="back"> </base-button>

        </v-row>
         <v-row  class="pt-5 pb-5">
          <div class=" d-flex">
            <div class="pr-5 part">
              <img :src="''" />
            </div>
            <div class="pl-5 part">
              <h1 class="mb-5"> Country name: </h1>
              <div class=" d-flex justify-space-between">
                <div>
                  <p><b> Native name: </b> </p>
                  <p><b> Population: </b> </p>
                  <p><b> Region: </b></p>
                  <p><b> Subregion: </b> </p>
                  <p><b> Capital: </b> </p>
                </div>
                <div>
                  <p>
                    <b> Top Level Domain: </b> 
                  </p>
                  <p>
                    <b> Currencies: </b>
                    <span
                   
                    >
                     
                    </span>
                  </p>
                  <p>
                    <b> Languages: </b>
                    <span
                      
                    >
                  
                    </span>
                  </p>
                </div>
              </div>
              <div>
                <b> Border countries: </b>
                <span>
                 
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
import TheHeader from '../components/layout/TheHeader';
import BaseButton from '../components/ui/BaseButton';

export default {
  components: {
    TheHeader,
    BaseButton,
  },
  setup(props, context) {

     const back = () => {
      context.root.$router.go(-1);
      };

    return {
      back,
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
