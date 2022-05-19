import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

function getMember(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  api.get(`/user/${userid}`).then(success).catch(fail);
}

async function findById(userid, success, fail) {
  api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
  await api.get(`/user/info/${userid}`).then(success).catch(fail);
}

async function deleteMember(userid, success, fail) {
  await api.delete(`/user/${userid}`).then(success).catch(fail);
}

async function modifyMember(user, success, fail) {
  api
    .put(`/user/${user.userid}`, JSON.stringify(user))
    .then(success)
    .catch(fail);
}

async function joinMember(user, success, fail) {
  api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

// function logout(success, fail)

export { login, getMember, findById, deleteMember, modifyMember, joinMember };
