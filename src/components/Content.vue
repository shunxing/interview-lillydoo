<template>
  <div class="content">
    <div class="content__pack-selection">
      <div class="content__pack-selection__form">
        <div>Discover our skin friendliness</div>
        <div>CHOOSE YOUR SIZE</div>
        <div class="content__pack-selection__form__buttons">
          <Button
            v-for="pack in trialPacks"
            v-bind:key="pack.size"
            :label="pack.size"
            :secondaryLabel="`(${pack.weight} kg)`"
            :isSelected="selectedPackage === pack.size"
            @click="selectPackage(pack.size)"
          ></Button>
        </div>
        <div class="content__pack-selection__description">
          <div>
            Try our skin-friendly diapers now and get our wet wipes with 99%
            water for sizes 1 - 3 or the sensitive wet wipes for sizes 4 - 5.
          </div>
          <ul>
            <li>We pay for the products, you only pay for the shipping.</li>
            <li>
              Automatic transition to the diaper subscription, which can be
              canceled at any time, for € 49.50 per delivery.
            </li>
            <li>
              Prices include VAT, plus shipping costs if applicable , no customs
              duties.
            </li>
          </ul>
        </div>
      </div>
      <div class="content__main-image"><img v-bind:src="getImageUrl()" /></div>

      <div
        class="content__pack-selection__description content__pack-selection__description--mobile"
      >
        <div>
          Try our skin-friendly diapers now and get our wet wipes with 99% water
          for sizes 1 - 3 or the sensitive wet wipes for sizes 4 - 5.
        </div>
        <ul>
          <li>We pay for the products, you only pay for the shipping.</li>
          <li>
            Automatic transition to the diaper subscription, which can be
            canceled at any time, for € 49.50 per delivery.
          </li>
          <li>
            Prices include VAT, plus shipping costs if applicable , no customs
            duties.
          </li>
        </ul>
      </div>
    </div>
    <div class="content__pack-offers">
      <h2 class="title">Your test package contains</h2>
      <div class="content__pack-offers__items">
        <Offer
          v-for="offer in getOffers()"
          v-bind:key="offer.title"
          :offer="offer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import trialPacksJSON from "../data/trial.json";
import offersJSON from "../data/offers.json";
import Button from "./Button";
import Offer from "./Offer";
import { mapActions } from "vuex";
import { mapState } from "vuex";

import { SELECT_PACKAGE } from "../store/constants";

export default {
  name: "Content",
  components: { Button, Offer },
  methods: {
    getImageUrl() {
      return trialPacksJSON.find((pack) => pack.size === this.selectedPackage)
        .imageUrl;
    },
    getOffers() {
      const selectedPack = trialPacksJSON.find(
        (pack) => pack.size === this.selectedPackage
      );
      return selectedPack.included.map((included) => offersJSON[included]);
    },
    ...mapActions({
      selectPackage: SELECT_PACKAGE,
    }),
  },
  computed: mapState({ selectedPackage: (state) => state.selectedPackage }),
  data() {
    return {
      offers: offersJSON,
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
  &__pack-offers {
    display: flex;
    align-items: center;
    flex-direction: column;

    &__items {
      @media (min-width: $desktop-viewport) {
        display: flex;
      }
    }
  }

  &__main-image {
    width: 100%;
    max-height: 600px;
    max-width: 850px;

    img {
      width: 100%;
    }
  }

  &__pack-selection {
    @media (min-width: $desktop-viewport) {
      display: flex;
      flex-direction: row-reverse;
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
            max-width: 200px;
            min-width: 90px;
          }
          max-width: 100%;
          min-width: 90px;
          margin: 5px;
        }
      }
    }

    &__description {
      /**
        TODO : use conditional rendering v-if (other solution)
      */
      display: none;
      flex-direction: column;
      justify-content: flex-start;

      @media (min-width: $desktop-viewport) {
        display: flex;
      }

      &--mobile {
        display: flex;
        @media (min-width: $desktop-viewport) {
          display: none;
        }
      }
    }
  }
}
</style>
