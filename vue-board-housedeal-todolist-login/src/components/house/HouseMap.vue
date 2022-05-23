<template>
  <div>
    <b-row>
      <b-col>
        <b-button variant="outline-dark" @click="searchPlaces('공원')"
          ><b-icon icon="bicycle" /> 공원</b-button
        ></b-col
      >
      <b-col>
        <b-button variant="outline-dark" @click="searchPlaces('어린이집')"
          ><b-icon icon="people-fill" /> 어린이집</b-button
        >
      </b-col>
      <b-col
        ><b-button variant="outline-dark" @click="searchPlaces('반찬가게')"
          ><b-icon icon="shop" /> 반찬 가게</b-button
        ></b-col
      >
      <b-col>
        <b-button variant="outline-dark" @click="searchPlaces('장난감도서관')"
          ><b-icon icon="joystick" /> 장난감도서관</b-button
        >
      </b-col>
      <b-col>
        <b-button variant="outline-dark" @click="searchPlaces('병원')"
          ><b-icon icon="building" /> 병원</b-button
        >
      </b-col>
    </b-row>
    <div class="map_wrap">
      <div
        id="map"
        style="width: 100%; height: 100%; position: relative; overflow: hidden"
      ></div>

      <div id="menu_wrap" class="bg_white">
        <ul id="placesList"></ul>
        <div id="pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";
let keyword = "";

