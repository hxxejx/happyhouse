import {
  listArticle,
  // writeArticle,
  // getArticle,
  // modifyArticle,
  // deleteArticle,
  searchArticleByNo,
  searchArticleBySubject,
  countUpArticle,
} from "@/api/board.js";

const boardStore = {
  namespaced: true,
  state: {
    articles: [],
    // article: null,
    page: 1,
  },
  getters: {},
  mutations: {
    SET_ARTICLE_LIST: (state, articles) => {
      state.articles = articles;
    },
    SET_ARTICLE_PAGE: (state, currentPage) => {
      state.page = currentPage;
    },
    // SET_ARTICLE: (state, article) => {
    //   state.article = article;
    // },
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
          commit("SET_ARTICLE_LIST", data);
        },
        (error) => {
          console.log(error);
          // eslint-disable-next-line
        },
      );

      // http
      //   .get("/board")
      //   .then(({ data }) => {
      //     commit("SET_ARTICLE_LIST", data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    // writeArticle: (context, article) => {
    //   writeArticle(article, ({ data }) => {
    //     let msg = "등록 처리시 문제가 발생했습니다.";
    //     if (data === "success") {
    //       msg = "등록이 완료되었습니다.";
    //     }
    //     alert(msg);
    //   });
    //   // http.post("/board", article).then(({ data }) => {
    //   //   let msg = "등록 처리시 문제가 발생했습니다.";
    //   //   if (data === "success") {
    //   //     msg = "등록이 완료되었습니다.";
    //   //   }
    //   //   alert(msg);
    //   // });
    // },

    // getArticle: ({ commit }, articleno) => {
    //   getArticle(
    //     articleno,
    //     ({ data }) => {
    //       commit("SET_ARTICLE", data);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // http
    //   .get(`/board/${articleno}`)
    //   .then(({ data }) => {
    //     commit("SET_ARTICLE", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // },

    // modifyArticle: (context, article) => {
    //   modifyArticle(article, ({ data }) => {
    //     let msg = "수정 처리시 문제가 발생했습니다.";
    //     if (data === "success") {
    //       msg = "수정이 완료되었습니다.";
    //     }
    //     alert(msg);
    //   });
    // http.put(`/board/${article.articleno}`, article).then(({ data }) => {
    //   let msg = "수정 처리시 문제가 발생했습니다.";
    //   if (data === "success") {
    //     msg = "수정이 완료되었습니다.";
    //   }
    //   alert(msg);
    // });
    // },

    searchArticleByNo: ({ commit }, word) => {
      searchArticleByNo(
        word,
        ({ data }) => {
          commit("SET_ARTICLE_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
      // http
      //   .get(`/board/search/no/${word}`)
      //   .then(({ data }) => {
      //     commit("SET_ARTICLE_LIST", data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    searchArticleBySubject: ({ commit }, word) => {
      searchArticleBySubject(
        word,
        ({ data }) => {
          commit("SET_ARTICLE_LIST", data);
        },
        (error) => {
          console.log(error);
        },
      );
      // http
      //   .get(`/board/search/subject/${word}`)
      //   .then(({ data }) => {
      //     commit("SET_ARTICLE_LIST", data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    // deleteArticle(context, articleno) {
    //   http.delete(`/board/${articleno}`).then(({ data }) => {
    //     let msg = "삭제 처리시 문제가 발생했습니다.";
    //     if (data === "success") {
    //       msg = "삭제가 완료되었습니다.";
    //     }
    //     alert(msg);
    //   });
    // },
    countUpArticle: (context, articleno) => {
      countUpArticle(articleno, ({ data }) => {
        let msg = "조회수 에러 발생";
        if (data === "success") {
          msg = "조회수 증가 완료";
        }
        console.log(msg);
      });
    },
  },
};

export default boardStore;
