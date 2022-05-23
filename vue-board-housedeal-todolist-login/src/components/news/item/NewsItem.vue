<template>
  <b-tr>
    <b-td>{{ title }} </b-td>
    <b-td>{{ description }}</b-td>
    <b-td>{{ pubDate }}</b-td>
    <b-td><b-icon icon="news" @click="goToLink"></b-icon></b-td>
  </b-tr>
</template>

<script>
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
};
</script>

<style></style>
