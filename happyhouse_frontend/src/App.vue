<template>
  <div id="app">
    <navi-bar class="py-0 shadow" />
    <!-- <router-view id="wrapper" /> -->
    <router-view class="flex-column min-vh-100 mb-5 pb-5" />
    <!-- <footer-bar class="py-0 footer"></footer-bar> -->
    <footer-bar class="py-0 bg-light mt-auto"></footer-bar>
  </div>
</template>

<script>
import NaviBar from "@/components/layout/HeaderNaviBar.vue";
import FooterBar from "@/components/layout/FooterBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
    FooterBar,
  },
};
</script>

<style>
* {
  font-family: "Gowun Dodum", sans-serif;
}
a {
  text-decoration: none;
}
</style>
