<template>
  <b-tr>
    <b-td
      ><i
        ><b><font color="gold">NEW!</font></b></i
      >
      <b> {{ aptName }}</b> {{ dealAmount }}만원에 거래되었습니다</b-td
    >
  </b-tr>
</template>

<script>
export default {
  name: "HouseDealListItem",
  props: {
    aptName: String,
    dealAmount: String,
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
</style>
