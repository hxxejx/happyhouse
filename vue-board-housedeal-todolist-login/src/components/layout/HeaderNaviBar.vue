<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
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

    <b-navbar-toggle target="nav-collapse" class="nav-button"
      ><b-icon icon="list-ul" class="nav-button"></b-icon
    ></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
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
            ><b-icon icon="person" font-scale="1.5"></b-icon> ABOUT</router-link
          ></b-nav-item
        >
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" v-if="userInfo">
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <b-avatar
                variant="light"
                v-text="userInfo ? userInfo.userid.charAt(0).toUpperCase() : ''"
                size="2em"
              ></b-avatar>
              <span class="link">
                Welcome! {{ userInfo.username }}({{ userInfo.userid }})</span
              >
            </template>
            <b-dropdown-item href="#"
              ><router-link :to="{ name: 'mypage' }" class="dropitem"
                ><b-icon icon="person-circle"></b-icon> MY INFO</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#" @click.prevent="onClickLogout"
              ><b-icon icon="door-open"></b-icon> SIGN OUT
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
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
.link {
  text-decoration: none;
  color: white;
}
.dropitem {
  text-decoration: none;
  color: black;
}

.nav-button {
  border: 0;
  color: white;
}

.navbar {
  min-height: 80px;
}

.navbar-brand {
  padding: 0 15px;
  height: 80px;
  line-height: 80px;
}

.navbar-toggle {
  /* (80px - button height 34px) / 2 = 23px */
  margin-top: 23px;
  padding: 9px 10px !important;
}

@media (min-width: 768px) {
  .navbar-nav > li > a {
    /* (80px - line-height of 27px) / 2 = 26.5px */
    padding-left: 26.5px;
    line-height: 27px;
  }
}
</style>
