<template>
  <b-container class="bv-example-row mt-3 text-justify">
    <b-row>
      <b-col>
        <font color="#6495ED" class="title"
          ><b-icon icon="bell"></b-icon> NEW!</font
        >
        <b-spinner
          v-if="isLoading"
          small
          label="Small Spinner"
          variant="primary"
          style="margin: 0px 0px 0px 10px"
        ></b-spinner>
        <b-table
          hover
          responsive
          borderless
          id="list-item"
          :items="houses2"
          :fields="fields"
          role="button"
          @row-clicked="selectHouse"
          v-b-modal.modal-house-deal-list
        >
          <template #cell(aptName)="data">
            {{ data.item.dongName
            }}<b @click="selectHouse(data.item)"> {{ data.item.aptName }}</b>
            {{ data.item.dealAmount }}만원에 거래되었습니다
          </template>
        </b-table>
        <b-modal
          id="modal-house-deal-list"
          hide-footer
          size="lg"
          centered
          title="아파트 정보"
        >
          <b-container
            v-if="house && house.length != 0"
            class="bv-example-row mt-3"
          >
            <b-row class="mb-3">
              <b-col
                ><h3>{{ house.aptName }}</h3></b-col
              >
            </b-row>
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
        </b-modal>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import DealList from "@/components/house/DealList.vue";
import { mapState, mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseList",
  components: {
    DealList,
  },
  created() {
    this.getNewDeal();
  },
  computed: {
    ...mapState(houseStore, ["houses2"]),
    ...mapState(houseStore, ["house", "deals"]),
  },
  watch: {
    houses2: function () {
      this.isLoading = false;
    },
  },
  methods: {
    ...mapActions(houseStore, ["getNewDeal"]),
    ...mapActions(houseStore, ["getDetailHouse", "getDealList"]),
    ...mapActions(houseStore, ["countUpHouse"]),
    selectHouse(record) {
      // console.log(record);
      // console.log(record.aptCode);
      // this.getNewDeal();
      // console.log(index);
      this.getDetailHouse(record.aptCode);
      // console.log(this.house);
      // console.log(this.house);
      this.getDealList(record.aptCode);
      this.countUp(record.aptCode);
    },
    countUp(aptCode) {
      this.countUpHouse(aptCode);
    },
  },
  data() {
    return {
      fields: [
        {
          key: "aptName",
          label: "아파트 이름",
          thStyle: {
            display: "none",
          },
        },
      ],
      isLoading: true,
    };
  },
  filters: {
    price(value) {
      if (!value) return value;
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    jusoBonbun(value) {
      if (!value) return value;
      let num = value.toString();
      let result = "";
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
      if (!value) return value;
      let num = value.toString();
      let result = "-";
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
};
</script>

<style>
.title {
  font-size: large;
  font-style: italic;
  font-weight: bold;
}
</style>
