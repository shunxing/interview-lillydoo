<template>
  <div class="App">
    <div class="header">Header</div>
    <Content />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Content from "./Content/Content";
import { FETCH_PACKAGES } from "../store/constants";
export default {
  name: "Main",
  components: { Content },

  mounted() {
    this.$store.dispatch(FETCH_PACKAGES);
  },
};
</script>

<style lang="scss" scoped></style>
