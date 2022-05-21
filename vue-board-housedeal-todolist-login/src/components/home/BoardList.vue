<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-alert show><h3>Q&A</h3></b-alert>
      </b-col>
    </b-row>
    <b-row>
      <b-col v-if="articles.length">
        <b-table-simple hover responsive>
          <b-thead head-variant="dark">
            <b-tr>
              <b-th>글번호</b-th>
              <b-th>제목</b-th>
              <b-th>작성자</b-th>
              <b-th>작성일</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <board-list-item
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
import BoardListItem from "@/components/home/item/BoardListItem";

const boardStore = "boardStore";

export default {
  name: "BoardList",
  components: {
    BoardListItem,
  },
  data() {
    return {};
  },
  created() {
    this.getArticleList();
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
