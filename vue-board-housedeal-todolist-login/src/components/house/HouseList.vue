<template>
  <b-container v-if="houses && houses.length != 0" class="bv-example-row mt-3">
    <b-row>
      <b-col><b-alert show class="text-center">아파트 리스트</b-alert></b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-table
          hover
          responsive
          id="list-item"
          :items="houses"
          :fields="fields"
          :per-page="perPage"
          :current-page="currentPage"
          role="button"
          @row-clicked="selectHouse"
        >
          <template #cell(subject)="data">
            {{ data.item.aptName }}
          </template>
        </b-table>
      </b-col>
    </b-row>
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
  <b-container v-else class="bv-example-row mt-3">
    <b-row>
      <b-col
        ><b-alert show class="text-center"
          >아파트 목록이 없습니다.</b-alert
        ></b-col
      >
    </b-row>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseList",
  components: {},
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: "aptName",
          label: "아파트 이름",
          thStyle: {
            display: "none",
          },
        },
      ],
    };
  },
  methods: {
    ...mapActions(houseStore, ["detailHouse", "getDealList"]),
    ...mapActions(houseStore, ["countUpHouse"]),
    selectHouse(record) {
      // console.log(record.aptCode);
      // console.log(index);
      this.detailHouse(record);
      this.getDealList(record.aptCode);
      this.countUp(record.aptCode);
    },
    countUp(aptCode) {
      this.countUpHouse(aptCode);
    },
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
    rows() {
      return this.houses.length;
    },
  },
};
</script>

<style></style>
