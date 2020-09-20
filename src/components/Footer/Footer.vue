<template>
  <footer class="footer">
    <div class="footer__item footer__navigation">
      <div class="footer__title">Lillydoo</div>
      <a class="footer__navigation__item">Payment</a>
      <a class="footer__navigation__item">Careers</a>
      <a class="footer__navigation__item">Press</a>
      <a class="footer__navigation__item">Conditions</a>
      <a class="footer__navigation__item">Data Protection</a>
    </div>
    <div class="footer__separator" />
    <div class="footer__item footer__shipping">
      <div class="footer__title">Shipping partner</div>

      <img
        src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/shipping/dhl.svg"
      />
    </div>
    <div class="footer__separator" />
    <div class="footer__item footer__payment">
      <div class="footer__title">Payment methods</div>

      <img
        class="footer__payment__item"
        src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/visa.svg"
      />
      <img
        class="footer__payment__item"
        src="https://www.lillydoo.com/bundles/lepweb/img/payment-shipping/payment/mastercard.svg"
      />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  padding: 10px;
  background-color: $background-grey-color;
  &__navigation {
    &__item {
      display: block;
    }
  }
  &__payment {
    &__item {
      height: 30px;
      width: 50px;
    }
  }

  &__separator {
    height: 1px;
    background-color: grey;
  }

  &__item {
    margin: 10px 0;
  }

  &__title {
    margin: 5px 0;
    font-weight: bold;
  }
}
</style>
