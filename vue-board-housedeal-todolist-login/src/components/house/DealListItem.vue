<template>
  <b-tr>
    <b-td
      >{{ deal.dealYear }}년 {{ deal.dealMonth | dateFormat }}월
      {{ deal.dealDay | dateFormat }}일</b-td
    >
    <b-td>{{ deal.area }}</b-td>
    <b-td class="text-right">{{ deal.floor }}</b-td>
    <b-td class="text-right">{{ deal.dealAmount }}</b-td>
  </b-tr>
</template>

<script>
export default {
  name: "DealListItem",
  props: {
    deal: Object,
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
  methods: {},
};
</script>

<style></style>
