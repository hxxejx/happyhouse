<template>
  <b-container class="bv-example-row mt-3">
    <b-row>
      <b-col>
        <b-table-simple>
          <b-thead head-variant="white">
            <b-tr>
              <b-th>인기 매물 BEST</b-th>
            </b-tr>
          </b-thead>
          <tbody>
            <house-list-item
              v-for="house in houses"
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
import HouseListItem from "@/components/home/item/HouseListItem.vue";
import { mapState, mapActions } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseList",
  components: {
    HouseListItem,
  },
  created() {
    this.getPopularHouse();
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
  methods: {
    ...mapActions(houseStore, ["getPopularHouse"]),
  },
};
</script>

<style></style>
