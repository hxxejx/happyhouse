<template>
  <div>
    <b-row>
      <b-col>
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 0px #000"
          fade
          indicators
        >
          <router-link :to="{ name: 'signUp' }">
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FXnMbv%2FbtrCY55t2jo%2FWM9NxyIEzFuG8DOynMSSl1%2Fimg.png"
            ></b-carousel-slide>
          </router-link>
          <a href="https://www.guud.com/index" target="_blank">
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FKMvuR%2FbtrC3dtI8ux%2FFDMG288BOJX30TkiqfSoK0%2Fimg.png"
            ></b-carousel-slide>
          </a>
          <a
            href="https://www.moel.go.kr/policy/corona19/detailList.do?tpi_seq=217"
            target="_blank"
          >
            <b-carousel-slide
              img-src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcweHFh%2FbtrCY7vq2C0%2Ftn0YA6KJB3YhgXt8vsA9Lk%2Fimg.png"
            ></b-carousel-slide>
          </a>
        </b-carousel>
      </b-col>
    </b-row>
    <b-container>
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
  </div>
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
