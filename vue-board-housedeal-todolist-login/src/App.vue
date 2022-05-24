<template>
  <div id="app">
    <navi-bar class="py-0 shadow" />
    <router-view />
    <footer-bar class="py-0 footer"></footer-bar>
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