export default {
  name: "HouseMap",
  data() {
    return {
      map: null,
      positions: [],
      markers: [],
      // 추가
      ps: null,
      infowindow: null,
      search_markers: [],
      // keyword: "",
      // overlay: null,
    };
  },
  // -----------------------------------------------추가 시작----------------------------------------------- // -----------------------------------------------추가 끝-----------------------------------------------
  methods: {
    initMap() {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new kakao.maps.LatLng(35.20527, 126.81138), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      // -----------------------------------------------추가 시작-----------------------------------------------
      // 마커를 클릭했을 때 해당 장소의 상세정보를 보여줄 커스텀오버레이입니다
      // 장소 검색 객체를 생성합니다
      this.ps = new kakao.maps.services.Places();
      this.search_markers = [];
      // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
      this.infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
      // 키워드로 장소를 검색합니다
      // this.searchPlaces();
      // -----------------------------------------------추가 끝-----------------------------------------------
      this.setPositions();
    },
    setPositions() {
      this.positions = [...this.houses];
      // console.log("HMP" + this.positions);
      // console.log(this.positions[0].lat);
      if (this.positions.length > 0) {
        this.displayMarkers(this.positions);
      }
    },
    displayMarkers(positions) {
      // 현재 등록된 마커 제거
      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          item.setMap(null);
        });
      }
      // 마커 이미지 커스터마이징
      const imgSrc = require("@/assets/marker_red.png");
      const imgSize = new kakao.maps.Size(35, 35);
      const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);
      // 마커 표시
      positions.forEach((position) => {
        const marker = new kakao.maps.Marker({
          map: this.map,
          // position: position.latlng, // 마커 위치
          position: new kakao.maps.LatLng(position.lat, position.lng), // 마커 위치
          title: position.aptName, // 마우스 오버 표시 제목
          image: markerImage, // 마커이미지
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });
        this.markers.push(marker);
        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div>${position.aptName}</div>`, // 인포윈도우에 표시할 내용
        });
        // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
        // 이벤트 리스너로는 클로저를 만들어 등록합니다
        // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
        kakao.maps.event.addListener(
          marker,
          "mouseover",
          this.makeOverListener(this.map, marker, infowindow),
        );
        kakao.maps.event.addListener(
          marker,
          "mouseout",
          this.makeOutListener(infowindow),
        );
        // 마커에 클릭이벤트를 등록합니다
        kakao.maps.event.addListener(marker, "click", function () {
          // 마커 위에 인포윈도우를 표시합니다
          // infowindow.open(this.map, marker);
        });
        // 지도 이동
        // 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과값}, 초기값);
        const bounds = positions.reduce(
          (bounds, position) =>
            bounds.extend(new kakao.maps.LatLng(position.lat, position.lng)),
          new kakao.maps.LatLngBounds(),
        );
        this.map.setBounds(bounds);
        var self = this;
        // 커스텀 오버레이에 표시할 컨텐츠 입니다
        // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
        // 별도의 이벤트 메소드를 제공하지 않습니다
        // var content = `<div class="wrap">
        //       <div class="info">
        //           <div class="title">
        //               카카오 스페이스닷원
        //               <div class="close" onclick="closeOverlay()" title="닫기"></div>
        //           </div>
        //           <div class="body">
        //               <div class="img">
        //                   <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">
        //               </div>
        //               <div class="desc">
        //                   <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>
        //                   <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>
        //                   <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>
        //               </div>
        //           </div>
        //       </div>
        //   </div>`;
        var content = document.createElement("div");
        content.className = "wrap overlay-off";
        var info = document.createElement("div");
        info.className = "info";
        var title = document.createElement("div");
        title.className = "title";
        title.innerHTML = position.aptName;
        // console.log("position", position);
        var close = document.createElement("div");
        close.className = "close";
        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다
        close.addEventListener("click", function () {
          overlay.setMap(null);
        });
        close.title = "닫기";
        var body = document.createElement("div");
        body.className = "body";
        var img = document.createElement("div");
        img.className = "img";
        var src = document.createElement("img");
        src.src =
          "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='12' height='12'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath d='M21 21H3a1 1 0 0 1-1-1v-7.513a1 1 0 0 1 .343-.754L6 8.544V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zM9 19h3v-6.058L8 9.454l-4 3.488V19h3v-4h2v4zm5 0h6V5H8v2.127c.234 0 .469.082.657.247l5 4.359a1 1 0 0 1 .343.754V19zm2-8h2v2h-2v-2zm0 4h2v2h-2v-2zm0-8h2v2h-2V7zm-4 0h2v2h-2V7z'/%3E%3C/svg%3E";
        src.width = 73;
        src.height = 70;
        var desc = document.createElement("div");
        desc.className = "desc";
        var ellipsis = document.createElement("div");
        ellipsis.className = "ellipsis";
        ellipsis.innerHTML = `${position.sidoName} ${position.gugunName} ${position.dongName}`;
        var jibun = document.createElement("div");
        jibun.className = "jibun ellipsis";
        jibun.innerHTML = `(지번) ${position.dongName} ${position.jibun}</br>(최근거래가)${position.recentPrice}만원`;
        content.appendChild(info);
        info.appendChild(title);
        info.appendChild(body);
        title.appendChild(close);
        body.appendChild(img);
        img.appendChild(src);
        body.appendChild(desc);
        desc.appendChild(ellipsis);
        desc.appendChild(jibun);
        // 마커 위에 커스텀오버레이를 표시합니다
        // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
        var overlay = new kakao.maps.CustomOverlay({
          content: content,
          map: this.map,
          position: marker.getPosition(),
          zIndex: 1,
        });
        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        // kakao.maps.event.addListener(marker, "click", function () {
        //   self.overlay.setMap(self.map);
        // });
        // var content = document.createElement("div");
        // content.className = "overlay-off";
        // content.innerHTML = position.aptName;
        // var closeBtn = document.createElement("button");
        // closeBtn.innerHTML = "닫기";
        // closeBtn.onclick = function () {
        //   overlay.setMap(null);
        // };
        // content.appendChild(closeBtn);
        overlay.setContent(content);
        kakao.maps.event.addListener(marker, "click", function () {
          overlay.setMap(self.map);
          content.className = "wrap overlay-on";
        });
      });
    },
    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    },
    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    },
    // closeOverlay() {
    //   overlay.setMap(null);
    // },
    // -----------------------------------------------추가 시작-----------------------------------------------
    // 키워드 검색을 요청하는 함수입니다
    searchPlaces(data) {
      if (this.address + " " + data == keyword) {
        this.removeAll();
      }
      // var keyword = document.getElementById("keyword").value;
      else {
        keyword = this.address + " " + data;
        if (!keyword.replace(/^\s+|\s+$/g, "")) {
          alert("키워드를 입력해주세요!");
          return false;
        }
        // 장소검색 객체를 통해 키워드로 장소검색을 요청합니다
        this.ps.keywordSearch(keyword, this.placesSearchCB);
      }
    },
    // 장소검색이 완료됐을 때 호출되는 콜백함수 입니다
    placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        // 정상적으로 검색이 완료됐으면
        // 검색 목록과 마커를 표출합니다
        this.displayPlaces(data);
        // 페이지 번호를 표출합니다
        this.displayPagination(pagination);
      } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert("검색 결과가 존재하지 않습니다.");
        return;
      } else if (status === kakao.maps.services.Status.ERROR) {
        alert("검색 결과 중 오류가 발생했습니다.");
        return;
      }
    },
    // 검색 결과 목록과 마커를 표출하는 함수입니다
    displayPlaces(places) {
      var listEl = document.getElementById("placesList"),
        menuEl = document.getElementById("menu_wrap"),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds(),
        // eslint-disable-next-line
        listStr = "";
      // 검색 결과 목록에 추가된 항목들을 제거합니다
      this.removeAllChildNods(listEl);
      // 지도에 표시되고 있는 마커를 제거합니다
      this.removeMarker();
      var self = this;
      for (var i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시합니다
        var placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
          marker = this.addMarker(placePosition, i),
          itemEl = this.getListItem(i, places[i]); // 검색 결과 항목 Element를 생성합니다
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        bounds.extend(placePosition);
        // 마커와 검색결과 항목에 mouseover 했을때
        // 해당 장소에 인포윈도우에 장소명을 표시합니다
        // mouseout 했을 때는 인포윈도우를 닫습니다
        (function (marker, title) {
          kakao.maps.event.addListener(marker, "mouseover", function () {
            self.displayInfowindow(marker, title);
          });
          kakao.maps.event.addListener(marker, "mouseout", function () {
            self.infowindow.close();
          });
          itemEl.onmouseover = function () {
            self.displayInfowindow(marker, title);
          };
          itemEl.onmouseout = function () {
            self.infowindow.close();
          };
        })(marker, places[i].place_name);
        fragment.appendChild(itemEl);
      }
      // 검색결과 항목들을 검색결과 목록 Element에 추가합니다
      listEl.appendChild(fragment);
      menuEl.scrollTop = 0;
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      this.map.setBounds(bounds);
    },
    // 검색결과 항목을 Element로 반환하는 함수입니다
    getListItem(index, places) {
      var el = document.createElement("li"),
        itemStr =
          '<span class="markerbg marker_' +
          (index + 1) +
          '"></span>' +
          '<div class="info">' +
          "   <h5>" +
          places.place_name +
          "</h5>";
      if (places.road_address_name) {
        itemStr +=
          "    <span>" +
          places.road_address_name +
          "</span>" +
          '   <span class="jibun gray">' +
          places.address_name +
          "</span>";
      } else {
        itemStr += "    <span>" + places.address_name + "</span>";
      }
      itemStr += '  <span class="tel">' + places.phone + "</span>" + "</div>";
      el.innerHTML = itemStr;
      el.className = "item";
      return el;
    },
    // 마커를 생성하고 지도 위에 마커를 표시하는 함수입니다
    // eslint-disable-next-line
    addMarker(position, idx, title) {
      var imageSrc =
          "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png", // 마커 이미지 url, 스프라이트 이미지를 씁니다
        imageSize = new kakao.maps.Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
          spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
          spriteOrigin: new kakao.maps.Point(0, idx * 46 + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
          offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },
        markerImage = new kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imgOptions,
        ),
        marker = new kakao.maps.Marker({
          position: position, // 마커의 위치
          image: markerImage,
        });
      marker.setMap(this.map); // 지도 위에 마커를 표출합니다
      this.search_markers.push(marker); // 배열에 생성된 마커를 추가합니다
      return marker;
    },
    // 지도 위에 표시되고 있는 마커를 모두 제거합니다
    removeMarker() {
      for (var i = 0; i < this.search_markers.length; i++) {
        this.search_markers[i].setMap(null);
      }
      this.search_markers = [];
    },
    // 검색결과 목록 하단에 페이지번호를 표시는 함수입니다
    displayPagination(pagination) {
      var paginationEl = document.getElementById("pagination"),
        fragment = document.createDocumentFragment(),
        i;
      // 기존에 추가된 페이지번호를 삭제합니다
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }
      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement("a");
        el.href = "#";
        el.innerHTML = i;
        if (i === pagination.current) {
          el.className = "on";
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i);
            };
          })(i);
        }
        fragment.appendChild(el);
      }
      paginationEl.appendChild(fragment);
    },
    // 검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
    // 인포윈도우에 장소명을 표시합니다
    displayInfowindow(marker, title) {
      var content = '<div style="padding:5px;z-index:1;">' + title + "</div>";
      this.infowindow.setContent(content);
      this.infowindow.open(this.map, marker);
    },
    // 검색결과 목록의 자식 Element를 제거하는 함수입니다
    removeAllChildNods(el) {
      while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
      }
    },
    removeAll() {
      keyword = "";
      this.removeMarker();
      var listEl = document.getElementById("placesList");
      this.removeAllChildNods(listEl);
      var paginationEl = document.getElementById("pagination");
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
      }
    },
    // -----------------------------------------------추가 끝-----------------------------------------------
  },
  computed: {
    ...mapState(houseStore, ["houses", "address"]),
  },
  watch: {
    houses: function () {
      this.setPositions();
      this.removeAll();
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_API_KEY}&libraries=services`;
      /* global kakao */
      script.addEventListener("load", () => {
        console.log("loaded", window.kakao);
        kakao.maps.load(this.initMap);
      });
      document.head.appendChild(script);
    } else {
      console.log("이미 로딩됨: ", window.kakao);
      this.initMap();
    }
  },
};
</script>

<style>
/* .overlay-on {
  background-color: white;
} */
.overlay-off {
  display: none;
}
.wrap {
  position: absolute;
  left: -142px;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  line-height: 1.5;
}
.wrap * {
  padding: 0;
  margin: 0;
}
.wrap .info {
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;
}
.wrap .info:nth-child(1) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.info .title {
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 14px;
  font-weight: bold;
}
.info .close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png");
}
.info .close:hover {
  cursor: pointer;
}
.info .body {
  position: relative;
  overflow: hidden;
}
.info .desc {
  position: relative;
  margin: 13px 0 0 90px;
  height: 75px;
}
.desc .ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.desc .jibun {
  font-size: 11px;
  color: #888;
  margin-top: -2px;
}
.info .img {
  position: absolute;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  color: #888;
  overflow: hidden;
}
.info:after {
  content: "";
  position: absolute;
  margin-left: -12px;
  left: 50%;
  bottom: 0;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.info .link {
  color: #5085bb;
}
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 12px;
}
.map_wrap a,
.map_wrap a:hover,
.map_wrap a:active {
  color: #000;
  text-decoration: none;
}
.map_wrap {
  position: relative;
  width: 100%;
  height: 500px;
}
#menu_wrap {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 250px;
  margin: 10px 0 30px 10px;
  padding: 5px;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
  font-size: 12px;
  border-radius: 10px;
}
.bg_white {
  background: #fff;
}
#menu_wrap hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 2px solid #5f5f5f;
  margin: 3px 0;
}
#menu_wrap .option {
  text-align: center;
}
#menu_wrap .option p {
  margin: 10px 0;
}
#menu_wrap .option button {
  margin-left: 5px;
}
#placesList li {
  list-style: none;
}
#placesList .item {
  position: relative;
  border-bottom: 1px solid #888;
  overflow: hidden;
  cursor: pointer;
  min-height: 65px;
}
#placesList .item span {
  display: block;
  margin-top: 4px;
}
#placesList .item h5,
#placesList .item .info {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
#placesList .item .info {
  padding: 10px 0 10px 55px;
}
#placesList .info .gray {
  color: #8a8a8a;
}
#placesList .info .jibun {
  padding-left: 26px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png)
    no-repeat;
}
#placesList .info .tel {
  color: #009900;
}
#placesList .item .markerbg {
  float: left;
  position: absolute;
  width: 36px;
  height: 37px;
  margin: 10px 0 0 10px;
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png)
    no-repeat;
}
#placesList .item .marker_1 {
  background-position: 0 -10px;
}
#placesList .item .marker_2 {
  background-position: 0 -56px;
}
#placesList .item .marker_3 {
  background-position: 0 -102px;
}
#placesList .item .marker_4 {
  background-position: 0 -148px;
}
#placesList .item .marker_5 {
  background-position: 0 -194px;
}
#placesList .item .marker_6 {
  background-position: 0 -240px;
}
#placesList .item .marker_7 {
  background-position: 0 -286px;
}
#placesList .item .marker_8 {
  background-position: 0 -332px;
}
#placesList .item .marker_9 {
  background-position: 0 -378px;
}
#placesList .item .marker_10 {
  background-position: 0 -423px;
}
#placesList .item .marker_11 {
  background-position: 0 -470px;
}
#placesList .item .marker_12 {
  background-position: 0 -516px;
}
#placesList .item .marker_13 {
  background-position: 0 -562px;
}
#placesList .item .marker_14 {
  background-position: 0 -608px;
}
#placesList .item .marker_15 {
  background-position: 0 -654px;
}
#pagination {
  margin: 10px auto;
  text-align: center;
}
#pagination a {
  display: inline-block;
  margin-right: 10px;
}
#pagination .on {
  font-weight: bold;
  cursor: default;
  color: #777;
}
</style>
