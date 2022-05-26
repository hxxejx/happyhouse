"use strict";(self["webpackChunkvue_board_bootstrap"]=self["webpackChunkvue_board_bootstrap"]||[]).push([[606],{606:function(e,t,a){a.r(t),a.d(t,{default:function(){return V}});var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{staticClass:"bv-example-row mt-3 text-center"},[a("h3",{staticClass:"underline-orange"},[a("b-icon",{attrs:{icon:"house"}}),e._v(" HOUSE SERVICE ")],1),a("b-row",[a("b-col",[a("house-search-bar")],1)],1),a("b-row",[a("b-col",[a("house-map")],1)],1),a("b-row",[a("b-col",{attrs:{cols:"6",align:"left"}},[a("house-list")],1),a("b-col",{attrs:{cols:"6"}},[a("house-detail")],1)],1)],1)},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-row",{staticClass:"mt-4 mb-4 text-center"},[a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{id:"selectSido",options:e.sidos},on:{change:e.gugunList},model:{value:e.sidoCode,callback:function(t){e.sidoCode=t},expression:"sidoCode"}})],1),a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{id:"selectGugun",options:e.guguns},on:{change:e.dongList},model:{value:e.gugunCode,callback:function(t){e.gugunCode=t},expression:"gugunCode"}})],1),a("b-col",{staticClass:"sm-3"},[a("b-form-select",{attrs:{id:"selectDong",options:e.dongs},on:{change:e.searchApt},model:{value:e.dongCode,callback:function(t){e.dongCode=t},expression:"dongCode"}})],1)],1)},i=[],r=a(4665);const l="houseStore";var d={name:"HouseSearchBar",data(){return{sidoCode:null,gugunCode:null,dongCode:null,sido:"",gugun:"",dong:""}},computed:{...(0,r.rn)(l,["sidos","guguns","dongs","houses"])},created(){this.CLEAR_SIDO_LIST(),this.getSido(),this.sido="",this.gugun="",this.dong=""},methods:{...(0,r.nv)(l,["getSido","getGugun","getDong","getHouseList"]),...(0,r.OI)(l,["CLEAR_SIDO_LIST","CLEAR_GUGUN_LIST","CLEAR_DONG_LIST","SET_HOUSE_ADDRESS","CLEAR_DETAIL_HOUSE","CLEAR_HOUSE_LIST","CLEAR_DETAIL_HOUSE","CLEAR_HOUSE_ADDRESS"]),gugunList(){var e=document.getElementById("selectSido");this.sido=e.options[e.selectedIndex].text+" ",this.CLEAR_GUGUN_LIST(),this.CLEAR_DONG_LIST(),this.CLEAR_HOUSE_LIST(),this.CLEAR_DETAIL_HOUSE(),this.CLEAR_HOUSE_ADDRESS(),this.gugunCode=null,this.dongCode=null,this.sidoCode&&this.getGugun(this.sidoCode)},dongList(){var e=document.getElementById("selectGugun");this.gugun=e.options[e.selectedIndex].text+" ",this.CLEAR_DONG_LIST(),this.CLEAR_HOUSE_LIST(),this.CLEAR_DETAIL_HOUSE(),this.CLEAR_HOUSE_ADDRESS(),this.dongCode=null,this.gugunCode&&this.getDong(this.gugunCode)},searchApt(){var e=document.getElementById("selectDong");this.dong=e.options[e.selectedIndex].text;var t=this.sido+this.gugun+this.dong;this.SET_HOUSE_ADDRESS(t),this.CLEAR_DETAIL_HOUSE(),this.dongCode&&this.getHouseList(this.dongCode)}}},c=d,h=a(1001),m=(0,h.Z)(c,o,i,!1,null,null,null),u=m.exports,p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.houses&&0!=e.houses.length?a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{staticClass:"text-center",attrs:{show:""}},[e._v("아파트 목록")])],1)],1),a("b-row",[a("b-col",[a("b-table",{attrs:{hover:"",responsive:"",borderless:"",id:"list-item",items:e.houses,fields:e.fields,"per-page":e.perPage,"current-page":e.currentPage,role:"button"},on:{"row-clicked":e.selectHouse},scopedSlots:e._u([{key:"cell(subject)",fn:function(t){return[e._v(" "+e._s(t.item.aptName)+" ")]}}],null,!1,2746262672)})],1)],1),a("div",{staticClass:"overflow-auto"},[a("b-pagination",{attrs:{"total-rows":e.rows,"per-page":e.perPage,"aria-controls":"list-item",align:"center"},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1):a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{staticClass:"text-center",attrs:{show:""}},[e._v("아파트 목록이 없습니다.")])],1)],1)],1)},v=[];const g="houseStore";var C={name:"HouseList",components:{},data(){return{perPage:10,currentPage:1,fields:[{key:"aptName",label:"아파트 이름",thStyle:{display:"none"}}]}},methods:{...(0,r.nv)(g,["detailHouse","getDealList"]),...(0,r.nv)(g,["countUpHouse"]),selectHouse(e){this.detailHouse(e),this.getDealList(e.aptCode),this.countUp(e.aptCode)},countUp(e){this.countUpHouse(e)}},computed:{...(0,r.rn)(g,["houses"]),rows(){return this.houses.length}},watch:{houses:function(){this.currentPage=1}}},_=C,w=(0,h.Z)(_,p,v,!1,null,null,null),E=w.exports,k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.house&&0!=e.house.length?a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{staticClass:"text-center",attrs:{show:""}},[e._v("아파트 정보")])],1)],1),a("b-row",{staticClass:"mb-3"},[a("b-col",[a("h3",[e._v(e._s(e.house.aptName))])])],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"secondary"}},[e._v("아파트 코드 : "+e._s(e.house.aptCode))])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"primary"}},[e._v("도로명 주소 : "+e._s(e.house.sidoName)+" "+e._s(e.house.gugunName)+" "+e._s(e.house.roadName)+" "+e._s(e._f("jusoBonbun")(e.house.roadNameBonbun))+e._s(e._f("jusoBubun")(e.house.roadNameBubun)))])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"info"}},[e._v("지번 : "+e._s(e.house.sidoName)+" "+e._s(e.house.gugunName)+" "+e._s(e.house.dongName)+" "+e._s(e.house.jibun))])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"success"}},[e._v("건축 연도 : "+e._s(e.house.buildYear))])],1)],1),a("b-row",[a("b-col",[a("b-alert",{attrs:{show:"",variant:"warning"}},[e._v("최근 거래 금액 : "+e._s(e.house.recentPrice)+"만원 ")])],1)],1),a("deal-list",{attrs:{deals:e.deals}})],1):a("b-container",{staticClass:"bv-example-row mt-3"},[a("b-row",[a("b-col",[a("b-alert",{staticClass:"text-center",attrs:{show:""}},[e._v("선택된 아파트가 없습니다.")])],1)],1)],1)},L=[],b=a(1314);const f="houseStore";var S={name:"HouseDetail",computed:{...(0,r.rn)(f,["house","deals"])},filters:{price(e){return e?e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e},jusoBonbun(e){let t=e.toString(),a="";for(const s of t)"0"!==s&&(a+=s);return a},jusoBubun(e){let t=e.toString(),a="-";for(const s of t)"0"!==s&&(a+=s);return 1===a.length&&(a=""),a}},components:{DealList:b.Z}},H=S,A=(0,h.Z)(H,k,L,!1,null,null,null),I=A.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-row",{directives:[{name:"show",rawName:"v-show",value:!e.addressIn,expression:"!addressIn"}],staticClass:"mb-3"},e._l(e.buttons,(function(t,s){return a("b-col",{key:s},[a("b-button",{attrs:{pressed:t.state,variant:"outline-dark"},on:{"update:pressed":function(a){return e.$set(t,"state",a)},click:function(a){return e.searchPlaces(t.caption)}}},[a("b-icon",{attrs:{icon:t.icon}}),e._v(" "+e._s(t.caption))],1)],1)})),1),a("div",{staticClass:"map_wrap"},[a("div",{staticStyle:{width:"100%",height:"100%",position:"relative",overflow:"hidden"},attrs:{id:"map"}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.searchCheck,expression:"searchCheck"}],staticClass:"bg_white",attrs:{id:"menu_wrap"}},[a("ul",{attrs:{id:"placesList"}}),a("div",{attrs:{id:"pagination"}})])])],1)},x=[];a(6699);const y="houseStore";let M="";var D={name:"HouseMap",data(){return{map:null,positions:[],markers:[],ps:null,infowindow:null,search_markers:[],addressIn:!0,searchCheck:!1,buttons:[{caption:"공원",state:!1,icon:"bicycle"},{caption:"어린이집",state:!1,icon:"people"},{caption:"반찬가게",state:!1,icon:"shop"},{caption:"장난감도서관",state:!1,icon:"joystick"},{caption:"병원",state:!1,icon:"building"}]}},methods:{...(0,r.nv)(y,["getDealList"]),...(0,r.OI)(y,["SET_DETAIL_HOUSE"]),initMap(){const e=document.getElementById("map"),t={center:new kakao.maps.LatLng(37.56667,126.978513),level:3};this.map=new kakao.maps.Map(e,t),this.ps=new kakao.maps.services.Places,this.search_markers=[],this.infowindow=new kakao.maps.InfoWindow({zIndex:1}),this.setPositions()},setPositions(){this.positions=[...this.houses],this.positions.length>0&&this.displayMarkers(this.positions)},displayMarkers(e){this.markers.length>0&&this.markers.forEach((e=>{e.setMap(null)}));const t=a(5253),s=new kakao.maps.Size(40,40),n=new kakao.maps.MarkerImage(t,s);e.forEach((t=>{const a=new kakao.maps.Marker({map:this.map,position:new kakao.maps.LatLng(t.lat,t.lng),title:t.aptName,image:n,clickable:!0});this.markers.push(a);const s=e.reduce(((e,t)=>e.extend(new kakao.maps.LatLng(t.lat,t.lng))),new kakao.maps.LatLngBounds);this.map.setBounds(s);var o=this,i=document.createElement("div");i.className="wrap overlay-off";var r=document.createElement("div");r.className="info";var l=document.createElement("div");l.className="title",l.innerHTML=t.aptName;var d=document.createElement("div");d.className="body";var c=document.createElement("div");c.className="img";var h=document.createElement("img");h.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z'/%3E%3C/svg%3E",h.width=73,h.height=70;var m=document.createElement("div");m.className="desc";var u=document.createElement("div");u.className="ellipsis",u.innerHTML=`${t.sidoName} ${t.gugunName} ${t.dongName}`;var p=document.createElement("div");p.className="jibun ellipsis",p.innerHTML=`(지번) ${t.dongName} ${t.jibun}</br>(최근거래가)${t.recentPrice}만원`,i.appendChild(r),r.appendChild(l),r.appendChild(d),d.appendChild(c),c.appendChild(h),d.appendChild(m),m.appendChild(u),m.appendChild(p);var v=new kakao.maps.CustomOverlay({content:i,map:this.map,position:a.getPosition(),zIndex:1});v.setContent(i),kakao.maps.event.addListener(a,"mouseover",(function(){v.setMap(o.map),i.className="wrap overlay-on"})),kakao.maps.event.addListener(a,"mouseout",(function(){i.className="wrap overlay-off"})),kakao.maps.event.addListener(a,"click",(function(){o.SET_DETAIL_HOUSE(t),o.getDealList(t.aptCode)}))}))},searchPlaces(e){if(this.address+" "+e==M)this.removeAll(),this.searchCheck=!1;else{if(M=this.address+" "+e,!M.replace(/^\s+|\s+$/g,""))return alert("키워드를 입력해주세요!"),!1;this.searchCheck=!0,this.ps.keywordSearch(M,this.placesSearchCB)}for(let t of this.buttons)t.caption!==e&&(t.state=!1)},placesSearchCB(e,t,a){if(t===kakao.maps.services.Status.OK)this.displayPlaces(e),this.displayPagination(a);else{if(t===kakao.maps.services.Status.ZERO_RESULT){alert("검색 결과가 존재하지 않습니다."),this.searchCheck=!1,this.removeMarker();for(let e of this.buttons)e.state=!1;return}if(t===kakao.maps.services.Status.ERROR)return void alert("검색 결과 중 오류가 발생했습니다.")}},displayPlaces(e){var t=document.getElementById("placesList"),a=document.getElementById("menu_wrap"),s=document.createDocumentFragment(),n=new kakao.maps.LatLngBounds;this.removeAllChildNods(t),this.removeMarker();for(var o=0;o<e.length;o++){var i=new kakao.maps.LatLng(e[o].y,e[o].x),r=this.addMarker(i,o),l=this.getListItem(o,e[o]),d=this.setCustomOverlay(r,e[o]);n.extend(i),function(e){l.onmouseover=function(){e.className="wrap overlay-on"},l.onmouseout=function(){e.className="wrap overlay-off"}}(d),s.appendChild(l)}t.appendChild(s),a.scrollTop=0,this.map.setBounds(n)},setCustomOverlay(e,t){var a=document.createElement("div");a.className="wrap overlay-off";var s=document.createElement("div");s.className="info";var n=document.createElement("div");n.className="title",n.innerHTML=t.place_name;var o=document.createElement("div");o.className="body";var i=document.createElement("div");i.className="img";var r=document.createElement("img");t.category_name.includes("공원")?r.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M5.5 21a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm13 2a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-7.477-8.695L13 12v6h-2v-5l-2.719-2.266A2 2 0 0 1 8 7.671l2.828-2.828a2 2 0 0 1 2.829 0l1.414 1.414a6.969 6.969 0 0 0 3.917 1.975l-.01 2.015a8.962 8.962 0 0 1-5.321-2.575l-2.634 2.633zM16 5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/%3E%3C/svg%3E":t.category_name.includes("어린이집")?r.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M20 20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9H1l10.327-9.388a1 1 0 0 1 1.346 0L23 11h-3v9zm-2-1V9.157l-6-5.454-6 5.454V19h12zm-6-2l-3.359-3.359a2.25 2.25 0 1 1 3.182-3.182l.177.177.177-.177a2.25 2.25 0 1 1 3.182 3.182L12 17z'/%3E%3C/svg%3E":t.category_name.includes("반찬")?r.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 13.242V20h1v2H2v-2h1v-6.758A4.496 4.496 0 0 1 1 9.5c0-.827.224-1.624.633-2.303L4.345 2.5a1 1 0 0 1 .866-.5H18.79a1 1 0 0 1 .866.5l2.702 4.682A4.496 4.496 0 0 1 21 13.242zm-2 .73a4.496 4.496 0 0 1-3.75-1.36A4.496 4.496 0 0 1 12 14.001a4.496 4.496 0 0 1-3.25-1.387A4.496 4.496 0 0 1 5 13.973V20h14v-6.027zM5.789 4L3.356 8.213a2.5 2.5 0 0 0 4.466 2.216c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 0 0 4.644 0c.335-.837 1.52-.837 1.856 0a2.5 2.5 0 1 0 4.457-2.232L18.21 4H5.79z'/%3E%3C/svg%3E":t.category_name.includes("장난감")?r.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm0 2H7a4 4 0 0 0-3.995 3.8L3 10v4a4 4 0 0 0 3.8 3.995L7 18h10a4 4 0 0 0 3.995-3.8L21 14v-4a4 4 0 0 0-3.8-3.995L17 6zm-7 3v2h2v2H9.999L10 15H8l-.001-2H6v-2h2V9h2zm8 4v2h-2v-2h2zm-2-4v2h-2V9h2z'/%3E%3C/svg%3E":t.category_name.includes("병원")&&(r.src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M8 20v-6h8v6h3V4H5v16h3zm2 0h4v-4h-4v4zm11 0h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v17zM11 8V6h2v2h2v2h-2v2h-2v-2H9V8h2z'/%3E%3C/svg%3E"),r.width=73,r.height=70;var l=document.createElement("div");l.className="desc";var d=document.createElement("div");d.className="ellipsis",d.innerHTML=`${t.address_name}`;var c=document.createElement("div");c.className="jibun ellipsis",c.innerHTML=`${t.road_address_name}</br>${t.phone}`,a.appendChild(s),s.appendChild(n),s.appendChild(o),o.appendChild(i),i.appendChild(r),o.appendChild(l),l.appendChild(d),l.appendChild(c);var h=new kakao.maps.LatLng(t.y,t.x),m=new kakao.maps.CustomOverlay({content:a,map:this.map,position:h,zIndex:1});return m.setMap(this.map),kakao.maps.event.addListener(e,"mouseover",(function(){a.className="wrap overlay-on"})),kakao.maps.event.addListener(e,"mouseout",(function(){a.className="wrap overlay-off"})),a},getListItem(e,t){var a=document.createElement("li"),s='<span class="markerbg marker_'+(e+1)+'"></span><div class="search-info">   <h5>'+t.place_name+"</h5>";return t.road_address_name?s+="    <span>"+t.road_address_name+'</span>   <span class="jibun gray">'+t.address_name+"</span>":s+="    <span>"+t.address_name+"</span>",s+='  <span class="tel">'+t.phone+"</span></div>",a.innerHTML=s,a.className="item",a},addMarker(e,t,a){var s="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png",n=new kakao.maps.Size(36,37),o={spriteSize:new kakao.maps.Size(36,691),spriteOrigin:new kakao.maps.Point(0,46*t+10),offset:new kakao.maps.Point(13,37)},i=new kakao.maps.MarkerImage(s,n,o),r=new kakao.maps.Marker({position:e,image:i});return r.setMap(this.map),this.search_markers.push(r),r},removeMarker(){for(var e=0;e<this.search_markers.length;e++)this.search_markers[e].setMap(null);this.search_markers=[]},removeAPTMarker(){for(var e=0;e<this.markers.length;e++)this.markers[e].setMap(null);this.markers=[]},displayPagination(e){var t,a=document.getElementById("pagination"),s=document.createDocumentFragment(),n=document.getElementsByClassName("wrap");for(const i of n)i.className="wrap overlay-off";while(a.hasChildNodes())a.removeChild(a.lastChild);for(t=1;t<=e.last;t++){var o=document.createElement("a");o.href="#",o.innerHTML=t,t===e.current?o.className="on":o.onclick=function(t){return function(){e.gotoPage(t)}}(t),s.appendChild(o)}a.appendChild(s)},displayInfowindow(e,t){var a='<div style="padding:5px;z-index:1;">'+t+"</div>";this.infowindow.setContent(a),this.infowindow.open(this.map,e)},removeAllChildNods(e){while(e.hasChildNodes())e.removeChild(e.lastChild)},removeAll(){M="",this.removeMarker();var e=document.getElementById("placesList");this.removeAllChildNods(e);var t=document.getElementById("pagination");while(t.hasChildNodes())t.removeChild(t.lastChild)}},computed:{...(0,r.rn)(y,["houses","address"])},watch:{houses:function(){this.removeAPTMarker(),this.setPositions(),this.removeAll(),this.searchCheck=!1,this.removeMarker();for(let e of this.buttons)e.state=!1},address:function(){this.addressIn=!1,this.address.length<=0&&(this.addressIn=!0)}},mounted(){if(window.kakao&&window.kakao.maps)this.initMap();else{const e=document.createElement("script");e.src="//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=81e1c0a4a784906fb5e07fd84b305cca&libraries=services",e.addEventListener("load",(()=>{kakao.maps.load(this.initMap)})),document.head.appendChild(e)}}},R=D,T=(0,h.Z)(R,N,x,!1,null,null,null),z=T.exports;const O="houseStore";var U={name:"HouseView",components:{HouseSearchBar:u,HouseList:E,HouseDetail:I,HouseMap:z},methods:{...(0,r.OI)(O,["CLEAR_SIDO_LIST","CLEAR_GUGUN_LIST","CLEAR_DONG_LIST","CLEAR_HOUSE_LIST","CLEAR_DETAIL_HOUSE","CLEAR_HOUSE_ADDRESS"])},created(){this.CLEAR_SIDO_LIST(),this.CLEAR_GUGUN_LIST(),this.CLEAR_DONG_LIST(),this.CLEAR_HOUSE_LIST(),this.CLEAR_DETAIL_HOUSE(),this.CLEAR_HOUSE_ADDRESS()}},B=U,P=(0,h.Z)(B,s,n,!1,null,"8643a12c",null),V=P.exports},5253:function(e,t,a){e.exports=a.p+"img/marker_red.5c066c6a.png"}}]);
//# sourceMappingURL=606.baec4238.js.map