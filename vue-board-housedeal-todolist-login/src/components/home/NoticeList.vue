<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>NOTICE</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
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
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import NoticeListItem from "@/components/home/item/NoticeListItem";

const noticeStore = "noticeStore";
const memberStore = "memberStore";
export default {
  name: "NoticeList",
  components: {
    NoticeListItem,
  },
  data() {
    return {
      isAdmin: false,
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
  },
  methods: {
    ...mapActions(noticeStore, ["getArticleList"]),
    moveWrite() {
      this.$router.push({ name: "noticeRegister" });
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
