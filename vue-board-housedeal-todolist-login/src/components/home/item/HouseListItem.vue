<template>
  <b-tr>
    <b-td
      ><i
        ><b><font color="red">HiT!</font></b></i
      >
      <b> {{ aptName }}</b> {{ hit }}번 조회되었습니다</b-td
    >
  </b-tr>
</template>

<script>
export default {
  name: "HouseListItem",
  props: {
    dongname: String,
    aptName: String,
    hit: Number,
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}
</style>
