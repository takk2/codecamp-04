import Head from "next/head";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=593bb17803d800ca368cf511e3bcea13"; // 쿼리 스트링(물음표 뒤에다가 적어주는것 키=값)
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      {/* // style 중괄호가 두개인 이유는 변수가 두개여서. 저 style 태그는 자바스크립트 css이다. html css, javascript css 문법마다 다 다름. markup language 검색 */}
    </>
  );
}
