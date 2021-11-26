import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;

export default function ImageUploadPage() {
  const [myImages, setMyImages] = useState<string[]>([]);
  const [uploadFile] = useMutation(UPLOAD_FILE);

  async function onChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const myFile = event.target.files?.[0];
    console.log(myFile);

    if (myFile?.size) {
      alert("파일을 선택해주세요.");
      return;
    }

    if (myFile.size > 5 * 1024 * 1024) {
      // 5MB이니까 5바이트, 메가바이트 해서 1024를 두번 곱해줌 기가바이트는 한번더 곱해주면 된다.
      alert("파일용량이 너무 큽니다. (제한:5MB)");
      return;
    }

    if (myFile.type.includes("jpeg") && !myFile.type.includes("png")) {
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

  return <input type="file" onChange={onChangeFile} />;
}
