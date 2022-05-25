<template>
  <b-card
    header-tag="header"
    footer-tag="footer"
    bg-variant="light"
    class="footer"
  >
    <router-link to="/">
      <img
        src="@/assets/logo_footer.png"
        class="d-inline-block align-middle"
        width="100px"
        alt="ssafy"
      />
    </router-link>
    <b-card-text>
      광주광역시 광산구 하남산단 6번로 107(오선동, 삼성전자 광주사업장)<br />제작자
      허은지, 김기홍 | 고객센터 02-3429-5100 | 평일 상담시간 09:00 ~
      18:00</b-card-text
    >
    <b-card-text><b>이용약관 | 개인정보처리방침</b></b-card-text>
    <template #footer>
      <div class="text-center">
        본 사이트의 콘텐츠는 저작권법의 보호를 받는 바 무단 전재, 복사, 배포
        등을 금합니다.<br />
        2022 Copyright ©
        <a href="http://www.SSAFY.com" class="link">SSAFY.com</a> All Rights
        Reserved.
      </div>
    </template>
  </b-card>
</template>

<script></script>

<style scoped>
.link {
  text-decoration: none;
}

.footer {
  border-radius: 0;
}
* {
  color: rgb(100, 100, 100);
}
</style>
