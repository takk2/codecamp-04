import BoardWriteUI from "./BoardWrite.presenter";
import { useState, ChangeEvent, useRef } from "react";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from "./BoardWrite.queries";

export default function BoardWrite(props) {
  const router = useRouter();

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  const [isOpen, setIsOpen] = useState(false);
  const [myAddress, setMyAddress] = useState("");
  const [myZonecode, setMyZonecode] = useState("");
  const [myaddressDetail, setMyAddressDetail] = useState("");

  const onToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: any) => {
    // console.log(data);

    setMyAddress(data.address);
    setMyZonecode(data.zonecode);

    setIsOpen((prev) => !prev);
  };

  const [myImages, setMyImages] = useState<string[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  const [name, setNameChk] = useState("");
  const [password, setPasswordChk] = useState("");
  const [title, setTitleChk] = useState("");
  const [body, setBodyChk] = useState("");

  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [bodyError, setBodyError] = useState("");

  function myAddressDetail(event) {
    setMyAddressDetail(event.target.value);
  }

  function NameChk(event) {
    setNameChk(event.target.value);
  }

  function PasswordChk(event) {
    setPasswordChk(event.target.value);
  }

  function TitleChk(event) {
    setTitleChk(event.target.value);
  }

  function BodyChk(event) {
    setBodyChk(event.target.value);
  }

  function onClickMyImage() {
    fileRef.current?.click();
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("????????? ??????????????????.");
      return;
    }

    if (myFile.size > 10 * 1024 * 1024) {
      // 5MB????????? 5?????????, ??????????????? ?????? 1024??? ?????? ????????? ?????????????????? ????????? ???????????? ??????.
      alert("10MB ????????? ??????????????? ????????? ???????????????.");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("????????? jpeg??? png ????????? ????????? ???????????????.");
      return;
    }

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }

  async function Check() {
    if (name.length === 0) {
      setNameError("??????????????? ??????????????????.");
    } else {
      setNameError("");
    }

    if (password.length === 0) {
      setPasswordError("??????????????? ???????????????.");
    } else {
      setPasswordError("");
    }

    if (title.length === 0) {
      setTitleError("????????? ???????????????.");
    } else {
      setPasswordError("");
    }

    if (body.length === 0) {
      setBodyError("????????? ???????????????.");
    } else {
      setBodyError("");
    }

    if (
      name.length !== 0 &&
      password.length !== 0 &&
      title.length !== 0 &&
      body.length !== 0
    ) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: name,
              password: password,
              title: title,
              contents: body,
              images: myImages,
              boardAddress: {
                zipcode: myZonecode,
                address: myAddress,
                addressDetail: myaddressDetail,
              },
            },
          },
        });
        console.log(result);

        router.push(`/boards/${result.data.createBoard._id}/`);
      } catch (error) {
        console.log(error.message);
      }
    }
  }

  const Check2 = async function () {
    try {
      const myVariables = {
        updateBoardInput: {},
        password: password,
        contents: body,
        boardId: router.query.boardID,
      };
      if (name !== "") myVariables.updateBoardInput.writer = name;
      if (title !== "") myVariables.updateBoardInput.title = title;
      if (body !== "") myVariables.updateBoardInput.contents = body;

      const result = await updateBoard({
        variables: myVariables,
      });
      console.log(result);

      router.push(`/boards/${result.data.updateBoard._id}/`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <BoardWriteUI
      NameChk={NameChk}
      PasswordChk={PasswordChk}
      TitleChk={TitleChk}
      BodyChk={BodyChk}
      Check={Check} //????????????
      Check2={Check2} //????????????
      isEdit={props.isEdit}
      Error1={nameError}
      Error2={passwordError}
      Error3={titleError}
      Error4={bodyError}
      data={props.data}
      isOpen={isOpen}
      myAddress={myAddress}
      myZonecode={myZonecode}
      onToggleModal={onToggleModal}
      handleComplete={handleComplete}
      myAddressDetail={myAddressDetail}
      onChangeFile={onChangeFile}
      fileRef={fileRef}
      onClickMyImage={onClickMyImage}
    />
  );
}
