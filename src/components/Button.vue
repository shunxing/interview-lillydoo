<template>
  <div class="button">{{ label }}</div>
</template>

<script>
export default {
  name: "Button",
  props: { label: String },
};
</script>

<style lang="scss" scoped>
.button {
  height: 30px;
  border: 1px black solid;
  max-width: 30px;
  min-width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
</style>
