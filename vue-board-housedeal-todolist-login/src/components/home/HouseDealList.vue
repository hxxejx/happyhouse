<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-table-simple>
          <b-thead head-variant="light">
            <b-tr>
              <b-th>NEW 거래 매물</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <house-deal-list-item
              v-for="house in houses2"
              :key="house.aptCode"
              v-bind="house"
            />
          </tbody>
        </b-table-simple>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HouseDealListItem from "@/components/home/item/HouseDealListItem.vue";
import { mapState, mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseList",
  components: {
    HouseDealListItem,
  },
  created() {
    this.getNewDeal();
  },
  computed: {
    ...mapState(houseStore, ["houses2"]),
  },
  methods: {
    ...mapActions(houseStore, ["getNewDeal"]),
  },
};
</script>

<style></style>
