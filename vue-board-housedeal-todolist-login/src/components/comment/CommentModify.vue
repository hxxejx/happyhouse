<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col style="text-align: left">
        <b-form @submit="onSubmit">
          <b-form-group id="userid-group" label="작성자:" label-for="userid">
            <b-form-input
              id="userid"
              :disabled="isUserid"
              v-model="nowcomment.userid"
              type="text"
              required
              readonly
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
          <b-button type="submit" variant="primary" class="m-1">수정</b-button>
          <b-button variant="primary" class="m-1" @click="cancleModify"
            >취소</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";

const commentStore = "commentStore";

export default {
  name: "CommentModify",
  data() {
    return {
      nowcomment: {
        userid: "",
        comment: "",
      },
      isUserid: false,
    };
  },
  computed: {},
  props: {
    comment: {
      commentno: 0,
      userid: "",
      comment: "",
      regtime: "",
      articleno: 0,
    },
  },
  created() {
    this.nowcomment.userid = this.comment.userid;
    this.nowcomment.comment = this.comment.comment;
  },
  methods: {
    ...mapActions(commentStore, ["modifyComment"]),
    onSubmit(event) {
      event.preventDefault();
      let err = true;
      let msg = "";
      !this.nowcomment.userid &&
        ((msg = "작성자 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
      err &&
        !this.nowcomment.comment &&
        ((msg = "내용 입력해주세요"),
        (err = false),
        this.$refs.comment.focus());
      if (!err) alert(msg);
      else this.modify();
    },
    modify() {
      let comment = {
        commentno: this.comment.commentno,
        userid: this.nowcomment.userid,
        comment: this.nowcomment.comment,
        articleno: this.comment.articleno,
      };
      this.modifyComment(comment);

      this.refreshList();
    },
    refreshList() {
      this.$emit("changed", {
        comment: this.nowcomment.comment,
      });
    },
    cancleModify() {
      this.$emit("cancle-modify");
    },
  },
  components: {},
};
</script>

<style></style>
