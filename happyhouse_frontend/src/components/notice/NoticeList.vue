<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()" v-if="isAdmin"
          >작성</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table
          hover
          responsive
          id="list-item"
          head-variant="light"
          :items="articles"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          @row-clicked="goDetail"
          role="button"
        >
          <template #cell(regtime)="data">
            {{ data.item.regtime | dateFormat }}
          </template>
        </b-table>
      </b-col>
    </b-row>
    <notice-search></notice-search>
    <div class="overflow-auto">
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="list-item"
        align="center"
      ></b-pagination>
    </div>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import NoticeSearch from "@/components/notice/NoticeSearch.vue";
import moment from "moment";

const noticeStore = "noticeStore";
const memberStore = "memberStore";

export default {
  name: "NoticeList",
  components: {
    NoticeSearch,
  },
  data() {
    return {
      isAdmin: false,
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: "articleno",
          label: "글번호",
        },
        {
          key: "subject",
          label: "제목",
        },
        {
          key: "hit",
          label: "조회수",
        },
        {
          key: "userid",
          label: "작성자",
        },
        {
          key: "regtime",
          label: "작성일",
        },
      ],
    };
  },
  created() {
    this.getArticleList();
    this.currentPage = this.page;
    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  destroyed() {
    this.SET_ARTICLE_PAGE(1);
  },
  computed: {
    ...mapState(noticeStore, ["articles", "page"]),
    ...mapState(memberStore, ["userInfo"]),
    rows() {
      return this.articles.length;
    },
  },
  methods: {
    ...mapActions(noticeStore, ["getArticleList"]),
    ...mapMutations(noticeStore, ["SET_ARTICLE_PAGE"]),
    moveWrite() {
      this.$router.push({ name: "noticeRegister" });
    },
    goDetail(record) {
      this.SET_ARTICLE_PAGE(this.currentPage);
      this.$router.push({
        name: "noticeDetail",
        params: { articleno: record.articleno },
      });
    },
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style scope>
.tdClass {
  width: 50px;
  text-align: center;
}
.tdSubject {
  width: 300px;
  text-align: left;
}
</style>
