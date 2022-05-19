<template>
  <div>
    <b-card>
      <b-card-text>작성자: {{ userid }} </b-card-text>
      <b-card-text>내용: {{ comment }}</b-card-text>
      <!-- <b-card-text>{{ regtime | dateFormat }}</b-card-text> -->
      <b-card-text>일시: {{ regtime }}</b-card-text>
      <div v-if="this.isAdmin">
        <button @click="moveModify" class="btn card-link">수정</button>
        <button @click="moveDelete" class="btn card-link">삭제</button>
      </div>
    </b-card>
  </div>
</template>

<script>
import moment from "moment";
import { mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "CommentListItem",
  props: {
    commentno: Number,
    userid: String,
    comment: String,
    regtime: String,
    articleno: Number,
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  data() {
    return {
      isAdmin: false,
    };
  },
  created() {
    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  methods: {
    moveModify() {
      this.$router.push({
        name: "commentModify",
        params: { commentno: this.commentno, articleno: this.articleno },
      });
    },
    moveDelete() {
      if (confirm("삭제 하시겠습니까?")) {
        this.$router.replace({
          name: "commentDelete",
          params: { commentno: this.commentno, articleno: this.articleno },
        });
      }
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
