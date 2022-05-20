<template>
  <div>
    <!-- <comment-input-item type="register"></comment-input-item> -->
    <comment-register
      :articleno="articleno"
      :check="checkNum"
    ></comment-register>
    <comment-list :articleno="articleno" :check="checkNum"></comment-list>
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
    check: String,
  },
  data() {
    return {
      checkNum: 0,
    };
  },
  created() {
    // console.log("CV" + this.check);
    if (this.check === "board") {
      this.checkNum = 1;
    } else if (this.check === "notice") {
      this.checkNum = 2;
    }
  },
};
</script>

<style></style>
