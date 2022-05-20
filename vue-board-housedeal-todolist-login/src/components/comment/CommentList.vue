<template>
  <b-row>
    <b-col v-if="comments.length">
      <!-- <comment-modify v-if="isModify"></comment-modify> -->
      <comment-list-item
        v-for="comment in comments"
        :key="comment.commentno"
        v-bind="comment"
        :articleno="articleno"
        :check="check"
      />
    </b-col>
  </b-row>
</template>

<script>
import { /*mapState,*/ mapActions } from "vuex";
import CommentListItem from "@/components/comment/item/CommentListItem";
// import CommentModify from "@/components/comment/CommentModify.vue";
import { getCommentList } from "@/api/comment";

const commentStore = "commentStore";

export default {
  name: "CommentList",
  components: {
    CommentListItem,
    // CommentModify,
  },
  data() {
    return {
      isModify: false,
      comments: [],
    };
  },
  computed: {
    // ...mapState(commentStore, ["comments"]),
  },
  props: {
    articleno: String,
    check: Number,
  },
  created() {
    getCommentList(
      this.check,
      this.articleno,
      ({ data }) => {
        // commit("SET_COMMENT_LIST", data);
        this.comments = data;
      },
      (error) => {
        console.log(error); // eslint-disable-next-line
      }
    );
    // this.comments = [];
    // console.log("cL" + this.articleno);
    // let data = {
    //   check: this.check,
    //   articleno: this.articleno,
    // };
    // this.getCommentList(data);
  },
  methods: {
    ...mapActions(commentStore, ["getCommentList"]),
  },
};
</script>

<style></style>
