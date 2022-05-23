<template>
  <div>
    <b-row>
      <b-col>
        <b-alert
          v-b-modal.modal-center
          show
          variant="danger"
          role="button"
          @click="viewDealList"
          >거래내역 보기</b-alert
        >
        <b-modal
          id="modal-center"
          hide-footer
          size="lg"
          centered
          title="거래내역"
        >
          <b-table-simple outlined>
            <b-thead head-variant="">
              <b-tr>
                <b-th>거래일</b-th>
                <b-th>면적(㎡)</b-th>
                <b-th class="text-right">층</b-th>
                <b-th class="text-right">거래금액(만원)</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <deal-list-item
                v-for="(deal, index) in deals"
                :key="index"
                :deal="deal"
              ></deal-list-item>
            </b-tbody>
          </b-table-simple>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import DealListItem from "@/components/house/DealListItem.vue";

export default {
  name: "DealList",
  components: {
    DealListItem,
  },
  props: {
    deals: [],
  },
  methods: {
    viewDealList() {},
  },
};
</script>

<style></style>
