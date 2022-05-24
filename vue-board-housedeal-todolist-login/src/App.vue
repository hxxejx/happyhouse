<template>
  <div id="app">
    <navi-bar class="py-0 shadow" />
    <router-view />
  </div>
</template>

<script>
import NaviBar from "@/components/layout/HeaderNaviBar.vue";

export default {
  name: "App",
  components: {
    NaviBar,
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

/* a.router-link-exact-active {
  color: #3aa4ca;
} */
</style>
