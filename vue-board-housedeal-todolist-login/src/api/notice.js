import { apiInstance } from "./index.js";

const api = apiInstance();

function listArticle(param, success, fail) {
  api.get(`/notice`, { params: param }).then(success).catch(fail);
}

function writeArticle(article, success, fail) {
  api.post(`/notice`, JSON.stringify(article)).then(success).catch(fail);
}

function getArticle(articleno, success, fail) {
  api.get(`/notice/${articleno}`).then(success).catch(fail);
}

function modifyArticle(article, success, fail) {
  api
    .put(`/notice/${article.articleno}`, JSON.stringify(article))
    .then(success)
    .catch(fail);
}

function deleteArticle(articleno, success, fail) {
  api.delete(`/notice/${articleno}`).then(success).catch(fail);
}

function searchArticleByNo(word, success, fail) {
  api.get(`/notice/search/no/${word}`).then(success).catch(fail);
}

function searchArticleBySubject(word, success, fail) {
  api.get(`/notice/search/subject/${word}`).then(success).catch(fail);
}

function countUpArticle(articleno, success, fail) {
  api.get(`/notice/hit/${articleno}`).then(success).catch(fail);
}

export {
  listArticle,
  writeArticle,
  getArticle,
  modifyArticle,
  deleteArticle,
  searchArticleByNo,
  searchArticleBySubject,
  countUpArticle,
};
