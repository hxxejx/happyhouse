<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col style="text-align: left">
        <b-form @submit="onSubmit">
          <b-form-group id="userid-group" label="작성자:" label-for="userid">
            <b-form-input
              id="userid"
              :disabled="isUserid"
              v-model="comment.userid"
              type="text"
              required
              readonly
            ></b-form-input>
          </b-form-group>
          <b-form-group id="content-group" label="내용:" label-for="comment">
            <b-form-textarea
              id="comment"
              v-model="comment.comment"
              placeholder="내용 입력..."
              rows="5"
              max-rows="15"
            ></b-form-textarea>
          </b-form-group>
          <b-button type="submit" variant="primary" class="m-1">수정</b-button>
        </b-form>
      </b-col>
      <!-- <comment-list></comment-list> -->
    </b-row>
  </b-container>
</template>

<script>
// import CommentInputItem from "@/components/comment/item/CommentInputItem.vue";
import { mapActions, mapState } from "vuex";

const commentStore = "commentStore";

export default {
  name: "CommentModify",
  data() {
    return {
      // nowcomment: {
      //   userid: "",
      //   comment: "",
      // },
      isUserid: false,
    };
  },
  computed: {
    ...mapState(commentStore, [/*"article",*/ "comment"]),
  },
  props: {
    // type: { type: String },
  },
  created() {
    // console.log(this.$route.params.commentno);
    // console.log(this.comment);
    // console.log(this.$route.params.articleno);
    this.getComment(this.$route.params.commentno);
  },
  methods: {
    ...mapActions(commentStore, [
      // "writeComment",
      // "getCommentList",
      "getComment",
      "modifyComment",
    ]),
    onSubmit(event) {
      event.preventDefault();
      let err = true;
      let msg = "";
      !this.comment.userid &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
      err &&
        !this.comment.comment &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.comment.focus());
      if (!err) alert(msg);
      else this.modify();
    },
    modify() {
      // console.log("!");
      let comment = {
        commentno: this.comment.commentno,
        userid: this.comment.userid,
        comment: this.comment.comment,
        articleno: this.$route.params.articleno,
      };
      this.modifyComment(comment);
      // this.editArticle(this.article);
      // this.$router.push({ name: "boardList" });
      this.refreshList();
    },
    refreshList() {
      this.$router.push({
        name: "boardDetail",
        params: { articleno: this.$route.params.articleno },
      });
      // this.getCommentList(this.article.articleno);
    },
  },
  components: {
    // CommentInputItem,
  },
};
</script>

<style></style>
