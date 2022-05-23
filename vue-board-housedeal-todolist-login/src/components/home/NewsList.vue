<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
          <tbody>
            <news-list-item
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
import NoticeListItem from "@/components/home/item/NewsListItem";

const newsStore = "newsStore";
export default {
  name: "NewsList",
  components: {
    NewsListItem,
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
