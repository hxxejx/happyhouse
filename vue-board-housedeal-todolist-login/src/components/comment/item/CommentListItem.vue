<template>
  <div>
    <comment-modify
      v-if="isModify"
      :commentno="this.nowcomment.commentno"
      :userid="this.nowcomment.userid"
      :comment="this.nowcomment.comment"
      :articleno="this.nowcomment.articleno"
      @cancle-modify="changeState"
      @changed="changeComment"
    ></comment-modify>
    <b-card v-else>
      <b-card-text>작성자: {{ nowcomment.userid }} </b-card-text>
      <b-card-text>내용: {{ nowcomment.comment }}</b-card-text>
      <!-- <b-card-text>{{ regtime | dateFormat }}</b-card-text> -->
      <b-card-text>일시: {{ nowcomment.regtime }}</b-card-text>
      <div v-if="this.isAdmin">
        <button @click="moveModify" class="btn card-link">수정</button>
        <button @click="moveDelete" class="btn card-link">삭제</button>
      </div>
    </b-card>
  </div>
</template>

<script>
import moment from "moment";
import CommentModify from "@/components/comment/CommentModify.vue";

import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";
const commentStore = "commentStore";

export default {
  name: "CommentListItem",
  props: {
    commentno: Number,
    userid: String,
    comment: String,
    regtime: String,
    articleno: Number,
    check: Number,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  components: {
    CommentModify,
  },
  data() {
    return {
      nowcomment: {
        commentno: 0,
        userid: "",
        comment: "",
        regtime: "",
        articleno: 0,
      },
      isAdmin: false,
      isModify: false,
    };
  },
  created() {
    this.nowcomment.commentno = this.commentno;
    this.nowcomment.userid = this.userid;
    this.nowcomment.comment = this.comment;
    this.nowcomment.regtime = this.regtime;
    this.nowcomment.articleno = this.articleno;
    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  methods: {
    ...mapActions(commentStore, ["deleteComment", "getCommentList"]),
    moveModify() {
      this.isModify = true;
      // this.$emit("modify-comment", {
      //   commentno: this.commentno,
      //   comment: this.comment,
      //   articleno: this.articleno,
      // });
      // this.$router.push({
      //   name: "commentModify",
      //   params: { commentno: this.commentno, articleno: this.articleno },
      // });
    },
    moveDelete() {
      if (confirm("삭제 하시겠습니까?")) {
        this.deleteComment(this.nowcomment.commentno);
        alert("삭제가 완료되었습니다.");
        let data = {
          check: this.check,
          articleno: this.articleno,
        };
        this.getCommentList(data);
        // this.$router.replace({
        //   name: "commentDelete",
        //   params: { commentno: this.commentno, articleno: this.articleno },
        // });
      }
    },
    changeState() {
      this.isModify = false;
    },
    changeComment(comment) {
      this.nowcomment.comment = comment.comment;
      this.isModify = false;
    },
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>
