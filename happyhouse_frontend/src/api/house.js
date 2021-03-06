// import { apiInstance, houseInstance } from "./index.js";
import { apiInstance } from "./index.js";

const api = apiInstance();
// const house = houseInstance();

function sidoList(success, fail) {
  api.get(`/map/sido`).then(success).catch(fail);
}

function gugunList(params, success, fail) {
  api.get(`/map/gugun`, { params: params }).then(success).catch(fail);
}

function dongList(params, success, fail) {
  api.get(`/map/dong`, { params: params }).then(success).catch(fail);
}

function houseList(params, success, fail) {
  api.get(`/map/apt`, { params: params }).then(success).catch(fail);
}

function countUpHouse(aptcode, success, fail) {
  api.get(`/map/hit/${aptcode}`).then(success).catch(fail);
}

function popularHouse(success, fail) {
  api.get(`/map/popular`).then(success).catch(fail);
}

function dealList(params, success, fail) {
  api.get(`/map/deal`, { params: params }).then(success).catch(fail);
}

function newDeal(success, fail) {
  api.get(`/map/new`).then(success).catch(fail);
}

function detailHouse(params, success, fail) {
  api.get(`/map/detail`, { params: params }).then(success).catch(fail);
}

export {
  sidoList,
  gugunList,
  dongList,
  houseList,
  countUpHouse,
  popularHouse,
  dealList,
  newDeal,
  detailHouse,
};
