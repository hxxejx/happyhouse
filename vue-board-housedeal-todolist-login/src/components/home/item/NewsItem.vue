<template>
  <b-tr>
    <b-td class="subject" v-html="title" @click="goToLink"></b-td>
  </b-tr>
</template>

<script>
export default {
  name: "NewsItem",
  props: {
    title: String,
    originallink: String,
  },
  methods: {
    goToLink() {
      location.href = this.originallink;
    },
  },
};
</script>

<style>
.subject {
  font-weight: lighter;
  text-decoration: none;
  color: black;
}
</style>
