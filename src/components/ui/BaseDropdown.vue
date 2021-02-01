<template>
  <v-autocomplete
    :items="items"
    :value="value"
    :item-text="item"
    :item-value="item"
    v-model="items[0]"
    @change="onChange"
    :label="label"
  ></v-autocomplete>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
  setup(props, context) {
    const onChange = value => {
      context.emit("changed", value);
    };
    return {
      onChange
    };
  }
};
</script>

<style lang="scss"></style>
