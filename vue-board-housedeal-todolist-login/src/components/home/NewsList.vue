<template>
  <b-container class="bv-example-row mt-3 text-justify">
    <b-row>
      <b-col>
        <b-table-simple borderless>
          <b-thead class="title">
            <font color="#2E8B57"><b-icon icon="newspaper"></b-icon> NEWS</font>
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
import NewsItem from "@/components/home/item/NewsItem.vue";

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
.title {
  font-size: large;
  font-style: italic;
  font-weight: bold;
}
</style>
