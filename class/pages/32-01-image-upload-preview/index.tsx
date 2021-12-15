import { useState } from "react";

export default function ImageUploadPreviewPage() {
  const [imageUrl, setImageUrl] = useState("");

  function onChangeFile(event) {
    const myFile = event.target.files[0];
    console.log(myFile);

    const fileReader = new FileReader();
    fileReader.readAsDataURL(myFile); // ()안의것을 가지고 url을 만들어준다.
    fileReader.onload = (data) => {
      console.log(data.target.result);
      setImageUrl(data.target?.result);
    };
  }

  return (
    <>
      <img src={imageUrl} />
      <input type="file" onChange={onChangeFile} />;
    </>
  );
}
