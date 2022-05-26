<template>
  <b-row>
    <b-col v-if="comments.length">
      <comment-list-item
        v-for="comment in comments"
        :key="comment.commentno"
        v-bind="comment"
        :pdata="pdata"
        v-on:refresh-list="refreshList"
      />
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
import CommentListItem from "@/components/comment/item/CommentListItem";
import { getCommentList } from "@/api/comment";

const commentStore = "commentStore";

export default {
  name: "CommentList",
  components: {
    CommentListItem,
  },
  data() {
    return {
      isModify: false,
      comments: [],
    };
  },
  computed: {},
  props: {
    pdata: {
      articleno: Number,
      check: Number,
    },
  },
  created() {
    getCommentList(
      this.pdata.check,
      this.pdata.articleno,
      ({ data }) => {
        this.comments = data;
      },
      (error) => {
        console.log(error);
      },
    );
  },
  methods: {
    ...mapActions(commentStore, ["getCommentList"]),
    refreshList() {
      let data = {
        check: this.pdata.check,
        articleno: this.pdata.articleno,
      };
      this.getCommentList(data);
    },
  },
};
</script>

<style></style>
