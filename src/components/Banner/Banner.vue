<template>
  <div class="banner">
    <div class="banner__introduction">
      <h1>Your free test package</h1>
      <a href="#packSelection" class="button banner__introduction__button"
        >Choose your size</a
      >
    </div>
  </div>
</template>
<style lang="scss">
.banner {
  width: 100vw;
  height: 90vh;
  background-image: url("https://www.lillydoo.com/bundles/lepweb/img/header/trialbox/header-trialbox-mobile.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;

  &__introduction {
    height: 30vh;
    background: rgba(255, 255, 255, 0.7);
    text-align: center;
    padding: 0 30px;

    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;

    &__button.button {
      padding: 10px 60px;
      width: initial;
    }
  }

  @media (min-width: $desktop-viewport) {
    background-image: url("https://www.lillydoo.com/bundles/lepweb/img/header/trialbox/header-trialbox-desktop.jpg");
    height: 50vh;
    flex-direction: row;
    align-items: center;

    &__introduction {
      height: initial;
      padding: 40px;
      max-width: 400px;
      margin-right: 20px;

      h1 {
        margin-top: 0;
      }
    }
  }
}
</style>
