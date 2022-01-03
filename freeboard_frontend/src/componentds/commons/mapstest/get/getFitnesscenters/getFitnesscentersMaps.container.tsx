import { useEffect, useState } from "react";
import GetFitnesscentersMapsPageUI from "./getFitnesscentersMaps.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

const GetFitnesscentersMapsPage = () => {
  // const [getSearchAddress, setGetSearchAddress] = useState();
  // const [getMyAddress, setGetMyAddress] = useState();

  // =====지도=====
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7f7e5a77df96d74182f8c75d73e54e95&libraries=services"; // 서비스 key값 & 라이브러리 호출
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(function (position) {
            const lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도

            const locPosition = new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          const locPosition = new window.kakao.maps.LatLng(
              33.450701,
              126.570667
            ),
            message = "geolocation을 사용할수 없어요..";

          displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          const iwContent = message, // 인포윈도우에 표시할 내용
            iwRemoveable = true;

          // 인포윈도우를 생성합니다
          const infowindow = new window.kakao.maps.InfoWindow({
            content: iwContent,
            removable: iwRemoveable,
          });

          // 인포윈도우를 마커위에 표시합니다
          infowindow.open(map, marker);

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
      });
    };
  }, []); // 의존성배열에 address값을 담아 address값이 변경되면 지도만 다시 랜더링 합니다.

  return (
    <>
      <GetFitnesscentersMapsPageUI />
    </>
  );
};

export default GetFitnesscentersMapsPage;
