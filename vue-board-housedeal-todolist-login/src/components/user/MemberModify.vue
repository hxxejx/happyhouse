<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>회원 정보 수정</h3></b-alert>
      </b-col>
    </b-row>
    <member-input-item type="modify" />
  </b-container>
</template>

<script>
import MemberInputItem from "@/components/user/item/MemberInputItem.vue";

export default {
  name: "MemberModify",
  components: {
    MemberInputItem,
  },
};
</script>

<style></style>
