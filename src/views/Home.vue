<template>
  <v-app>
    <v-main>
      <the-header></the-header>

      <v-container>
        <v-row class="pt-5 pb-5 d-flex-container justify-space-between">
          <base-search> </base-search>
          <base-dropdown> </base-dropdown>
        </v-row>
        <v-row class="pt-5 pb-5  d-flex-container justify-space-between">
          <base-card></base-card>>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseCard from '../components/ui/BaseCard';
import BaseSearch from '../components/ui/BaseSearch.vue';
import TheHeader from '../components/layout/TheHeader.vue';
import BaseDropdown from '../components/ui/BaseDropdown.vue';

export default {
  components: { BaseCard, BaseSearch, TheHeader, BaseDropdown },
  name: 'Home',
  setup() {
    return {};
  },
};
</script>
<style></style>
