<template>
  <div class="offer">
    <div class="offer__image"><img v-bind:src="offer.imageUrl" /></div>
    <div class="offer__description">
      <div class="offer__description__title">{{ offer.title }}</div>
      <div class="offer__description__reviews"></div>
      <ul>
        <li v-for="description in offer.descriptions" v-bind:key="description">
          {{ description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
.offer {
  display: flex;
  margin: 10px 0;
  flex: 1;

  &__image {
    flex: 1;

    img {
      width: 100%;
      min-width: 100px;
    }
  }

  &__description {
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 20px;

    &__title {
      font-weight: bold;
    }
  }
}
</style>
<script>
export default {
  props: {
    offer: Object,
  },
};
</script>
