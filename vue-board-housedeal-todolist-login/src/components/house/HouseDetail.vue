<template>
  <b-container v-if="house && house.length != 0" class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show class="text-center">아파트 세부정보</b-alert></b-col>
    </b-row>
    <b-row class="mb-3">
      <b-col
        ><h3>{{ house.aptName }}</h3></b-col
      >
    </b-row>
    <!-- <b-row class="mb-2 mt-1">
      <b-col
        ><b-img :src="require('@/assets/apt.png')" fluid-grow></b-img
      ></b-col>
    </b-row> -->
    <b-row>
      <b-col>
        <b-alert show variant="secondary"
          >아파트 코드 : {{ house.aptCode }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="primary"
          >도로명 주소 : {{ house.sidoName }} {{ house.gugunName }}
          {{ house.roadName }} {{ house.roadNameBonbun | jusoBonbun
          }}{{ house.roadNameBubun | jusoBubun }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="info"
          >지번 : {{ house.sidoName }} {{ house.gugunName }}
          {{ house.dongName }} {{ house.jibun }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="success"
          >건축 연도 : {{ house.buildYear }}</b-alert
        >
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-alert show variant="warning"
          >최근 거래 금액 : {{ house.recentPrice }}만원
        </b-alert>
      </b-col>
    </b-row>
    <deal-list :deals="deals"></deal-list>
  </b-container>
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col
        ><b-alert show class="text-center"
          >선택된 아파트가 없습니다.</b-alert
        ></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import DealList from "@/components/house/DealList.vue";
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseDetail",
  computed: {
    ...mapState(houseStore, ["house", "deals"]),
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    jusoBonbun(value) {
      let num = value.toString();
      let result = "";
      // console.log(num[4]);
      for (const n of num) {
        if (n === "0") {
          continue;
        } else {
          result += n;
        }
      }
      return result;
    },
    jusoBubun(value) {
      let num = value.toString();
      let result = "-";
      // console.log(num[4]);
      for (const n of num) {
        if (n === "0") {
          continue;
        } else {
          result += n;
        }
      }
      if (result.length === 1) {
        result = "";
      }
      return result;
    },
  },
  components: {
    DealList,
  },
};
</script>

<style></style>
