import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState, useRef } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    const result = await uploadFile({
      variables: {
        file: myFile,
      },
    });
    console.log(result.data.uploadFile.url);
    setMyImages([result.data.uploadFile.url]);
  }

  function onClickMyImage() {
    fileRef.current?.click();
  }

  return (
    <>
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={onClickMyImage}
      >
        이미지 선택
      </div>
      <img src={`https://storage.googleapis.com/${myImages[0]}`} />
      <input
        style={{ display: "none" }}
        type="file"
        ref={fileRef}
        onChange={onChangeFile}
      />
    </>
  );
}
