import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      images
    }
  }
`;

export default function ImageUploadPage() {
  // const [myWriter, setMyWriter] = useState("");
  // const [myPassword, setMyPassword] = useState("");
  // const [myTitle, setMyTitle] = useState("");
  // const [myContents, setMyContents] = useState("");
  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [createBoard] = useMutation(CREATE_BOARD);

  // function onChangeMyWriter(event: ChangeEvent<HTMLInputElement>) {
  //   setMyWriter(event.target.value);
  // }

  // function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
  //   setMyPassword(event.target.value);
  // }

  // function onChangeMyTitle(event: ChangeEvent<HTMLInputElement>) {
  //   setMyTitle(event.target.value);
  // }

  // function onChangeMyContents(event: ChangeEvent<HTMLInputElement>) {
  //   setMyContents(event.target.value);
  // }

  async function onClickSubmit() {
    const result = await createBoard({
      variables: {
        createBoardInput: {
          // writer: myWriter,
          // password: myPassword,
          // title: myTitle,
          // contents: myContents,
          images: myImages,
        },
      },
    });
    console.log(result);
  }

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (!myFile?.size) {
      alert("파일을 선택해주세요.");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      // 5MB이니까 5바이트, 메가바이트 해서 1024를 두번 곱해줌 기가바이트는 한번더 곱해주면 된다.
      alert("파일용량이 너무 큽니다. (제한:5MB)");
      return;
    }

    if (!myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
      alert("jpeg 또는 png 파일만 업로드 가능합니다.");
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

  return (
    <>
      <h1>이미지 업로드!!</h1>
      <input type="file" onChange={onChangeFile} />
      <br />
      작성자: <input type="text" onChange={onChangeMyWriter} />
      <br />
      비밀번호: <input type="password" onChange={onChangeMyPassword} />
      <br />
      제목: <input type="text" onChange={onChangeMyTitle} />
      <br />
      내용: <input type="text" onChange={onChangeMyContents} />
      <br />
      <button onClick={onClickSubmit}>등록하기</button>
    </>
  );
}
