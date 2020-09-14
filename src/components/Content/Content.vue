<template>
  <div class="content">
    <PackSelection :selectedPackage="selectedPackage" />
    <div class="content__main-image"><img v-bind:src="getImageUrl()" /></div>
    <DeliveryInformations />
  </div>
  <Offers :selectedPackage="selectedPackage" />
</template>

<script>
import PackSelection from "./PackSelection";
import DeliveryInformations from "./DeliveryInformations";
import Offers from "./Offers";
import { mapState } from "vuex";
import trialPacksJSON from "../../data/trial.json";

export default {
  name: "Content",
  components: { PackSelection, DeliveryInformations, Offers },
  methods: {
    getImageUrl() {
      return trialPacksJSON.find((pack) => pack.size === this.selectedPackage)
        .imageUrl;
    },
  },
  computed: mapState({ selectedPackage: (state) => state.selectedPackage }),
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
