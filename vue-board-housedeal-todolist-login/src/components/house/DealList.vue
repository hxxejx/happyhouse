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
          >거래 내역 보기</b-alert
        >
        <b-modal
          id="modal-center"
          hide-footer
          size="lg"
          centered
          title="거래내역"
        >
          <b-table
            responsive
            id="list-item"
            :items="deals"
            :fields="fields"
            :per-page="perPage"
            :current-page="currentPage"
          >
            <template #cell(dealYear)="data">
              {{ data.item.dealYear }}년
              {{ data.item.dealMonth | dateFormat }}월
              {{ data.item.dealDay | dateFormat }}일
            </template>
          </b-table>
          <div class="overflow-auto">
            <b-pagination
              v-model="currentPage"
              :total-rows="rows"
              :per-page="perPage"
              aria-controls="list-item"
              align="center"
            ></b-pagination>
          </div>
        </b-modal>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "DealList",
  components: {},
  props: {
    deals: [],
  },
  methods: {
    viewDealList() {},
  },
  computed: {
    rows() {
      return this.deals.length;
    },
  },
  filters: {
    dateFormat(value) {
      if (value.toString().length === 1) {
        return `0${value}`;
      } else {
        return value;
      }
    },
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: [
        {
          key: "dealYear",
          label: "거래일",
        },
        {
          key: "area",
          label: "면적(㎡)",
          thClass: "text-right",
          tdClass: "text-right",
        },
        {
          key: "floor",
          label: "층",
          thClass: "text-right",
          tdClass: "text-right",
        },
        {
          key: "dealAmount",
          label: "거래금액(만원)",
          thClass: "text-right",
          tdClass: "text-right",
        },
      ],
    };
  },
};
</script>

<style></style>
