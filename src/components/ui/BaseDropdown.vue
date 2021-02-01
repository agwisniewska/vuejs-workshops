<template>
  <v-autocomplete
    :items="items"
    :value="value"
    :item-text="item"
    :item-value="item"
    v-model="items[0]"
    label="Label"
  ></v-autocomplete>
</template>
<script>
export default {
  props: {},
  setup() {
    const items = ['1', '2', '3'];
    return {
      items
    };
  },
};
</script>

<style lang="scss"></style>
