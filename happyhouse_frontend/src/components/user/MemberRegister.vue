<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert variant="secondary" show><h3>회원가입</h3></b-alert>
      </b-col>
    </b-row>
    <member-input-item type="join" />
  </b-container>
</template>

<script>
import MemberInputItem from "@/components/user/item/MemberInputItem.vue";

export default {
  name: "JoinMember",
  components: {
    MemberInputItem,
  },
};
</script>

<style></style>
