import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";
import { CREATE_USEDITEM } from "./ProductWrite.query";

export default function ProductWritePage(props) {
  // ===== CreateUsedItem =====
  const [createUseditem] = useMutation(CREATE_USEDITEM);

  const [myInputs, setMyInputs] = useState({
    name: "",
    remarks: "",
    contents: "",
    price: 0,
    // tags: [],
    // images: [],
  });

  function onChangeMyInputs(event) {
    if (event.target.name === "price") {
      setMyInputs({
        ...myInputs,
        [event.target.name]: Number(event.target.value),
      });
    } else {
      setMyInputs({
        ...myInputs,
        [event.target.name]: event.target.value,
      });
    }

    if (myInputs.name) setMyTitleError("");
    if (myInputs.price) setMyPriceError("");
    if (myInputs.remarks) setMyRemarksError("");
    if (myInputs.contents) setMyContentsError("");
  }
  // ===== FileUpLoad =====
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  // useEffect(() => {
  //   if (props.data?.fetchBoard.images?.length) {
  //     setFileUrls([...props.data?.fetchBoard.images]);
  //   }
  // }, [props.data]);

  // ===== onClickSubmitBtn =====
  const [myTitleError, setMyTitleError] = useState("");
  const [myPriceError, setMyPriceError] = useState("");
  const [myRemarksError, setMyRemarksError] = useState("");
  const [myContentsError, setMyContentsError] = useState("");

  async function onClickSubmitBtn() {
    // if (!myInputs.name) {
    //   setMyTitleError("상품명을 입력해주세요.");
    // }
    // if (!myInputs.price) {
    //   setMyPriceError("가격을 입력해주세요.");
    // }
    // if (!myInputs.remarks) {
    //   setMyRemarksError("한줄소개를 입력해주세요.");
    // }
    // if (!myInputs.contents) {
    //   setMyContentsError("상세정보를 입력해주세요.");
    // }
    // console.log(myInputs);
    try {
      const result = await createUseditem({
        variables: { createUseditemInput: { ...myInputs } },
      });
      console.log(result);
      alert("상품등록이 완료되었습니다.");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <ProductWriteUI
      onChangeFileUrls={onChangeFileUrls}
      fileUrls={fileUrls}
      onChangeMyInputs={onChangeMyInputs}
      onClickSubmitBtn={onClickSubmitBtn}
      myTitleError={myTitleError}
      myPriceError={myPriceError}
      myRemarksError={myRemarksError}
      myContentsError={myContentsError}
    />
  );
}
