<template>
  <b-container class="bv-example-row mt-3 text-justify">
    <b-row>
      <b-col>
        <b-table-simple>
          <b-thead class="title"
            ><font color="#FF6347"
              ><b-icon icon="graph-up"></b-icon> HiT!
            </font></b-thead
          >
          <tbody>
            <house-list-item
              v-for="house in houses1"
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
    ...mapState(houseStore, ["houses1"]),
  },
  methods: {
    ...mapActions(houseStore, ["getPopularHouse"]),
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
