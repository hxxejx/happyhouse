<template>
  <b-row class="mb-1" v-if="isAdmin">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit">
        <b-form-group id="userid-group" label="작성자:" label-for="userid">
          <b-form-input
            id="userid"
            :disabled="isUserid"
            v-model="comment.userid"
            type="text"
            required
            placeholder="작성자 입력..."
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
        <b-button type="submit" variant="primary" class="m-1">작성</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";
const commentStore = "commentStore";

export default {
  name: "CommentView",
  data() {
    return {
      comment: {
        userid: "",
        comment: "",
      },
      isUserid: false,
      isAdmin: false,
    };
  },
  computed: {
    ...mapState(["article"]),
    ...mapState(memberStore, ["userInfo"]),
  },
  props: {
    pdata: {
      articleno: Number,
      check: Number,
    },
  },
  created() {
    this.comment.userid = this.userInfo.userid;
    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  methods: {
    ...mapActions(commentStore, ["writeComment"]),

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
      else this.registComment();
    },
    registComment() {
      let comment = {
        userid: this.comment.userid,
        comment: this.comment.comment,
        articleno: this.pdata.articleno,
        check: this.pdata.check,
      };

      this.writeComment(comment);
      this.refreshList();
    },
    refreshList() {
      this.$router.go({
        name: "commentList",
        params: { articleno: this.pdata.articleno, check: this.pdata.check },
      });
    },
  },
  components: {},
};
</script>

<style></style>
