"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[555],{6555:function(e,r,t){t.r(r),t.d(r,{default:function(){return d}});var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("b-container",{staticClass:"bv-example-row mt-3"},[t("b-row",[t("b-col",[t("b-alert",{attrs:{variant:"secondary",show:""}},[t("h3",[e._v("로그인")])])],1)],1),t("b-row",[t("b-col"),t("b-col",{attrs:{cols:"8"}},[t("b-card",{staticClass:"text-center mt-3",staticStyle:{"max-width":"40rem"},attrs:{align:"left"}},[t("b-form",{staticClass:"text-left"},[e.isLoginError?t("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("아이디 또는 비밀번호를 확인하세요.")]):e._e(),t("b-form-group",{attrs:{label:"아이디:","label-for":"userid"}},[t("b-form-input",{attrs:{id:"userid",required:"",placeholder:"아이디 입력...."},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.confirm.apply(null,arguments)}},model:{value:e.user.userid,callback:function(r){e.$set(e.user,"userid",r)},expression:"user.userid"}})],1),t("b-form-group",{attrs:{label:"비밀번호:","label-for":"userpwd"}},[t("b-form-input",{attrs:{type:"password",id:"userpwd",required:"",placeholder:"비밀번호 입력...."},on:{keyup:function(r){return!r.type.indexOf("key")&&e._k(r.keyCode,"enter",13,r.key,"Enter")?null:e.confirm.apply(null,arguments)}},model:{value:e.user.userpwd,callback:function(r){e.$set(e.user,"userpwd",r)},expression:"user.userpwd"}})],1),t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"primary"},on:{click:e.confirm}},[e._v("로그인")]),e._v(" 아이디가 없으신가요? "),t("b-button",{staticClass:"m-1",attrs:{type:"button",variant:"success"},on:{click:e.movePage}},[e._v("회원가입")])],1)],1)],1),t("b-col")],1)],1)},s=[],o=t(16198),a=t(93019),u=(t(78975),t(34665)),i="memberStore",l={name:"MemberLogin",data:function(){return{user:{userid:null,userpwd:null}}},computed:(0,a.Z)({},(0,u.rn)(i,["isLogin","isLoginError"])),methods:(0,a.Z)((0,a.Z)({},(0,u.nv)(i,["userConfirm","getUserInfo"])),{},{confirm:function(){var e=this;return(0,o.Z)(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.userConfirm(e.user);case 2:if(t=sessionStorage.getItem("access-token"),!e.isLogin){r.next=7;break}return r.next=6,e.getUserInfo(t);case 6:e.$router.push({name:"home"});case 7:case"end":return r.stop()}}),r)})))()},movePage:function(){this.$router.push({name:"signUp"})}})},c=l,p=t(1001),b=(0,p.Z)(c,n,s,!1,null,null,null),d=b.exports}}]);
//# sourceMappingURL=555-legacy.0d2d781e.js.map