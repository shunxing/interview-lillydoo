<template>
  <div class="pack-offers">
    <h2 class="title">Your test package contains</h2>
    <div class="pack-offers__items">
      <Offer
        v-for="offer in getOffers()"
        v-bind:key="offer.title"
        :offer="offer"
      />
    </div>
  </div>
</template>

<script>
import Offer from "./Offer";
import offersJSON from "../../data/offers.json";
import trialPacksJSON from "../../data/trial.json";

export default {
  components: { Offer },
  methods: {
    getOffers() {
      const selectedPack = trialPacksJSON.find(
        (pack) => pack.size === this.selectedPackage
      );
      return selectedPack.included.map((included) => offersJSON[included]);
    },
  },
  props: {
    selectedPackage: String,
  },
  data() {
    return {
      offers: offersJSON,
    };
  },
};
</script>

<style lang="scss" scoped>
.pack-offers {
  display: flex;
  align-items: center;
  flex-direction: column;

  &__items {
    @media (min-width: $desktop-viewport) {
      display: flex;
    }
  }
}
</style>
