import { useState } from "react";
import { Modal, Button } from "antd";
import DaumPostcode from "react-daum-postcode";

export default function ModalBasciPage() {
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
    </>
  );
}
