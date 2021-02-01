<template>
  <v-card class="mt-5 mb-5" max-width="350" >
    <v-img src="#" height="200px"></v-img>

    <v-card-title> Title </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
     Text
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    
  },
  setup() {
   return {
     
   }
  }
};
</script>

<style lang="scss">
.theme--dark.v-card {
  background-color: hsl(207, 26%, 17%) !important;
}
</style>
