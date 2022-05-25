<template>
  <b-tr>
    <b-td v-html="title" @click="goToLink" class="font-bold"></b-td
    ><a href="#"
      ><b-td v-html="description" @click="goToLink" class="font-light"></b-td
    ></a>
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
    description: String,
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

<style>
.font-bold {
  font-weight: bold;
}
.font-light {
  font-weight: lighter;
}
a {
  text-decoration: none;
  color: black;
}
</style>
