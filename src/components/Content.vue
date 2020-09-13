<template>
  <div class="content">
    <div class="content__pack-selection">
      <Button
        v-for="pack in trialPacks"
        v-bind:key="pack.size"
        :label="pack.size"
        :secondaryLabel="`(${pack.weight} kg)`"
        :isSelected="selected === pack.size"
        v-on:click="selected = pack.size"
      ></Button>
    </div>
    <img v-bind:src="getImageUrl()" class="content__main-image" />
    <div class="content__pack-offers">
      <h2 class="title">Your test package contains</h2>
      <Offer
        v-for="offer in getOffers()"
        v-bind:key="offer.title"
        :offer="offer"
      />
    </div>
  </div>
</template>

<script>
import trialPacksJSON from "../data/trial.json";
import offersJSON from "../data/offers.json";
import Button from "./Button";
import Offer from "./Offer";

export default {
  name: "Content",
  components: { Button, Offer },
  methods: {
    getImageUrl() {
      return trialPacksJSON.find((pack) => pack.size === this.selected)
        .imageUrl;
    },
    getOffers() {
      const selectedPack = trialPacksJSON.find(
        (pack) => pack.size === this.selected
      );
      return selectedPack.included.map((included) => offersJSON[included]);
    },
  },
  data() {
    console.log(trialPacksJSON);
    return {
      offers: offersJSON,
      trialPacks: trialPacksJSON,
      selected: "1",
    };
  },
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
  }

  &__pack-selection {
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    .button {
      @media (min-width: $desktop-viewport) {
        max-width: 200px;
        min-width: 90px;
      }

      max-width: 90px;
      min-width: 50px;
      flex: 0 0 100%;
      margin: 5px;
    }
  }
}
</style>
