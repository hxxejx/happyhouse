<template>
  <b-container class="bv-example-row mt-3 text-center">
    <!-- <h3 class="underline-steelblue"><b-icon icon="house"></b-icon> SSAFY</h3> -->
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
          <b-carousel-slide
            caption="Welcome! Happy House"
            text="해피하우스 서비스를 찾아주셔서 감사합니다."
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Welcome! Happy House"
            text="해피하우스 서비스를 찾아주셔서 감사합니다."
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
        </b-carousel>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-jumbotron
          bg-variant="muted"
          text-variant="dark"
          border-variant="dark"
        >
          <template #header><b>영역2</b></template>

          <template #lead> 지도미리보기<br /> </template>

          <hr class="my-4" />

          <p></p>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <notice-list></notice-list>
        <!-- <b-jumbotron
          bg-variant="muted"
          text-variant="dark"
          border-variant="dark"
        >
          <template #header><b>영역3</b></template>

          <template #lead> <br /> </template>

          <hr class="my-4" />

          <p></p>
        </b-jumbotron> -->
      </b-col>
      <b-col>
        <board-list></board-list>
        <!-- <b-jumbotron
          bg-variant="muted"
          text-variant="dark"
          border-variant="dark"
        >
          <template #header><b>영역3</b></template>

          <template #lead> <br /> </template>

          <hr class="my-4" />

          <p></p>
        </b-jumbotron> -->
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import NoticeList from "@/components/notice/NoticeList.vue";
import BoardList from "@/components/board/BoardList.vue";

export default {
  name: "HomeView",
  props: {
    msg: String,
  },
  components: {
    NoticeList,
    BoardList,
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
