<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="white">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>공지사항</b-th>
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
export default {
  name: "NoticeList",
  components: {
    NoticeListItem,
  },
  created() {
    this.getArticleList();
  },
  computed: {
    ...mapState(noticeStore, ["articles"]),
  },
  methods: {
    ...mapActions(noticeStore, ["getArticleList"]),
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
