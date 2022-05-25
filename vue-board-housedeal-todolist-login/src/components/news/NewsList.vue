<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-table-simple hover responsive>
          <b-thead head-variant="light">
            <b-tr>
              <b-th>제목</b-th>
              <b-th>내용</b-th>
              <b-th>게시일</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <news-item
              v-for="article in articles"
              :key="article.originallink"
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
import NewsItem from "@/components/news/item/NewsItem.vue";

const newsStore = "newsStore";

export default {
  name: "NewsList",
  components: {
    NewsItem,
  },
  created() {
    this.getArticleList();
  },
  computed: {
    ...mapState(newsStore, ["articles"]),
  },
  methods: {
    ...mapActions(newsStore, ["getArticleList"]),
  },
  // filters: {
  //   dateFormat(regtime) {
  //     return moment(new Date(regtime)).format("YY.MM.DD");
  //   },
  // },
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
