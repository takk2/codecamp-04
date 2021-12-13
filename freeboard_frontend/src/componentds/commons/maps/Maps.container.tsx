import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapsPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=593bb17803d800ca368cf511e3bcea13&libraries=services";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map");
        const mapOption = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          { myAddress }, //검색한 주소 입력
          function (result, status) {
            if (status === window.kakao.mpas.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );
              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });

              const infowindow = new window.kakao.maps.InfoWindow({
                content:
                  '<div style="width:150px;text-align:center;padding:6px 0;">거래장소</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

  // const showModal = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // const handleOk = () => {
  //   setIsOpen((prev) => !prev);
  // };
  // const handleCancel = () => {
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZonecode(data.zonecode);

    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <div>
        <Button onClick={onToggleModal}>우편번호 검색</Button>
        <div>
          내주소: {myAddress}
          {myAddressDetail}
        </div>
        <div>내우편번호: {myZonecode}</div>
        {isOpen && (
          <Modal visible={true} onOk={onToggleModal} onCancel={onToggleModal}>
            <DaumPostcode onComplete={handleComplete} />
          </Modal>
        )}
      </div>
    </>
  );
}
