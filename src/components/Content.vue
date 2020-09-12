<template>
  <div class="content">
    <div class="content__pack-selection">
      <Button
        v-for="pack in trialPacks"
        v-bind:key="pack.size"
        :label="pack.size"
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
  data() {
    console.log(trialPacksJSON);
    return {
      trialPacks: trialPacksJSON,
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
