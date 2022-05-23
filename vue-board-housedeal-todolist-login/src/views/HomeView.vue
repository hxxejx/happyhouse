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
          <b-carousel-slide
            caption="Welcome! Happy House"
            text="해피하우스 서비스를 찾아주셔서 감사합니다."
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
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
    <b-row>
      <b-col> </b-col>
    </b-row>
    <b-row>
      <b-col>
        <house-deal-list></house-deal-list>
      </b-col>
      <b-col>
        <house-list></house-list>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import HouseList from "@/components/home/HouseList.vue";
import HouseDealList from "@/components/home/HouseDealList.vue";

export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    HouseList,
    HouseDealList,
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
