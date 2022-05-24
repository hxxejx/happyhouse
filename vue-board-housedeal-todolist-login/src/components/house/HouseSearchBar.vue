<template>
  <b-row class="mt-4 mb-4 text-center">
    <!-- <b-col class="sm-3">
      <b-form-input
        v-model.trim="dongCode"
        placeholder="동코드 입력...(예 : 11110)"
        @keypress.enter="sendKeyword"
      ></b-form-input>
    </b-col>
    <b-col class="sm-3" align="left">
      <b-button variant="outline-primary" @click="sendKeyword">검색</b-button>
    </b-col> -->
    <b-col class="sm-3">
      <b-form-select
        id="selectSido"
        v-model="sidoCode"
        :options="sidos"
        @change="gugunList"
      ></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select
        id="selectGugun"
        v-model="gugunCode"
        :options="guguns"
        @change="dongList"
      ></b-form-select>
    </b-col>
    <b-col class="sm-3">
      <b-form-select
        id="selectDong"
        v-model="dongCode"
        :options="dongs"
        @change="searchApt"
      ></b-form-select>
    </b-col>
  </b-row>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

/*
  namespaced: true를 사용했기 때문에 선언해줍니다.
  index.js 에서 modules 객체의 '키' 이름입니다.

  modules: {
    키: 값
    memberStore: memberStore,
    houseStore: houseStore
  }  
*/
const houseStore = "houseStore";

export default {
  name: "HouseSearchBar",
  data() {
    return {
      sidoCode: null,
      gugunCode: null,
      dongCode: null,
      sido: "",
      gugun: "",
      dong: "",
    };
  },
  computed: {
    ...mapState(houseStore, ["sidos", "guguns", "dongs", "houses"]),
    // sidos() {
    //   return this.$store.state.sidos;
    // },
  },
  created() {
    // this.$store.dispatch("getSido");
    // this.sidoList();
    this.CLEAR_SIDO_LIST();
    this.getSido();
    this.sido = "";
    this.gugun = "";
    this.dong = "";
  },
  methods: {
    ...mapActions(houseStore, [
      "getSido",
      "getGugun",
      "getDong",
      "getHouseList",
    ]),
    ...mapMutations(houseStore, [
      "CLEAR_SIDO_LIST",
      "CLEAR_GUGUN_LIST",
      "CLEAR_DONG_LIST",
      "SET_HOUSE_ADDRESS",
      "CLEAR_DETAIL_HOUSE",
      "CLEAR_HOUSE_LIST",
      "CLEAR_DETAIL_HOUSE",
      "CLEAR_HOUSE_ADDRESS",
    ]),
    // sidoList() {
    //   this.getSido();
    // },
    gugunList() {
      var target = document.getElementById("selectSido");
      this.sido = target.options[target.selectedIndex].text + " ";
      // console.log(this.sidoCode);
      this.CLEAR_GUGUN_LIST();
      this.CLEAR_DONG_LIST();
      this.CLEAR_HOUSE_LIST();
      this.CLEAR_DETAIL_HOUSE();
      this.CLEAR_HOUSE_ADDRESS();
      this.gugunCode = null;
      this.dongCode = null;
      if (this.sidoCode) this.getGugun(this.sidoCode);
    },
    dongList() {
      var target = document.getElementById("selectGugun");
      this.gugun = target.options[target.selectedIndex].text + " ";
      // console.log(this.gugunCode);
      this.CLEAR_DONG_LIST();
      this.CLEAR_HOUSE_LIST();
      this.CLEAR_DETAIL_HOUSE();
      this.CLEAR_HOUSE_ADDRESS();
      this.dongCode = null;
      if (this.gugunCode) this.getDong(this.gugunCode);
    },
    searchApt() {
      var target = document.getElementById("selectDong");
      this.dong = target.options[target.selectedIndex].text;
      var address = this.sido + this.gugun + this.dong;
      // console.log(address);
      this.SET_HOUSE_ADDRESS(address);
      this.CLEAR_DETAIL_HOUSE();
      // console.log(this.dongCode);
      if (this.dongCode) this.getHouseList(this.dongCode);
    },
  },
};
</script>

<style></style>
