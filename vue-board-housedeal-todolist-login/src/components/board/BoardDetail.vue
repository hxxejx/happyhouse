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
          >수정</b-button
        >
        <b-button variant="outline-danger" size="sm" @click="deleteArticle"
          >삭제</b-button
        >
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col>
        <b-card
          :header-html="`<h3>${article.articleno}.
          ${article.subject} </h3><div><h6>${article.userid}</div><div>${article.regtime}</h6></div>`"
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
import { getArticle, deleteArticle } from "@/api/board";
import CommentView from "@/views/CommentView.vue";
import { mapState, mapActions, mapMutations } from "vuex";

const memberStore = "memberStore";
const boardStore = "boardStore";

export default {
  name: "BoardDetail",
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
      currentPage: 0,
    };
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(boardStore, ["page"]),
    message() {
      if (this.article.content)
        return this.article.content.split("\n").join("<br>");
      return "";
    },
  },
  created() {
    this.currentPage = this.page;
    this.countUpArticle(this.$route.params.articleno);
    getArticle(
      this.$route.params.articleno,
      (response) => {
        this.article = response.data;
        this.article.hit += 1;
      },
      (error) => {
        console.log("삭제 에러 발생", error);
      },
    );
    this.pdata.articleno = this.$route.params.articleno;
    this.pdata.check = 1;
  },
  mounted() {
    this.SET_ARTICLE_PAGE(this.currentPage);
  },
  updated() {
    if (
      this.userInfo.userid === "admin" ||
      this.userInfo.userid === this.article.userid
    ) {
      this.isAdmin = true;
    }
  },
  destroyed() {
    // console.log("des");
    this.SET_ARTICLE_PAGE(1);
  },
  methods: {
    ...mapActions(boardStore, ["countUpArticle"]),
    ...mapMutations(boardStore, ["SET_ARTICLE_PAGE"]),
    listArticle() {
      this.$router.push({ name: "boardList" });
    },
    moveModifyArticle() {
      this.$router.push({
        name: "boardModify",
        params: { articleno: this.article.articleno },
      });
    },
    deleteArticle() {
      if (confirm("삭제 하시겠습니까?")) {
        deleteArticle(this.article.articleno, () => {
          this.$router.push({ name: "boardList" });
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
