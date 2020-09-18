<template>
  <div class="pack-selection" id="packSelection">
    <div class="pack-selection__form">
      <h2>Discover our skin friendliness</h2>
      <h5>CHOOSE YOUR SIZE</h5>
      <div class="pack-selection__form__buttons">
        <Button
          v-for="pack in packages"
          v-bind:key="pack.size"
          :label="pack.size"
          :secondaryLabel="`(${pack.weight} kg)`"
          :isSelected="selectedPackage === pack.size"
          @click="selectPackage(pack.size)"
        ></Button>
      </div>
      <DeliveryInformations :viewport="'desktop'" />
    </div>
  </div>
</template>

<script>
import Button from "../shared/Button";
import DeliveryInformations from "./DeliveryInformations";
import { mapActions } from "vuex";
import { SELECT_PACKAGE } from "../../store/constants";

export default {
  components: { Button, DeliveryInformations },
  props: { selectedPackage: String, packages: Array },
  methods: {
    ...mapActions({
      selectPackage: SELECT_PACKAGE,
    }),
  },
};
</script>

<style lang="scss" scoped>
.pack-selection {
  @media (min-width: $desktop-viewport) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    flex: 1;
  }
  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    &__buttons {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      width: 100%;
      @media (min-width: $desktop-viewport) {
        display: flex;
      }

      .button {
        @media (min-width: $desktop-viewport) {
          min-width: initial;
          flex: 1;
          text-align: center;
        }
        max-width: 100%;
        min-width: 90px;
        margin: 5px;
      }
    }
  }
}

.delivery-informations {
  display: none;
  @media (min-width: $desktop-viewport) {
    display: block;
  }
}
</style>
