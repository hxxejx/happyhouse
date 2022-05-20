<template>
  <b-row class="mb-1">
    <b-col>
      <b-input-group>
        <template #prepend>
          <b-form-select v-model="selected" :options="options"></b-form-select>
          <!-- <b-dropdown text="검색조건" variant="outline-danger">
          <b-dropdown-item >글번호</b-dropdown-item>
          <b-dropdown-item>제목</b-dropdown-item>
        </b-dropdown> -->
        </template>
        <b-form-input
          v-model.trim="word"
          placeholder="검색어 입력"
        ></b-form-input>
        <b-button variant="outline-success" @click="beforeSearch"
          >검색</b-button
        >
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions } from "vuex";
// import { searchArticleByNo, searchArticleBySubject } from "@/api/board";

const noticeStore = "noticeStore";

export default {
  name: "NoticeSearch",
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
    ...mapActions(noticeStore, [
      "getArticleList",
      "searchArticleByNo",
      "searchArticleBySubject",
    ]),
    beforeSearch() {
      if (this.word.length == 0) {
        alert("입력된 검색어가 없어서 전체 목록을 조회합니다.");
        // this.getArticleList();
        // this.$router.push({ name: "noticeList" });
        this.getArticleList();
      } else if (this.selected == "articleno") {
        if (isNaN(this.word)) {
          alert("숫자 입력!");
        } else {
          this.searchByNo();
        }
      } else if (this.selected == "subject") {
        this.searchBySubject();
      }
    },
    searchByNo() {
      // this.searchArticleByNo(this.word);
      this.searchArticleByNo(this.word);
    },
    searchBySubject() {
      // this.searchArticleBySubject(this.word);
      this.searchArticleBySubject(this.word);
    },
  },
};
</script>

<style></style>
