"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[921],{4921:function(e,s,r){r.r(s),r.d(s,{default:function(){return m}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",[r("b-col",[r("b-alert",{attrs:{variant:"secondary",show:""}},[r("h3",[e._v("회원가입")])])],1)],1),r("member-input-item",{attrs:{type:"join"}})],1)},u=[],i=r(9423),a={name:"JoinMember",components:{MemberInputItem:i.Z}},o=a,l=r(1001),n=(0,l.Z)(o,t,u,!1,null,null,null),m=n.exports},9423:function(e,s,r){r.d(s,{Z:function(){return p}});var t=function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("b-row",{staticClass:"mb-1"},[r("b-col",{staticStyle:{"text-align":"left"}},[r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"userid-group",label:"아이디:","label-for":"userid"}},["modify"===this.type?r("b-form-input",{attrs:{id:"userid",disabled:"",type:"text",required:"",placeholder:"아이디를 입력하세요"},model:{value:e.user.userid,callback:function(s){e.$set(e.user,"userid",s)},expression:"user.userid"}}):r("b-form-input",{attrs:{id:"userid",type:"text",required:"",placeholder:"아이디를 입력하세요"},model:{value:e.user.userid,callback:function(s){e.$set(e.user,"userid",s)},expression:"user.userid"}})],1),r("b-form-group",{attrs:{id:"userpwd-group",label:"비밀번호:","label-for":"userpwd"}},[r("b-form-input",{attrs:{id:"userpwd",type:"password",required:"",placeholder:"비밀번호를 입력하세요"},model:{value:e.user.userpwd,callback:function(s){e.$set(e.user,"userpwd",s)},expression:"user.userpwd"}})],1),r("b-form-group",{attrs:{id:"userpwd-group",label:"이름:","label-for":"username"}},[r("b-form-input",{attrs:{id:"username",type:"text",required:"",placeholder:"이름을 입력하세요"},model:{value:e.user.username,callback:function(s){e.$set(e.user,"username",s)},expression:"user.username"}})],1),r("b-form-group",{attrs:{id:"userpwd-group",label:"이메일:","label-for":"email"}},[r("b-form-input",{attrs:{id:"email",type:"text",required:"",placeholder:"이메일을 입력하세요"},model:{value:e.user.email,callback:function(s){e.$set(e.user,"email",s)},expression:"user.email"}})],1),"join"===this.type?r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("가입")]):r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("수정")]),r("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[e._v("취소")])],1)],1)],1)},u=[],i=r(3508),a=r(4665);const o="memberStore";var l={name:"MemberInputItem",data(){return{user:{userid:"",userpwd:"",username:"",email:""}}},props:{type:{type:String}},computed:{...(0,a.rn)(o,["userInfo"])},created(){"modify"===this.type&&((0,i.qC)(this.userInfo.userid,(({data:e})=>{this.user=e.userInfo}),(e=>{console.log(e)})),this.isUserid=!0)},methods:{...(0,a.OI)(o,["SET_USER_INFO"]),onSubmit(e){e.preventDefault();let s=!0,r="";!this.user.userid&&(r="아이디를 입력해주세요",s=!1,this.$refs.userid.focus()),s&&!this.user.userpwd&&(r="비밀번호를 입력해주세요",s=!1,this.$refs.userpwd.focus()),s&&!this.user.username&&(r="이름을 입력해주세요",s=!1,this.$refs.username.focus()),s&&!this.user.email&&(r="이메일을 입력해주세요",s=!1,this.$refs.email.focus()),s?"join"===this.type?this.registMember():this.modifyMember():alert(r)},onReset(e){e.preventDefault(),this.user.userid="",this.user.userpwd="",this.user.username="",this.user.email="","modify"===this.type?this.$router.push({name:"mypage"}):this.$router.push({name:"home"})},registMember(){(0,i.C$)({userid:this.user.userid,userpwd:this.user.userpwd,username:this.user.username,email:this.user.email},(({data:e})=>{let s="가입시 문제가 발생했습니다.";"success"===e&&(s="가입이 완료되었습니다."),alert(s),this.goHome()}),(e=>{console.log(e)}))},modifyMember(){(0,i.hS)({userid:this.user.userid,userpwd:this.user.userpwd,username:this.user.username,email:this.user.email},(({data:e})=>{let s="수정 처리시 문제가 발생했습니다.";"success"===e&&(s="수정이 완료되었습니다.",(0,i.qC)(this.userInfo.userid,(({data:e})=>{this.SET_USER_INFO(e.userInfo)}),(e=>{console.log(e)}))),alert(s),this.$router.push({name:"mypage"})}),(e=>{console.log(e)}))},goHome(){this.$router.push({name:"home"})}}},n=l,m=r(1001),d=(0,m.Z)(n,t,u,!1,null,null,null),p=d.exports}}]);
//# sourceMappingURL=921.15c0c85b.js.map