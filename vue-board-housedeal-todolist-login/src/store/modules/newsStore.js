import { listArticle } from "@/api/news.js";

const newsStore = {
  namespaced: true,
  state: {
    articles: [],
  },
  getters: {},
  mutations: {
    SET_ARTICLE_LIST: (state, articles) => {
      state.articles = articles;
    },
  },
  actions: {
    getArticleList: ({ commit }) => {
      let param = {
        pg: 1,
        spp: 20,
        key: null,
        word: null,
      };
      listArticle(
        param,
        ({ data }) => {
          console.log("뉴스");
          commit("SET_ARTICLE_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
    },
  },
};

export default newsStore;
