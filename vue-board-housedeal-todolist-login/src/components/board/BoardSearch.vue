<template>
  <b-row class="mb-1">
    <b-col>
      <b-input-group>
        <template #prepend>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </template>
        <b-form-input
          v-model.trim="word"
          placeholder="검색어 입력"
        ></b-form-input>
        <b-button variant="outline-success" @click="beforeSearch">
          검색</b-button
        >
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";

const boardStore = "boardStore";

export default {
  name: "BoardSearch",
  data() {
    return {
      selected: "articleno",
      options: [
        { value: "articleno", text: "글 번호" },
        { value: "subject", text: "제목" },
      ],
      word: "",
    };
  },
  methods: {
    ...mapActions(boardStore, [
      "getArticleList",
      "searchArticleByNo",
      "searchArticleBySubject",
    ]),
    beforeSearch() {
      if (this.word.length == 0) {
        alert("입력된 검색어가 없어서 전체 목록을 조회합니다.");
        this.getArticleList();
      } else if (this.selected == "articleno") {
        if (isNaN(this.word)) {
          alert("글 번호를 입력해주세요.");
        } else {
          this.searchByNo();
        }
      } else if (this.selected == "subject") {
        this.searchBySubject();
      }
    },
    searchByNo() {
      this.searchArticleByNo(this.word);
    },
    searchBySubject() {
      this.searchArticleBySubject(this.word);
    },
  },
};
</script>

<style></style>
