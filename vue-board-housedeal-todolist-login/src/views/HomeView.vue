<template>
  <b-container class="bv-example-row mt-3 text-center">
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 0px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <router-link :to="{ name: 'signUp' }">
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbSKUAj%2FbtrCUmrNe99%2FMV7e1BkZhS11tKZJCmM6k1%2Fimg.png"
            ></b-carousel-slide>
          </router-link>
          <a href="https://housing.seoul.go.kr/site/main/content/sh01_040081">
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbaTWNQ%2FbtrCS1A39ia%2FuOY72dV9sg8afvvqJbgGEK%2Fimg.png"
            ></b-carousel-slide>
          </a>
          <a href="https://seoul.childcare.go.kr/ccef/main.jsp">
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpTyIq%2FbtrCJcX96n7%2FuknuM0BKSBAQ66eB59sK80%2Fimg.png"
            ></b-carousel-slide>
          </a>
        </b-carousel>
      </b-col>
    </b-row>
    <b-tr>
      <b-td rowspan="2"><news-list></news-list></b-td>
      <b-td>
        <house-list></house-list>
      </b-td>
    </b-tr>
    <b-tr>
      <b-td>
        <house-deal-list></house-deal-list>
      </b-td>
    </b-tr>
  </b-container>
</template>

<script>
import HouseList from "@/components/home/HouseList.vue";
import HouseDealList from "@/components/home/HouseDealList.vue";
import NewsList from "@/components/home/NewsList.vue";

export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    HouseList,
    HouseDealList,
    NewsList,
  },
  methods: {
    gotoSite() {
      window.location.href =
        "https://housing.seoul.go.kr/site/main/content/sh01_040081";
    },
  },
};
</script>

<style scoped>
.underline-steelblue {
  display: inline-block;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 70%,
    rgba(72, 190, 233, 0.3) 30%
  );
}
</style>
