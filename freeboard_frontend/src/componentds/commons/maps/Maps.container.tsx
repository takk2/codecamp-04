import { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1200px;
  height: 500px;
  margin: 0 auto;
`;
const MapsInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  magrin: 0 -30px;

  div {
    padding: 0 30px;
  }
`;
const Maps = styled.div`
  width: 50%;
  height: 500px;
`;
const Wrapper__Address = styled.div`
  width: 50%;
  height: 500px;
`;

declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapsPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myAddressDetail, setMyAddressDetail] = useState("");
  const [myZonecode, setMyZonecode] = useState("");

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
          level: 1,
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          `${myAddress}`, //검색한 주소 입력
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
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
                  '<div style="width:70px;text-align:center;padding:6px;">거래장소</div>',
              });
              infowindow.open(map, marker);

              map.setCenter(coords);

              console.log(coords);
            }
          }
        );
      });
    };
  }, [myAddress]);

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    setMyAddress(data.address);
    setMyZonecode(data.zonecode);

    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Wrapper>
        <MapsInner>
          <Maps id="map" style={{ width: "500px", height: "400px" }}></Maps>
          <Wrapper__Address>
            <Button onClick={onToggleModal}>우편번호 검색</Button>
            <div>
              내주소: {myAddress}
              {myAddressDetail}
            </div>
            <div>내우편번호: {myZonecode}</div>
            {isOpen && (
              <Modal
                visible={true}
                onOk={onToggleModal}
                onCancel={onToggleModal}
              >
                <DaumPostcode onComplete={handleComplete} />
              </Modal>
            )}
          </Wrapper__Address>
        </MapsInner>
      </Wrapper>
    </>
  );
}
