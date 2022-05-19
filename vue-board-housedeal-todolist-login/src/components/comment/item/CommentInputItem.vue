<template>
  <div></div>
  <!-- <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit">
        <b-form-group id="userid-group" label="작성자:" label-for="userid">
          <b-form-input
            id="userid"
            :disabled="isUserid"
            v-model="nowcomment.userid"
            type="text"
            required
            placeholder="작성자 입력..."
          ></b-form-input>
        </b-form-group>

        <b-form-group id="content-group" label="내용:" label-for="comment">
          <b-form-textarea
            id="comment"
            v-model="nowcomment.comment"
            placeholder="내용 입력..."
            rows="5"
            max-rows="15"
          ></b-form-textarea>
        </b-form-group>
        <b-button
          type="submit"
          variant="primary"
          class="m-1"
          v-if="this.type === 'register'"
          >작성</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else
          >수정</b-button
        >
      </b-form>
    </b-col> -->
  <!-- <comment-list></comment-list> -->
  <!-- </b-row> -->
</template>

<script>
// // import CommentList from "@/components/comment/CommentList.vue";
// import { mapActions, mapState } from "vuex";

// export default {
//   name: "CommentView",
//   data() {
//     return {
//       nowcomment: {
//         userid: "",
//         comment: "",
//       },
//       isUserid: false,
//     };
//   },
//   computed: {
//     ...mapState(["article", "comment"]),
//   },
//   props: {
//     type: { type: String },
//   },
//   created() {
//     this.nowcomment.userid = "";
//     this.nowcomment.comment = "";
//     if (this.type === "modify") {
//       console.log(this.$route.params.commentno);
//       console.log(this.comment);
//       this.getComment(this.$route.params.commentno);
//       this.nowcomment.userid = this.comment.userid;
//       this.nowcomment.comment = this.comment.comment;
//     }
//   },
//   methods: {
//     ...mapActions(["writeComment", "getCommentList", "getComment"]),
//     onSubmit(event) {
//       event.preventDefault();
//       let err = true;
//       let msg = "";
//       !this.nowcomment.userid &&
//         ((msg = "작성자 입력해주세요"),
//         (err = false),
//         this.$refs.userid.focus());
//       err &&
//         !this.nowcomment.comment &&
//         ((msg = "내용 입력해주세요"),
//         (err = false),
//         this.$refs.comment.focus());
//       if (!err) alert(msg);
//       else
//         this.type === "register" ? this.registComment() : this.modifyComment();
//     },
//     registComment() {
//       let comment = {
//         userid: this.nowcomment.userid,
//         comment: this.nowcomment.comment,
//         articleno: this.article.articleno,
//       };

//       this.writeComment(comment);
//       this.refreshList();
//     },
//     modifyComment() {
//       // this.editArticle(this.article);
//       // this.$router.push({ name: "boardList" });
//     },
//     refreshList() {
//       this.getCommentList(this.article.articleno);
//     },
//   },
//   components: {
//     // CommentList,
//   },
// };
</script>

<style></style>
