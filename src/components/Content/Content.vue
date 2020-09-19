<template>
  <div class="container">
    <div class="content">
      <PackSelection :selectedPackage="selectedPackage" :packages="packages" />

      <div class="content__main-image">
        <img :src="getImageUrl()" />
      </div>
      <DeliveryInformations />
    </div>
    <div content="secondary-content">
      <div class="content__process">
        <h2>How it works</h2>
        <img class="content__process--desktop" :src="processDesktop" />
        <img class="content__process--mobile" :src="processMobile" />
      </div>
      <Offers :selectedPackage="selectedPackage" />
      <Reviews />
    </div>
  </div>
</template>

<script>
import PackSelection from "./PackSelection";
import DeliveryInformations from "./DeliveryInformations";
import Reviews from "./Reviews";
import Offers from "./Offers";
import { mapState } from "vuex";

export default {
  name: "Content",
  components: { PackSelection, DeliveryInformations, Offers, Reviews },
  methods: {
    getImageUrl() {
      const selectedPackage = this.packages.find(
        (pack) => pack.size === this.selectedPackage
      );
      return selectedPackage && selectedPackage.imageUrl;
    },
  },
  computed: mapState({
    selectedPackage: (state) => state.selectedPackage,
    packages: (state) => state.packages,
  }),
  data() {
    return {
      processDesktop: require("@/assets/process-desktop.svg"),
      processMobile: require("@/assets/process-mobile.svg"),
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__process {
    text-align: center;
    width: 100vw;
    background-color: $background-grey-color;
    margin-left: -30px;
    max-width: 100%;
    padding: 10px 30px;

    @media (min-width: $desktop-viewport) {
      margin-left: -100px;
      max-width: initial;
      padding: 0;
    }

    &--desktop {
      padding: 30px 0;
      display: none;
      @media (min-width: $desktop-viewport) {
        display: block;
      }
    }

    &--mobile {
      @media (min-width: $desktop-viewport) {
        display: none;
      }
    }

    h2 {
    }
  }
  &__main-image {
    width: 100%;
    max-height: 600px;
    max-width: 850px;

    img {
      width: 100%;

      @media (min-width: $desktop-viewport) {
        min-width: 300px;
        max-width: 500px;
      }
    }

    @media (min-width: $desktop-viewport) {
      flex: 1;
      display: flex;
      justify-content: center;
      max-width: initial;
    }
  }

  .delivery-informations {
    display: block;
    @media (min-width: $desktop-viewport) {
      display: none;
    }
  }

  @media (min-width: $desktop-viewport) {
    flex-direction: row-reverse;
    align-items: flex-start;
  }
}
</style>
