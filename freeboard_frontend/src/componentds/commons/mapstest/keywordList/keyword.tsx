import axios from "axios";
import { useState, useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const Key = () => {
  const [myKeyword, setMyKeyword] = useState([]);
  const [getLat, setGetLat] = useState<number>();
  const [getLon, setGetLon] = useState<number>();
  const [getAddress, setGetAddress] = useState("");

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7f7e5a77df96d74182f8c75d73e54e95&libraries=services"; // 서비스 key값 & 라이브러리 호출
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(
              37.56639085841548,
              126.9779594783454
            ), // 지도의 중심좌표
            level: 2, // 지도의 확대 레벨
          };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(async function (position) {
            const lat = position.coords.latitude, // 위도
              lon = position.coords.longitude; // 경도
            setGetLat(lat);
            setGetLon(lon);
            const locPosition = await new window.kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
              message = '<div style="padding:5px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

            if (getLon && getLat) {
              const AddressGps = await axios.get(
                `https://dapi.kakao.com/v2/local/geo/coord2regioncode.json?autoload=false&x=${getLon}&y=${getLat}`,
                {
                  headers: {
                    Host: "dapi.kakao.com",
                    Authorization: "KakaoAK 80255a1f4e1c8018da2312bc4f97ad51",
                  },
                }
              );

              console.log(AddressGps);

              setGetAddress(AddressGps.data?.documents[0].address_name);
              console.log(AddressGps.data?.documents[0].address_name);
            }
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          const locPosition = new window.kakao.maps.LatLng(
              37.56639085841548,
              126.9779594783454
            ),
            // 37.56639085841548, 126.97795947834545 // 서울시청
            message = "현재위치 불러오기에 실패하였습니다";

          displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
      });
    };
  }, [getLat, getLon]); // 의존성배열에 address값을 담아 address값이 변경되면 지도만 다시 랜더링 합니다.
  console.log("현재 내 위치 경위도 값 : ", getLon, getLat);

  useEffect(() => {
    const search = async () => {
      const result = await axios.get(
        `https://dapi.kakao.com/v2/local/search/keyword.json?autoload=false&page=1&size=15&sort=accuracy&query=${
          getAddress + "주변" + "헬스장"
        }`,
        {
          headers: {
            Host: "dapi.kakao.com",
            Authorization: "KakaoAK 80255a1f4e1c8018da2312bc4f97ad51",
          },
        }
      );
      setMyKeyword(result.data.documents);
    };
    search();
  }, [getAddress]);

  const newMarker = (index: number) => () => {
    // console.log(myKeyword[0].x);
    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2, // 지도의 확대 레벨
      };
    var map = new window.kakao.maps.Map(mapContainer, mapOption);
    var markerPosition = new window.kakao.maps.LatLng(
      myKeyword[index].y,
      myKeyword[index].x
    );

    // 마커를 생성합니다
    var marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    map.setCenter(markerPosition);
  };

  return (
    <>
      <div>이 페이지는 키워드 검색 리스트 페이지 입니다.</div>
      <div id="map" style={{ width: "1000px", height: "500px" }}></div>
      <div>
        {myKeyword &&
          myKeyword.map((el: any, index) => (
            <div key={el.id}>
              <div onClick={newMarker(index)}>업체명: {el.place_name}</div>
              <div>주소: {el.address_name}</div>
              <div>전화번호: {el.phone}</div>
              <a href={el.place_url}>상세보기</a>
            </div>
          ))}
      </div>
    </>
  );
};

export default Key;
