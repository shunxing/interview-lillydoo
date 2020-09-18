<template>
  <div class="App">
    <div class="header">Header</div>
    <Banner />
    <Content />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Content from "./Content/Content";
import Banner from "./Banner/Banner";
import { FETCH_PACKAGES } from "../store/constants";
export default {
  name: "Main",
  components: { Content, Banner },

  mounted() {
    this.$store.dispatch(FETCH_PACKAGES);
  },
};
</script>
