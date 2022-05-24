<template>
  <b-tr>
    <b-td
      ><i
        ><b><font color="orangered">HiT!</font></b></i
      >
      {{ dongName }} <b>{{ aptName }}</b> {{ hit }}번 조회되었습니다</b-td
    >
  </b-tr>
</template>

<script>
export default {
  name: "HouseListItem",
  props: {
    dongName: String,
    aptName: String,
    hit: Number,
  },
};
</script>

<style scoped>
.apt {
  width: 50px;
}

@keyframes blink-effect {
  50% {
    opacity: 0;
  }
}
.blink {
  animation: blink-effect 1s step-end infinite;
}
</style>
