<template>
  <div>
    <!-- <comment-input-item type="register"></comment-input-item> -->
    <comment-register :articleno="articleno"></comment-register>
    <comment-list :articleno="articleno"></comment-list>
  </div>
</template>

<script>
import CommentList from "@/components/comment/CommentList.vue";
// import CommentInputItem from "@/components/comment/item/CommentInputItem.vue";
import CommentRegister from "@/components/comment/CommentRegister.vue";

export default {
  components: {
    CommentList,
    // CommentInputItem,
    CommentRegister,
  },
  props: {
    articleno: Number,
  },
};
</script>

<style></style>
