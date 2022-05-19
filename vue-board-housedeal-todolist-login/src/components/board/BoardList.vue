<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>글목록</h3></b-alert>
      </b-col>
    </b-row>
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()"
          >글쓰기</b-button
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
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
            <!-- 하위 component인 ListRow에 데이터 전달(props) -->
            <board-list-item
              v-for="article in articles"
              :key="article.articleno"
              v-bind="article"
            />
          </tbody>
        </b-table-simple>
      </b-col>
      <!-- <b-col v-else class="text-center">도서 목록이 없습니다.</b-col> -->
    </b-row>
    <board-search></board-search>
  </b-container>
</template>

<script>
// import { listArticle } from "@/api/board.js";
import { mapState, mapActions } from "vuex";
import BoardListItem from "@/components/board/item/BoardListItem";
import BoardSearch from "@/components/board/BoardSearch.vue";

const boardStore = "boardStore";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
    BoardSearch,
  },
  data() {
    return {
      // articles: [],
    };
  },
  created() {
    this.getArticleList();
    // let param = {
    //   pg: 1,
    //   spp: 20,
    //   key: null,
    //   word: null,
    // };
    // listArticle(
    //   param,
    //   (response) => {
    //     this.articles = response.data;
    //   },
    //   (error) => {
    //     console.log(error);
    //     // eslint-disable-next-line
    //   }
    // );
  },
  computed: {
    ...mapState(boardStore, ["articles"]),
  },
  methods: {
    ...mapActions(boardStore, ["getArticleList"]),
    moveWrite() {
      this.$router.push({ name: "boardRegister" });
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
