"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[751],{87751:function(e,r,s){s.r(r),s.d(r,{default:function(){return m}});var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("b-container",{staticClass:"bv-example-row mt-3"},[s("b-row",[s("b-col",[s("b-alert",{attrs:{show:""}},[s("h3",[e._v("회원 정보 수정")])])],1)],1),s("member-input-item",{attrs:{type:"modify"}})],1)},u=[],i=s(69423),a={name:"MemberUpdate",components:{MemberInputItem:i.Z}},o=a,n=s(1001),l=(0,n.Z)(o,t,u,!1,null,null,null),m=l.exports},69423:function(e,r,s){s.d(r,{Z:function(){return c}});var t=function(){var e=this,r=e.$createElement,s=e._self._c||r;return s("b-row",{staticClass:"mb-1"},[s("b-col",{staticStyle:{"text-align":"left"}},[s("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[s("b-form-group",{attrs:{id:"userid-group",label:"아이디:","label-for":"userid"}},["modify"===this.type?s("b-form-input",{attrs:{id:"userid",disabled:"",type:"text",required:"",placeholder:"아이디를 입력하세요"},model:{value:e.user.userid,callback:function(r){e.$set(e.user,"userid",r)},expression:"user.userid"}}):s("b-form-input",{attrs:{id:"userid",type:"text",required:"",placeholder:"아이디를 입력하세요"},model:{value:e.user.userid,callback:function(r){e.$set(e.user,"userid",r)},expression:"user.userid"}})],1),s("b-form-group",{attrs:{id:"userpwd-group",label:"비밀번호:","label-for":"userpwd"}},[s("b-form-input",{attrs:{id:"userpwd",type:"password",required:"",placeholder:"비밀번호를 입력하세요"},model:{value:e.user.userpwd,callback:function(r){e.$set(e.user,"userpwd",r)},expression:"user.userpwd"}})],1),s("b-form-group",{attrs:{id:"userpwd-group",label:"이름:","label-for":"username"}},[s("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"이름을 입력하세요"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}})],1),s("b-form-group",{attrs:{id:"userpwd-group",label:"이메일:","label-for":"email"}},[s("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"이메일을 입력하세요"},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}})],1),"join"===this.type?s("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("가입")]):s("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("수정")]),s("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[e._v("취소")])],1)],1)],1)},u=[],i=s(93019),a=s(73508),o=s(34665),n="memberStore",l={name:"MemberInputItem",data:function(){return{user:{userid:"",userpwd:"",username:"",email:""}}},props:{type:{type:String}},computed:(0,i.Z)({},(0,o.rn)(n,["userInfo"])),created:function(){var e=this;"modify"===this.type&&((0,a.qC)(this.userInfo.userid,(function(r){var s=r.data;e.user=s.userInfo}),(function(e){console.log(e)})),this.isUserid=!0)},methods:(0,i.Z)((0,i.Z)({},(0,o.OI)(n,["SET_USER_INFO"])),{},{onSubmit:function(e){e.preventDefault();var r=!0,s="";!this.user.userid&&(s="아이디를 입력해주세요",r=!1,this.$refs.userid.focus()),r&&!this.user.userpwd&&(s="비밀번호를 입력해주세요",r=!1,this.$refs.userpwd.focus()),r&&!this.user.username&&(s="이름을 입력해주세요",r=!1,this.$refs.username.focus()),r&&!this.user.email&&(s="이메일을 입력해주세요",r=!1,this.$refs.email.focus()),r?"join"===this.type?this.registMember():this.modifyMember():alert(s)},onReset:function(e){e.preventDefault(),this.user.userid="",this.user.userpwd="",this.user.username="",this.user.email="","modify"===this.type?this.$router.push({name:"mypage"}):this.$router.push({name:"home"})},registMember:function(){var e=this;(0,a.C$)({userid:this.user.userid,userpwd:this.user.userpwd,username:this.user.username,email:this.user.email},(function(r){var s=r.data,t="가입시 문제가 발생했습니다.";"success"===s&&(t="가입이 완료되었습니다."),alert(t),e.goHome()}),(function(e){console.log(e)}))},modifyMember:function(){var e=this;(0,a.hS)({userid:this.user.userid,userpwd:this.user.userpwd,username:this.user.username,email:this.user.email},(function(r){var s=r.data,t="수정 처리시 문제가 발생했습니다.";"success"===s&&(t="수정이 완료되었습니다.",(0,a.qC)(e.userInfo.userid,(function(r){var s=r.data;e.SET_USER_INFO(s.userInfo)}),(function(e){console.log(e)}))),alert(t),e.$router.push({name:"mypage"})}),(function(e){console.log(e)}))},goHome:function(){this.$router.push({name:"home"})}})},m=l,d=s(1001),p=(0,d.Z)(m,t,u,!1,null,null,null),c=p.exports}}]);
//# sourceMappingURL=751-legacy.0bda8277.js.map