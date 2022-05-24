<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()" v-if="isAdmin"
          >글쓰기</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table
          hover
          responsive
          id="list-item"
          :items="articles"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
        >
          <template #cell(subject)="data">
            <router-link
              :to="{
                name: 'noticeDetail',
                params: { articleno: data.item.articleno },
              }"
              >{{ data.item.subject }}</router-link
            >
          </template>
          <template #cell(regtime)="data">
            {{ data.item.regtime | dateFormat }}
          </template>
        </b-table>
        <!-- <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
              <b-th>조회수</b-th>
              <b-th>작성자</b-th>
              <b-th>작성일</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <notice-list-item
              v-for="article in articles"
              :key="article.articleno"
              v-bind="article"
            />
          </tbody>
        </b-table-simple> -->
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
import { mapState, mapActions } from "vuex";
// import NoticeListItem from "@/components/notice/item/NoticeListItem";
import NoticeSearch from "@/components/notice/NoticeSearch.vue";
import moment from "moment";

const noticeStore = "noticeStore";
const memberStore = "memberStore";

export default {
  name: "NoticeList",
  components: {
    // NoticeListItem,
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

    if (this.userInfo.userid === "admin") {
      this.isAdmin = true;
    }
  },
  computed: {
    ...mapState(noticeStore, ["articles"]),
    ...mapState(memberStore, ["userInfo"]),
    rows() {
      return this.articles.length;
    },
  },
  methods: {
    ...mapActions(noticeStore, ["getArticleList"]),
    moveWrite() {
      this.$router.push({ name: "noticeRegister" });
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
