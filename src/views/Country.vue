<template>
  <v-app>
    <v-main>
      <the-header></the-header>
      <v-container>
        <v-row class="pt-5 pb-5">
                  <base-button text="Back" @clicked="back"> </base-button>

        </v-row>
        <v-row class="pt-5 pb-5">
          <div class=" d-flex"></div>
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
