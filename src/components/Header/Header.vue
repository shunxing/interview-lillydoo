<template>
  <header class="header header--mobile">
    <i class="icon icon--hamburger" />
    <i class="header__logo icon icon--lillydoo" />
    <i class="icon icon--shopping-bag" />
  </header>
  <header class="header header--desktop">
    <i class="header__logo icon icon--lillydoo" />
    <div class="header__navigation">
      <span class="header__navigation__item header__navigation__item--active"
        >Free trial package</span
      ><span class="header__navigation__item">Flexible subscription</span
      ><span class="header__navigation__item">Products</span
      ><span class="header__navigation__item">Magazine</span
      ><span class="header__navigation__item">About Lillydoo</span>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  padding: 0 5%;
  text-transform: uppercase;

  &__navigation {
    &__item {
      margin: 10px;

      &--active {
        color: $primary-color;
      }
    }
  }

  &--desktop {
    display: none;

    @media (min-width: $desktop-viewport) {
      display: flex;
      padding: 0 20px;
    }
  }
  @media (min-width: $desktop-viewport) {
    &--mobile {
      display: none;
    }
  }
}

.icon {
  background-repeat: no-repeat;

  &--lillydoo {
    background-image: url("../../assets/sprites.png");
    background-size: 243px 165px;
    width: 240px;
    height: 55px;
    transform: scale(0.7);
  }

  &--shopping-bag {
    background-image: url("../../assets/icon-shopping-bag.svg");
    width: 30px;
    height: 30px;
  }

  &--hamburger {
    background-image: url("../../assets/icon-hamburger.svg");
    width: 32px;
    height: 31px;
    background-size: contain;
  }
}
</style>
