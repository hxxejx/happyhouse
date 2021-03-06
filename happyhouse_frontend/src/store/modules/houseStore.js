import {
  sidoList,
  gugunList,
  dongList,
  houseList,
  countUpHouse,
  popularHouse,
  dealList,
  newDeal,
  detailHouse,
} from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "선택하세요" }],
    guguns: [{ value: null, text: "선택하세요" }],
    dongs: [{ value: null, text: "선택하세요" }],
    houses: [],
    house: null,
    address: "",
    deals: [],
    houses1: [],
    houses2: [],
  },

  getters: {},

  mutations: {
    SET_SIDO_LIST: (state, sidos) => {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST: (state, guguns) => {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST: (state, dongs) => {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    CLEAR_SIDO_LIST: (state) => {
      state.sidos = [{ value: null, text: "시/도" }];
    },
    CLEAR_GUGUN_LIST: (state) => {
      state.guguns = [{ value: null, text: "시/구/군" }];
    },
    CLEAR_DONG_LIST: (state) => {
      state.dongs = [{ value: null, text: "읍/면/동/리" }];
    },
    SET_HOUSE_LIST: (state, houses) => {
      //   console.log(houses);
      state.houses = houses;
    },
    SET_DETAIL_HOUSE: (state, house) => {
      state.house = house;
    },
    SET_POPULAR_HOUSE: (state, houses) => {
      state.houses1 = houses;
    },
    CLEAR_HOUSE_LIST: (state) => {
      state.houses = [];
    },
    CLEAR_DETAIL_HOUSE: (state) => {
      state.house = null;
    },
    SET_HOUSE_ADDRESS: (state, address) => {
      state.address = address;
    },
    CLEAR_HOUSE_ADDRESS: (state) => {
      state.address = "";
    },
    SET_DEAL_LIST: (state, deals) => {
      state.deals = deals;
    },
    CLEAR_DEAL_LIST: (state) => {
      state.deals = [];
    },
    SET_NEW_DEAL: (state, houses) => {
      state.houses2 = houses;
    },
  },

  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          // console.log(data);
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      const params = {
        sido: sidoCode,
      };
      gugunList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getDong: ({ commit }, gugunCode) => {
      const params = {
        gugun: gugunCode,
      };
      dongList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getHouseList: ({ commit }, dongCode) => {
      // vue cli enviroment variables 검색
      //.env.local file 생성.
      // 반드시 VUE_APP으로 시작해야 한다.
      // const SERVICE_KEY = process.env.VUE_APP_APT_DEAL_API_KEY;
      //   const SERVICE_KEY =
      //     "9Xo0vlglWcOBGUDxH8PPbuKnlBwbWU6aO7%2Bk3FV4baF9GXok1yxIEF%2BIwr2%2B%2F%2F4oVLT8bekKU%2Bk9ztkJO0wsBw%3D%3D";
      // const params = {
      //   LAWD_CD: gugunCode,
      //   DEAL_YMD: "202112",
      // serviceKey: decodeURIComponent(SERVICE_KEY),
      // };
      const params = {
        dong: dongCode,
      };
      // houseList(
      //   params,
      //   (response) => {
      //     //   console.log(response.data.response.body.items.item);
      //     commit("SET_HOUSE_LIST", response.data.response.body.items.item);
      //   },
      //   (error) => {
      //     console.log(error);
      //   },
      // );
      houseList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          // console.log(data);
          commit("SET_HOUSE_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    detailHouse: ({ commit }, house) => {
      // 나중에 house.일련번호를 이용하여 API 호출
      commit("SET_DETAIL_HOUSE", house);
    },
    countUpHouse: (context, aptcode) => {
      countUpHouse(aptcode, ({ data }) => {
        let msg = "조회수 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "조회수 증가가 완료되었습니다.";
        }
        console.log(msg);
      });
    },
    getPopularHouse: ({ commit }) => {
      popularHouse(
        ({ data }) => {
          commit("SET_POPULAR_HOUSE", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getDealList: ({ commit }, aptCode) => {
      const params = {
        aptCode: aptCode,
      };
      dealList(
        params,
        ({ data }) => {
          // console.log(commit, response);
          // console.log(data);
          commit("SET_DEAL_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getNewDeal: ({ commit }) => {
      newDeal(
        ({ data }) => {
          commit("SET_NEW_DEAL", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
    getDetailHouse: ({ commit }, aptCode) => {
      const params = {
        aptCode: aptCode,
      };
      detailHouse(
        params,
        ({ data }) => {
          commit("SET_DETAIL_HOUSE", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

export default houseStore;
