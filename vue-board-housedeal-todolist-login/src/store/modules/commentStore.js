/* eslint-disable */

import {
  getCommentList,
  writeComment,
  getComment,
  deleteComment,
  modifyComment,
} from "@/api/comment.js";

const commentStore = {
  namespaced: true,
  state: {
    comments: [],
    comment: null,
  },
  getters: {},
  mutations: {
    SET_COMMENT_LIST: (state, comments) => {
      state.comments = comments;
    },

    SET_COMMENT: (state, commment) => {
      state.comment = commment;
    },
  },
  actions: {
    getCommentList: ({ commit }, articleno) => {
      // console.log("com" + articleno);
      // console.log("actions");
      getCommentList(
        articleno,
        ({ data }) => {
          commit("SET_COMMENT_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
      // http
      //   .get(`/comment/${articleno}`)
      //   .then(({ data }) => {
      //     commit("SET_COMMENT_LIST", data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    writeComment: (context, comment) => {
      writeComment(comment, ({ data }) => {
        let msg = "등록 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "등록이 완료되었습니다.";
        }
        alert(msg);
      });
      // http.post("/comment", comment).then(({ data }) => {
      //   let msg = "등록 처리시 문제가 발생했습니다.";
      //   if (data === "success") {
      //     msg = "등록이 완료되었습니다.";
      //   }
      //   alert(msg);
      // });
    },

    getComment: ({ commit }, commentno) => {
      getComment(
        commentno,
        ({ data }) => {
          commit("SET_COMMENT", data);
        },
        (error) => {
          console.log(error);
        }
      );
      // http
      //   .get(`/comment/get/${commentno}`)
      //   .then(({ data }) => {
      //     commit("SET_COMMENT", data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },

    deleteComment: (context, commentno) => {
      deleteComment(commentno, ({ data }) => {
        let msg = "삭제 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "삭제가 완료되었습니다.";
        }
        alert(msg);
      });
      // http.delete(`/comment/${commentno}`).then(({ data }) => {
      //   let msg = "삭제 처리시 문제가 발생했습니다.";
      //   if (data === "success") {
      //     msg = "삭제가 완료되었습니다.";
      //   }
      //   alert(msg);
      // });
    },

    modifyComment: (context, comment) => {
      modifyComment(comment, ({ data }) => {
        let msg = "수정 처리시 문제가 발생했습니다.";
        if (data === "success") {
          msg = "수정이 완료되었습니다.";
        }
        alert(msg);
      });
      // http.put("/comment", comment).then(({ data }) => {
      //   let msg = "수정 처리시 문제가 발생했습니다.";
      //   if (data === "success") {
      //     msg = "수정이 완료되었습니다.";
      //   }
      //   alert(msg);
      // });
    },
  },
};

export default commentStore;
