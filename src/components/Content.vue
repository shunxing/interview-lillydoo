<template>
  <div class="content">
    <div>
      <img v-bind:src="getImageUrl()" />
    </div>
    <div class="content__pack-selection">
      <Button
        v-for="pack in trialPacks"
        v-bind:key="pack.size"
        :label="pack.size"
        :selected="selected"
        v-on:click="selected = pack.size"
      ></Button>
    </div>
  </div>
</template>

<script>
import trialPacksJSON from "../data/trial.json";
import Button from "./Button";

export default {
  name: "Content",
  components: { Button },
  methods: {
    getImageUrl() {
      return trialPacksJSON.find((pack) => pack.size === this.selected)
        .imageUrl;
    },
  },
  data() {
    console.log(trialPacksJSON);
    return {
      trialPacks: trialPacksJSON,
      selected: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;

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
