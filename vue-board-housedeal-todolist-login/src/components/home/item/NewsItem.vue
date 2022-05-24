<template>
  <b-tr>
    <b-td v-html="title" @click="goToLink"></b-td>
    <b-td>{{ pubDate | dateFormat }}</b-td>
  </b-tr>
</template>

<script>
import moment from "moment";

export default {
  name: "NewsItem",
  props: {
    title: String,
    originallink: String,
    pubDate: String,
  },
  methods: {
    goToLink() {
      location.href = this.originallink;
    },
  },
  filters: {
    dateFormat(regtime) {
      return moment(new Date(regtime)).format("YY.MM.DD");
    },
  },
};
</script>

<style></style>
