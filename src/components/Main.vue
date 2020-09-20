<template>
  <div class="App">
    <Header />
    <Banner />
    <Content />
    <Footer />
  </div>
</template>

<script>
import Content from "./Content/Content";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { FETCH_PACKAGES } from "../store/constants";
export default {
  name: "Main",
  components: { Content, Banner, Header, Footer },

  mounted() {
    this.$store.dispatch(FETCH_PACKAGES);
  },
};
</script>
