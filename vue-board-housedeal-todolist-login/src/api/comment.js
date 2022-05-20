import { apiInstance } from "./index.js";

const api = apiInstance();

function getCommentList(check, articleno, success, fail) {
  api.get(`/comment/${check}/${articleno}`).then(success).catch(fail);
}

function writeComment(comment, success, fail) {
  api.post("/comment", comment).then(success).catch(fail);
}

function getComment(commentno, success, fail) {
  api.get(`/comment/get/${commentno}`).then(success).catch(fail);
}

function deleteComment(commentno, success, fail) {
  api.delete(`/comment/${commentno}`).then(success).catch(fail);
}

function modifyComment(comment, success, fail) {
  api.put("/comment", comment).then(success).catch(fail);
}

export {
  getCommentList,
  writeComment,
  getComment,
  deleteComment,
  modifyComment,
};
