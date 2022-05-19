<template>
  <b-row>
    <b-col v-if="comments.length">
      <comment-list-item
        v-for="comment in comments"
        :key="comment.commentno"
        v-bind="comment"
        :articleno="articleno"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CommentListItem from "@/components/comment/item/CommentListItem";

const commentStore = "commentStore";

export default {
  name: "CommentList",
  components: {
    CommentListItem,
  },
  computed: {
    ...mapState(commentStore, ["comments"]),
  },
  props: {
    articleno: String,
  },
  created() {
    // this.comments = [];
    // console.log("cL" + this.articleno);
    this.getCommentList(this.articleno);
  },
  methods: {
    ...mapActions(commentStore, ["getCommentList"]),
  },
};
</script>

<style></style>
