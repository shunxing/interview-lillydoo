<template>
  <div class="reviews">
    <h2 style="text-align: center">What others say about our diapers</h2>
    <div
      v-for="review in reviews"
      v-bind:key="review.description"
      class="review"
    >
      <div class="review__image">
        <img :src="review.imageUrl" />
      </div>
      <div class="review__description">
        <div class="review__description__details">
          {{ review.description }}
        </div>
        <small class="review__person">
          <span class="review__person__name"> {{ review.name }} </span> -
          <span class="review__person__job">{{ review.job }} </span>
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import reviews from "../../data/reviews.json";
export default {
  data() {
    return { reviews };
  },
};
</script>

<style lang="scss">
.reviews {
  background-color: $background-grey-color;
  width: 100vw;
  margin-left: -30px;
  max-width: 100%;
  padding: 10px 30px;

  @media (min-width: $desktop-viewport) {
    margin-left: -100px;
    padding: 20px 100px;
  }
}
.review {
  display: flex;
  align-items: center;
  margin: 20px 0;

  &__image {
    margin-right: 20px;
    flex: 1;
    img {
      width: 100%;
    }
  }

  &__description {
    flex: 6;
    display: flex;
    flex-direction: column;
  }

  &__person {
    font-weight: bold;

    &__job {
      color: $primary-color;
    }
  }
}
</style>
