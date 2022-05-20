<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글보기</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-left">
        <b-button variant="outline-primary" @click="listArticle">목록</b-button>
      </b-col>
      <b-col class="text-right" v-if="this.isAdmin">
        <b-button
          variant="outline-info"
          size="sm"
          @click="moveModifyArticle"
          class="mr-2"
          >글수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle"
          >글삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.articleno}.
          ${article.subject} [${article.hit}]</h3><div><h6>${article.userid}</div><div>${article.regtime}</h6></div>`"
          class="mb-2"
          border-variant="dark"
          no-body
        >
          <b-card-body class="text-left">
            <div v-html="message"></div>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
    <comment-view :pdata="pdata"></comment-view>
  </b-container>
</template>

<script>
import { getArticle, deleteArticle } from "@/api/notice";
import CommentView from "@/views/CommentView.vue";
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";
const noticeStore = "noticeStore";

export default {
  name: "NoticeDetail",
  data() {
    return {
      article: {
        articleno: 0,
        subject: "",
        hit: 0,
        userid: "",
        regtime: "",
      },
      pdata: {
        articleno: Number,
        check: Number,
      },
      isAdmin: false,
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    this.countUpArticle(this.$route.params.articleno);
    getArticle(
      this.$route.params.articleno,
      (response) => {
        this.article = response.data;
        this.article.hit += 1;
      },
      (error) => {
        console.log("삭제시 에러발생!!", error);
      },
    );
    this.pdata.articleno = this.$route.params.articleno;
    this.pdata.check = 2;
  },
  updated() {
    if (
      this.userInfo.userid === "admin" ||
      this.userInfo.userid === this.article.userid
    ) {
      this.isAdmin = true;
    }
  },
  methods: {
    ...mapActions(noticeStore, ["countUpArticle"]),
    listArticle() {
      this.$router.push({ name: "noticeList" });
    },
    moveModifyArticle() {
      this.$router.replace({
        name: "noticeModify",
        params: { articleno: this.article.articleno },
      });
    },
    deleteArticle() {
      if (confirm("정말로 삭제?")) {
        deleteArticle(this.article.articleno, () => {
          this.$router.push({ name: "noticeList" });
        });
      }
    },
  },
  components: {
    CommentView,
  },
};
</script>

<style></style>
