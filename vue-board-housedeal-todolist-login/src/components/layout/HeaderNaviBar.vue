<template>
  <b-container>
    <b-navbar toggleable="lg" type="white" variant="white">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img
            src="@/assets/logo.png"
            class="d-inline-block align-middle"
            width="100px"
            alt="ssafy"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <!-- <b-nav-item href="#"
            ><router-link :to="{ name: 'home' }" class="link"
              ><b-icon icon="house" font-scale="1.5"></b-icon> 홈</router-link
            ></b-nav-item
          > -->
          <b-nav-item href="#"
            ><router-link :to="{ name: 'notice' }" class="link"
              ><b-icon icon="file-text" font-scale="1.5"></b-icon>
              NOTICE</router-link
            ></b-nav-item
          >

          <b-nav-item href="#"
            ><router-link :to="{ name: 'house' }" class="link"
              ><b-icon icon="house" font-scale="1.5"></b-icon> APT
              INFO</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'news' }" class="link"
              ><b-icon icon="newspaper" font-scale="1.5"></b-icon>
              NEWS</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'board' }" class="link"
              ><b-icon icon="question-circle" font-scale="1.5"></b-icon>
              SUPPORT</router-link
            ></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link :to="{ name: 'about' }" class="link"
              ><b-icon icon="person" font-scale="1.5"></b-icon>
              ABOUT</router-link
            ></b-nav-item
          >
          <!-- <b-nav-item href="#"
            ><router-link :to="{ name: 'todo' }" class="link"
              ><b-icon icon="calendar-check" font-scale="1.5"></b-icon>
              TODO</router-link
            ></b-nav-item
          > -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-if="userInfo">
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <b-avatar
                  variant="primary"
                  v-text="
                    userInfo ? userInfo.userid.charAt(0).toUpperCase() : ''
                  "
                  size="2em"
                ></b-avatar>
                Welcome! {{ userInfo.username }}({{ userInfo.userid }})
              </template>
              <b-dropdown-item href="#"
                ><router-link :to="{ name: 'mypage' }" class="link"
                  ><b-icon icon="person-circle"></b-icon> MY INFO</router-link
                ></b-dropdown-item
              >
              <b-dropdown-item
                href="#"
                class="link"
                @click.prevent="onClickLogout"
                ><a href=""> <b-icon icon="door-open"></b-icon> SIGN OUT </a>
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>

          <!-- <b-nav-item class="align-self-center"
            ><router-link
              :to="{ name: 'mypage' }"
              class="link align-self-center"
              >내정보보기</router-link
            ></b-nav-item
          >
          <b-nav-item
            class="link align-self-center"
            @click.prevent="onClickLogout"
            >로그아웃</b-nav-item
          > -->
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto" v-else>
          <b-nav-item right>
            <router-link :to="{ name: 'signIn' }" class="link"
              ><b-icon icon="key" font-scale="1"></b-icon> LOGIN</router-link
            >
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import ms from "@/store/modules/memberStore";

const memberStore = "memberStore";

export default {
  name: "HeaderNaviBar",
  computed: {
    ...mapState(memberStore, ["isLogin", "userInfo"]),
  },
  methods: {
    ...mapMutations(memberStore, ["SET_IS_LOGIN", "SET_USER_INFO"]),
    onClickLogout() {
      // console.log("memberStore : ", ms);
      this.SET_IS_LOGIN(false);
      this.SET_USER_INFO(null);
      sessionStorage.removeItem("access-token");
      if (this.$route.path != "/") this.$router.push({ name: "home" });
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
