<template>
  <div>
    <comment-register :pdata="pdata"></comment-register>
    <comment-list :pdata="pdata"></comment-list>
  </div>
</template>

<script>
import CommentList from "@/components/comment/CommentList.vue";
import CommentRegister from "@/components/comment/CommentRegister.vue";

export default {
  components: {
    CommentList,
    CommentRegister,
  },
  props: {
    pdata: {
      articleno: Number,
      check: Number,
    },
  },
  data() {
    return {
      checkNum: 0,
    };
  },
  created() {
    if (this.check === "board") {
      this.checkNum = 1;
    } else if (this.check === "notice") {
      this.checkNum = 2;
    }
  },
};
</script>

<style></style>
