<template>
  <div v-bind:class="buttonClass">
    <span>{{ label }}</span
    ><span>{{ secondaryLabel }}</span>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: { label: String, isSelected: Boolean, secondaryLabel: String },
  computed: {
    buttonClass: function () {
      return {
        button: true,
        ["button--active"]: this.isSelected,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  min-height: 30px;
  border: 1px $disabled-color solid;
  max-width: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px;
  color: $disabled-color;
  display: flex;
  flex-direction: column;
  align-items: center;

  &--active {
    background: #00afab;
    color: white;
    border-color: transparent;
  }
}
</style>
