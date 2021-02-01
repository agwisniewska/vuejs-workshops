<template>
  <v-btn class="ma-2" @click="clickButton" outlined color="dark">
    {{ text }}
  </v-btn>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
  },
  setup(props, context) {
    const clickButton = () => {
      context.emit("clicked");
    };
    return {
      clickButton
    };
  }
};
</script>

<style lang="scss"></style>
