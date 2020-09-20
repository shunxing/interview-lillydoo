<template>
  <div class="App">
    <Header />
    <Banner />
    <Content />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Content from "./Content/Content";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import { FETCH_PACKAGES } from "../store/constants";
export default {
  name: "Main",
  components: { Content, Banner, Header },

  mounted() {
    this.$store.dispatch(FETCH_PACKAGES);
  },
};
</script>
