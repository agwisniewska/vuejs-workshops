<template>
  <v-text-field
    :prepend-inner-icon="icon"
    :value="text"
    @input="onInput"
    :placeholder="placeholderText"
  >
  </v-text-field>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    placeholderText: {
      type: String,
      required: false
    }
  },
  setup(props, context) {
    const onInput = value => {
      context.emit("searched", value);
    };
    return {
      onInput
    };
  }
};
</script>

<style lang="scss"></style>
