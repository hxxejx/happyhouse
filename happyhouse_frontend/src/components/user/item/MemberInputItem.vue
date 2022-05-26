<template>
  <b-row class="mb-1">
    <b-col style="text-align: left">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group id="userid-group" label="아이디:" label-for="userid">
          <b-form-input
            id="userid"
            v-if="this.type === 'modify'"
            disabled
            v-model="user.userid"
            type="text"
            required
            placeholder="아이디를 입력하세요"
          ></b-form-input>
          <b-form-input
            id="userid"
            v-else
            v-model="user.userid"
            type="text"
            required
            placeholder="아이디를 입력하세요"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="userpwd-group" label="비밀번호:" label-for="userpwd">
          <b-form-input
            id="userpwd"
            v-model="user.userpwd"
            type="password"
            required
            placeholder="비밀번호를 입력하세요"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="userpwd-group" label="이름:" label-for="username">
          <b-form-input
            id="username"
            v-model="user.username"
            type="text"
            required
            placeholder="이름을 입력하세요"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="userpwd-group" label="이메일:" label-for="email">
          <b-form-input
            id="email"
            v-model="user.email"
            type="text"
            required
            placeholder="이메일을 입력하세요"
          ></b-form-input>
        </b-form-group>

        <b-button
          type="submit"
          variant="primary"
          class="m-1"
          v-if="this.type === 'join'"
          >가입</b-button
        >
        <b-button type="submit" variant="primary" class="m-1" v-else
          >수정</b-button
        >
        <b-button type="reset" variant="danger" class="m-1">취소</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>
/* eslint-disable */
import { joinMember, findById, updateMember } from "@/api/member";
import { mapState, mapMutations } from "vuex";

const memberStore = "memberStore";

export default {
  name: "MemberInputItem",
  data() {
    return {
      user: {
        userid: "",
        userpwd: "",
        username: "",
        email: "",
      },
    };
  },
  props: {
    type: { type: String },
  },
  computed: {
    ...mapState(memberStore, ["userInfo"]),
  },
  created() {
    if (this.type === "modify") {
      findById(
        this.userInfo.userid,
        ({ data }) => {
          this.user = data.userInfo;
        },
        (error) => {
          console.log(error);
        },
      );
      this.isUserid = true;
    }
  },
  methods: {
    ...mapMutations(memberStore, ["SET_USER_INFO"]),
    onSubmit(event) {
      event.preventDefault();

      let err = true;
      let msg = "";
      !this.user.userid &&
        ((msg = "아이디를 입력해주세요"),
        (err = false),
        this.$refs.userid.focus());
      err &&
        !this.user.userpwd &&
        ((msg = "비밀번호를 입력해주세요"),
        (err = false),
        this.$refs.userpwd.focus());
      err &&
        !this.user.username &&
        ((msg = "이름을 입력해주세요"),
        (err = false),
        this.$refs.username.focus());
      err &&
        !this.user.email &&
        ((msg = "이메일을 입력해주세요"),
        (err = false),
        this.$refs.email.focus());

      if (!err) alert(msg);
      else this.type === "join" ? this.registMember() : this.modifyMember();
    },
    onReset(event) {
      event.preventDefault();
      this.user.userid = "";
      this.user.userpwd = "";
      this.user.username = "";
      this.user.email = "";
      if (this.type === "modify") {
        this.$router.push({ name: "mypage" });
      } else {
        this.$router.push({ name: "home" });
      }
    },
    registMember() {
      joinMember(
        {
          userid: this.user.userid,
          userpwd: this.user.userpwd,
          username: this.user.username,
          email: this.user.email,
        },
        ({ data }) => {
          let msg = "가입시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "가입이 완료되었습니다.";
          }
          alert(msg);
          this.goHome();
        },
        (error) => {
          console.log(error);
        },
      );
    },
    modifyMember() {
      updateMember(
        {
          userid: this.user.userid,
          userpwd: this.user.userpwd,
          username: this.user.username,
          email: this.user.email,
        },
        ({ data }) => {
          let msg = "수정 처리시 문제가 발생했습니다.";
          if (data === "success") {
            msg = "수정이 완료되었습니다.";
            findById(
              this.userInfo.userid,
              ({ data }) => {
                this.SET_USER_INFO(data.userInfo);
              },
              (error) => {
                console.log(error);
              },
            );
          }
          alert(msg);
          this.$router.push({ name: "mypage" });
        },
        (error) => {
          console.log(error);
        },
      );
    },
    goHome() {
      this.$router.push({ name: "home" });
    },
  },
};
</script>

<style></style>
