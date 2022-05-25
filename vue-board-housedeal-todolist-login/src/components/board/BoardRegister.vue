<template>
  <b-container class="bv-example-row mt-3">
    <board-input-item type="register" />
  </b-container>
</template>

<script>
import BoardInputItem from "@/components/board/item/BoardInputItem.vue";

export default {
  name: "BoardRegister",
  components: {
    BoardInputItem,
  },
};
</script>

<style></style>
