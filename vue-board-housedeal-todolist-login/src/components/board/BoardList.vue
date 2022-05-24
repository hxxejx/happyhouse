<template>
  <b-container class="bv-example-row mt-3">
    <b-row class="mb-1">
      <b-col class="text-right">
        <b-button variant="outline-primary" @click="moveWrite()">작성</b-button>
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
        >
          <template #cell(subject)="data">
            <router-link
              :to="{
                name: 'boardDetail',
                params: { articleno: data.item.articleno },
              }"
              >{{ data.item.subject }}</router-link
            >
          </template>
          <template #cell(regtime)="data">
            {{ data.item.regtime | dateFormat }}
          </template>
        </b-table>
      </b-col>
    </b-row>
    <board-search></board-search>
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
import BoardSearch from "@/components/board/BoardSearch.vue";
import moment from "moment";

const boardStore = "boardStore";

export default {
  name: "BoardList",
  components: {
    BoardSearch,
  },
  data() {
    return {
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
  },
  computed: {
    ...mapState(boardStore, ["articles"]),
    rows() {
      return this.articles.length;
    },
  },
  methods: {
    ...mapActions(boardStore, ["getArticleList"]),
    moveWrite() {
      this.$router.push({ name: "boardRegister" });
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
