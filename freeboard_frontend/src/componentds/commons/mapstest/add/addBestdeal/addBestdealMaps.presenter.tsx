import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

const AddBestdealMapsPageUI = (props) => {
  return (
    <>
      <div>이 페이지는 베스트딜 등록패이지의 지도섹션입니다.</div>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
      <Button typeof="button" onClick={props.onToggleModal}>
        주소검색하기
      </Button>
      <div>
        <div>우리 매장 주소 : {props.dealAddress}</div>
        {props.getOpen && (
          <Modal
            visible={true}
            onOk={props.onToggleModal}
            onCancel={props.onToggleModal}
          >
            <DaumPostcode onComplete={props.handleComplete} />
          </Modal>
        )}
      </div>
    </>
  );
};

export default AddBestdealMapsPageUI;
