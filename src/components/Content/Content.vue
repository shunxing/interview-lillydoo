<template>
  <div class="content">
    <PackSelection :selectedPackage="selectedPackage" :packages="packages" />

    <div class="content__main-image">
      <img :src="getImageUrl()" />
    </div>
    <DeliveryInformations />
  </div>
  <Offers :selectedPackage="selectedPackage" />
</template>

<script>
import PackSelection from "./PackSelection";
import DeliveryInformations from "./DeliveryInformations";
import Offers from "./Offers";
import { mapState } from "vuex";

export default {
  name: "Content",
  components: { PackSelection, DeliveryInformations, Offers },
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
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  &__main-image {
    width: 100%;
    max-height: 600px;
    max-width: 850px;

    img {
      width: 100%;
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
  }
}
</style>
