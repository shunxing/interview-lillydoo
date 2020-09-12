<template>
  <div class="App">
    <div class="header">Header</div>
    <Content />
    <div class="footer">footer</div>
  </div>
</template>

<script>
import Content from "./Content.vue";
export default {
  name: "Main",
  components: { Content },
};
</script>

<style lang="scss" scoped></style>
