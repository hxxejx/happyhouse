"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[677],{96677:function(t,e,r){r.r(e),r.d(e,{default:function(){return l}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("board-input-item",{attrs:{type:"modify"}})],1)},s=[],n=r(22476),o={name:"BoardModify",components:{BoardInputItem:n.Z}},a=o,c=r(1001),u=(0,c.Z)(a,i,s,!1,null,null,null),l=u.exports},22476:function(t,e,r){r.d(e,{Z:function(){return f}});var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-row",{staticClass:"mb-1"},[r("b-col",{staticStyle:{"text-align":"left"}},[r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"userid-group",label:"작성자:","label-for":"userid",description:"작성자를 입력하세요."}},[r("b-form-input",{attrs:{id:"userid",disabled:"",type:"text",required:"",placeholder:"작성자 입력..."},model:{value:t.article.userid,callback:function(e){t.$set(t.article,"userid",e)},expression:"article.userid"}})],1),r("b-form-group",{attrs:{id:"subject-group",label:"제목:","label-for":"subject",description:"제목을 입력하세요."}},[r("b-form-input",{attrs:{id:"subject",type:"text",required:"",placeholder:"제목 입력..."},model:{value:t.article.subject,callback:function(e){t.$set(t.article,"subject",e)},expression:"article.subject"}})],1),r("b-form-group",{attrs:{id:"content-group",label:"내용:","label-for":"content"}},[r("b-form-textarea",{attrs:{id:"content",placeholder:"내용 입력...",rows:"10","max-rows":"15"},model:{value:t.article.content,callback:function(e){t.$set(t.article,"content",e)},expression:"article.content"}})],1),"register"===this.type?r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("작성")]):r("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[t._v("수정")]),r("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[t._v("취소")])],1)],1)],1)},s=[],n=r(93019),o=r(12164),a=r(34665),c="memberStore",u={name:"BoardInputItem",data:function(){return{article:{articleno:0,userid:"",subject:"",content:""}}},props:{type:{type:String}},computed:(0,n.Z)({},(0,a.rn)(c,["userInfo"])),created:function(){var t=this;"modify"===this.type?((0,o.fq)(this.$route.params.articleno,(function(e){var r=e.data;t.article=r}),(function(t){console.log(t)})),this.isUserid=!0):this.article.userid=this.userInfo.userid},methods:{onSubmit:function(t){t.preventDefault();var e=!0,r="";!this.article.userid&&(r="작성자 입력해주세요",e=!1,this.$refs.userid.focus()),e&&!this.article.subject&&(r="제목 입력해주세요",e=!1,this.$refs.subject.focus()),e&&!this.article.content&&(r="내용 입력해주세요",e=!1,this.$refs.content.focus()),e?"register"===this.type?this.registArticle():this.modifyArticle():alert(r)},onReset:function(t){t.preventDefault(),this.article.articleno=0,this.article.subject="",this.article.content="",this.$router.back()},registArticle:function(){var t=this;(0,o.hY)({userid:this.article.userid,subject:this.article.subject,content:this.article.content},(function(e){var r=e.data,i="등록 에러 발생";"success"===r&&(i="등록 완료"),console.log(i),t.moveList()}),(function(t){console.log(t)}))},modifyArticle:function(){var t=this;(0,o.cn)({articleno:this.article.articleno,userid:this.article.userid,subject:this.article.subject,content:this.article.content},(function(e){var r=e.data,i="수정 에러 발생";"success"===r&&(i="수정 완료"),console.log(i),t.$router.push({name:"boardList"})}),(function(t){console.log(t)}))},moveList:function(){this.$router.push({name:"boardList"})}}},l=u,b=r(1001),d=(0,b.Z)(l,i,s,!1,null,null,null),f=d.exports}}]);
//# sourceMappingURL=677-legacy.7d88a05b.js.map