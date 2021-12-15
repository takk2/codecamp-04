import { useMutation } from "@apollo/client";
import { useState } from "react";
import { UPLOAD_FILE } from "../01/Uploads01.queries";
import UploadFile2UI from "./uploads02.presenter";

export default function UploadFiles2() {
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [imageUrl, setImageUrl] = useState("");
  const [myFiles, setMyFiles] = useState([]);

  function onChangeFile(event) {
    const file = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (data) => {
      setImageUrl(data.target.result);
      setMyFiles((prev) => [...prev, file]);
    };
  }

  return (
    <>
      <input type="file" onChange={onChangeFile} />
    </>
  );
}
