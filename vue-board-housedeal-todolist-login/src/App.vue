<template>
  <div id="app">
    <navi-bar class="py-0" />
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
  /* color: black; */
  /* padding: 0;
  margin: 0; */
}
a {
  text-decoration: none;
}

/* a.router-link-exact-active {
  color: #3aa4ca;
} */
</style>
