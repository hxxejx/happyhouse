"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[915],{7915:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"bv-example-row mt-3"},[r("b-row",{staticClass:"mb-1"},[r("b-col",{staticClass:"text-right"},[r("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){return e.moveWrite()}}},[e._v("작성")])],1)],1),r("b-row",[e.articles.length?r("b-col",[r("b-table",{attrs:{hover:"",responsive:"",id:"list-item","head-variant":"light",items:e.articles,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage,role:"button"},on:{"row-clicked":e.goDetail},scopedSlots:e._u([{key:"cell(subject)",fn:function(t){return[t.item.comment>0?r("span",{staticClass:"badge badge-success mt-1"},[e._v("답변완료")]):r("span",{staticClass:"badge badge-secondary mt-1"},[e._v("답변대기")]),e._v(" "+e._s(t.item.subject)+" ")]}},{key:"cell(regtime)",fn:function(t){return[e._v(" "+e._s(e._f("dateFormat")(t.item.regtime))+" ")]}}],null,!1,1852571958)})],1):e._e()],1),r("board-search"),r("div",{staticClass:"overflow-auto"},[r("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"list-item",align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)},s=[],o=r(4665),l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-row",{staticClass:"mb-1"},[r("b-col",[r("b-input-group",{scopedSlots:e._u([{key:"prepend",fn:function(){return[r("b-form-select",{attrs:{options:e.options},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})]},proxy:!0}])},[r("b-form-input",{attrs:{placeholder:"검색어 입력"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.beforeSearch.apply(null,arguments)}},model:{value:e.word,callback:function(t){e.word="string"===typeof t?t.trim():t},expression:"word"}}),r("b-button",{attrs:{variant:"outline-success"},on:{click:e.beforeSearch}},[e._v(" 검색")])],1)],1)],1)},i=[];const n="boardStore";var c={name:"BoardSearch",data(){return{selected:"articleno",options:[{value:"articleno",text:"글 번호"},{value:"subject",text:"제목"}],word:""}},methods:{...(0,o.nv)(n,["getArticleList","searchArticleByNo","searchArticleBySubject"]),beforeSearch(){0==this.word.length?(alert("입력된 검색어가 없어서 전체 목록을 조회합니다."),this.getArticleList()):"articleno"==this.selected?isNaN(this.word)?alert("글 번호를 입력해주세요."):this.searchByNo():"subject"==this.selected&&this.searchBySubject()},searchByNo(){this.searchArticleByNo(this.word)},searchBySubject(){this.searchArticleBySubject(this.word)}}},u=c,d=r(1001),b=(0,d.Z)(u,l,i,!1,null,null,null),h=b.exports,p=r(7133),m=r.n(p);const g="boardStore";var f={name:"BoardList",components:{BoardSearch:h},data(){return{perPage:10,currentPage:1,fields:[{key:"articleno",label:"글번호"},{key:"subject",label:"제목"},{key:"hit",label:"조회수"},{key:"userid",label:"작성자"},{key:"regtime",label:"작성일"}]}},created(){this.getArticleList(),this.currentPage=this.page},destroyed(){this.SET_ARTICLE_PAGE(1)},computed:{...(0,o.rn)(g,["articles","page"]),rows(){return this.articles.length}},methods:{...(0,o.nv)(g,["getArticleList"]),...(0,o.OI)(g,["SET_ARTICLE_PAGE"]),moveWrite(){this.$router.push({name:"boardRegister"})},goDetail(e){this.SET_ARTICLE_PAGE(this.currentPage),this.$router.push({name:"boardDetail",params:{articleno:e.articleno}})}},filters:{dateFormat(e){return m()(new Date(e)).format("YY.MM.DD")}}},v=f,y=(0,d.Z)(v,a,s,!1,null,null,null),_=y.exports}}]);
//# sourceMappingURL=915.4e705783.js.map