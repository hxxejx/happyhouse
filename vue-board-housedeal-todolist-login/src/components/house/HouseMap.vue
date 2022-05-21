<template>
  <div>
    <!-- <h1>카카오 맵 테스트</h1> -->
    <!-- <div id="map"></div> -->
    <div class="map_wrap">
      <div
        id="map"
        style="width: 100%; height: 100%; position: relative; overflow: hidden"
      ></div>
      <ul id="category">
        <li id="BK9" data-order="0">
          <span class="category_bg bank"></span>
          은행
        </li>
        <li id="MT1" data-order="1">
          <span class="category_bg mart"></span>
          마트
        </li>
        <li id="PM9" data-order="2">
          <span class="category_bg pharmacy"></span>
          약국
        </li>
        <li id="OL7" data-order="3">
          <span class="category_bg oil"></span>
          주유소
        </li>
        <li id="CE7" data-order="4">
          <span class="category_bg cafe"></span>
          카페
        </li>
        <li id="CS2" data-order="5">
          <span class="category_bg store"></span>
          편의점
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const houseStore = "houseStore";

export default {
  name: "HouseMap",
  data() {
    return {
      map: null,
      positions: [],
      markers: [],
    };
  },
  methods: {
    initMap() {
      const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
        level: 3, //지도의 레벨(확대, 축소 정도)
      };
      this.map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      this.setPositions();
    },
    setPositions() {
      // this.positions = [
      //   {
      //     title: "카카오",
      //     latlng: new kakao.maps.LatLng(33.450705, 126.570677),
      //   },
      //   {
      //     title: "생태연못",
      //     latlng: new kakao.maps.LatLng(33.450936, 126.569477),
      //   },
      //   {
      //     title: "텃밭",
      //     latlng: new kakao.maps.LatLng(33.450879, 126.56994),
      //   },
      //   {
      //     title: "근린공원",
      //     latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      //   },
      // ];
      this.positions = [...this.houses];
      console.log("HMP" + this.positions);
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
      // const imgSrc=require("@/assets/.png");
      // const imgSize = new kakao.maps.Size(24, 35);
      // const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize);

      // 마커 표시
      positions.forEach((position) => {
        const marker = new kakao.maps.Marker({
          map: this.map,
          // position: position.latlng, // 마커 위치
          position: new kakao.maps.LatLng(position.lat, position.lng), // 마커 위치
          title: position.aptName, // 마우스 오버 표시 제목
          // image:markerImage, // 마커이미지
          clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
        });
        this.markers.push(marker);

        // 마커에 표시할 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: `<div>아파트명: ${position.aptName}</div>`, // 인포윈도우에 표시할 내용
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
      });

      // 지도 이동
      // 배열.reduce((누적값, 현재값, 인덱스, 요소) => {return 결과값}, 초기값);
      const bounds = positions.reduce(
        (bounds, position) =>
          bounds.extend(new kakao.maps.LatLng(position.lat, position.lng)),
        new kakao.maps.LatLngBounds(),
      );
      this.map.setBounds(bounds);
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
  },
  computed: {
    ...mapState(houseStore, ["houses"]),
  },
  watch: {
    houses: function () {
      this.setPositions();
    },
  },
  mounted() {
    if (!window.kakao || !window.kakao.maps) {
      const script = document.createElement("script");
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${process.env.VUE_APP_KAKAO_MAP_API_KEY}`;
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

<style scoped>
/* #map {
  width: 100%;
  height: 400px;
} */
.map_wrap,
.map_wrap * {
  margin: 0;
  padding: 0;
  font-family: "Malgun Gothic", dotum, "돋움", sans-serif;
  font-size: 12px;
}
.map_wrap {
  position: relative;
  width: 100%;
  height: 500px;
}
#category {
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 5px;
  border: 1px solid #909090;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.4);
  background: #fff;
  overflow: hidden;
  z-index: 2;
}
#category li {
  float: left;
  list-style: none;
  width: 50px;
  border-right: 1px solid #acacac;
  padding: 6px 0;
  text-align: center;
  cursor: pointer;
}
#category li.on {
  background: #eee;
}
#category li:hover {
  background: #ffe6e6;
  border-left: 1px solid #acacac;
  margin-left: -1px;
}
#category li:last-child {
  margin-right: 0;
  border-right: 0;
}
#category li span {
  display: block;
  margin: 0 auto 3px;
  width: 27px;
  height: 28px;
}
#category li .category_bg {
  background: url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_category.png)
    no-repeat;
}
#category li .bank {
  background-position: -10px 0;
}
#category li .mart {
  background-position: -10px -36px;
}
#category li .pharmacy {
  background-position: -10px -72px;
}
#category li .oil {
  background-position: -10px -108px;
}
#category li .cafe {
  background-position: -10px -144px;
}
#category li .store {
  background-position: -10px -180px;
}
#category li.on .category_bg {
  background-position-x: -46px;
}
.placeinfo_wrap {
  position: absolute;
  bottom: 28px;
  left: -150px;
  width: 300px;
}
.placeinfo {
  position: relative;
  width: 100%;
  border-radius: 6px;
  border: 1px solid #ccc;
  border-bottom: 2px solid #ddd;
  padding-bottom: 10px;
  background: #fff;
}
.placeinfo:nth-of-type(n) {
  border: 0;
  box-shadow: 0px 1px 2px #888;
}
.placeinfo_wrap .after {
  content: "";
  position: relative;
  margin-left: -12px;
  left: 50%;
  width: 22px;
  height: 12px;
  background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
}
.placeinfo a,
.placeinfo a:hover,
.placeinfo a:active {
  color: #fff;
  text-decoration: none;
}
.placeinfo a,
.placeinfo span {
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.placeinfo span {
  margin: 5px 5px 0 5px;
  cursor: default;
  font-size: 13px;
}
.placeinfo .title {
  font-weight: bold;
  font-size: 14px;
  border-radius: 6px 6px 0 0;
  margin: -1px -1px 0 -1px;
  padding: 10px;
  color: #fff;
  background: #d95050;
  background: #d95050
    url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
    no-repeat right 14px center;
}
.placeinfo .tel {
  color: #0f7833;
}
.placeinfo .jibun {
  color: #999;
  font-size: 11px;
  margin-top: 0;
}
</style>
