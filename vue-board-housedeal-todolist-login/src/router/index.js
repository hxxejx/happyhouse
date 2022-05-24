import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

import store from "@/store/index.js";

Vue.use(VueRouter);

// https://router.vuejs.org/kr/guide/advanced/navigation-guards.html
const onlyAuthUser = async (to, from, next) => {
  // console.log(store);
  const checkUserInfo = store.getters["memberStore/checkUserInfo"];
  const getUserInfo = store._actions["memberStore/getUserInfo"];
  let token = sessionStorage.getItem("access-token");
  if (checkUserInfo == null && token) {
    await getUserInfo(token);
  }
  if (checkUserInfo === null) {
    alert("로그인이 필요한 페이지입니다..");
    next({ name: "signIn" });
    // router.push({ name: "signIn" });
  } else {
    // console.log("로그인 했다.");
    next();
  }
};

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/user",
    name: "user",
    component: () => import("@/views/MemberView.vue"),
    children: [
      {
        path: "singin",
        name: "signIn",
        component: () => import("@/components/user/MemberLogin.vue"),
      },
      {
        path: "singup",
        name: "signUp",
        component: () => import("@/components/user/MemberRegister.vue"),
      },
      {
        path: "mypage",
        name: "mypage",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/user/MemberMyPage.vue"),
      },
      {
        path: "update/:userid",
        name: "memberUpdate",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/user/MemberUpdate.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () => import("@/components/board/BoardList.vue"),
      },
      {
        path: "write",
        name: "boardRegister",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/board/BoardRegister.vue"),
      },
      {
        path: "detail/:articleno",
        name: "boardDetail",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/board/BoardDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "boardModify",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/board/BoardModify.vue"),
      },
    ],
  },
  {
    path: "/house",
    name: "house",
    beforeEnter: onlyAuthUser,
    component: () => import("@/views/HouseView.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () => import("@/views/NewsView.vue"),
    redirect: "/news/list",
    children: [
      {
        path: "list",
        name: "newsList",
        component: () => import("@/components/news/NewsList.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    path: "/comment/list/:articleno",
    name: "commentList",
    component: () => import("@/components/comment/CommentList.vue"),
  },
  {
    path: "/comment/modify/:commentno",
    name: "commentModify",
    component: () => import("@/components/comment/CommentModify.vue"),
  },
  {
    path: "/notice",
    name: "notice",
    component: () => import("@/views/NoticeView.vue"),
    redirect: "/notice/list",
    children: [
      {
        path: "list",
        name: "noticeList",
        component: () => import("@/components/notice/NoticeList.vue"),
      },
      {
        path: "write",
        name: "noticeRegister",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/notice/NoticeRegister.vue"),
      },
      {
        path: "detail/:articleno",
        name: "noticeDetail",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/notice/NoticeDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "noticeModify",
        beforeEnter: onlyAuthUser,
        component: () => import("@/components/notice/NoticeModify.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
