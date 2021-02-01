<template>
  <v-card class="mt-5 mb-5" max-width="344" @click="clickCard(country.name)">
    <v-img :src="country.flag" height="200px"></v-img>

    <v-card-title> {{ country.name }} </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <p><b> Population </b> {{ country.population }}</p>
      <p><b> Region </b> {{ country.region }}</p>
      <p><b> Capital </b> {{ country.capital }}</p>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  setup(props, context) {
    const clickCard = country => {
      context.emit("clicked", country);
    };
    return {
      clickCard
    };
  }
};
</script>

<style lang="scss">
.theme--dark.v-card {
  background-color: hsl(207, 26%, 17%) !important;
}
</style>
