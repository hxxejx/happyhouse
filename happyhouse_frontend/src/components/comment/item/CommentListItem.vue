<template>
  <div>
    <comment-modify
      v-if="isModify"
      :comment="nowcomment"
      @cancle-modify="changeState"
      @changed="changeComment"
    ></comment-modify>
    <b-card v-if="isDelete" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0">{{ nowcomment.regtime }}</h6>
      </template>
      <b-card-text
        >안녕하세요! 신혼부부를 위한 내 집 찾기 프로젝트,
        해피하우스입니다.</b-card-text
      >
      <b-card-text>{{ nowcomment.comment }}</b-card-text>
      <b-card-text
        >더 자세한 상담을 원하시면 삼성 청년 SW 아카데미(02-3429-5100)로 문의
        주세요.</b-card-text
      >
      <template #footer v-if="this.isAdmin">
        <button @click="moveModify" class="btn card-link">수정</button>
        <button @click="moveDelete" class="btn card-link">삭제</button>
      </template>
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
    pdata: {
      articleno: Number,
      check: Number,
    },
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
      isDelete: true,
    };
  },
  created() {
    this.nowcomment.commentno = this.commentno;
    this.nowcomment.userid = this.userid;
    this.nowcomment.comment = this.comment;
    this.nowcomment.regtime = this.regtime;
    this.nowcomment.articleno = this.pdata.articleno;
    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  methods: {
    ...mapActions(commentStore, ["deleteComment", "getCommentList"]),
    moveModify() {
      this.isModify = true;
      this.isDelete = false;
    },
    moveDelete() {
      if (confirm("삭제 하시겠습니까?")) {
        this.deleteComment(this.nowcomment.commentno);
        this.isDelete = false;
      }
    },
    changeState() {
      this.isModify = false;
      this.isDelete = true;
    },
    changeComment(comment) {
      this.nowcomment.comment = comment.comment;
      this.isModify = false;
      this.isDelete = true;
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
