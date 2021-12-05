import { useEffect, useState } from "react";
import ProductWriteUI from "./ProductWrite.presenter";

export default function ProductWritePage(props) {
  const [fileUrls, setFileUrls] = useState(["", "", ""]);

  function onChangeFileUrls(fileUrl: string, index: number) {
    const newFileUrls = [...fileUrls];
    newFileUrls[index] = fileUrl;
    setFileUrls(newFileUrls);
  }

  useEffect(() => {
    if (props.data?.fetchBoard.images?.length) {
      setFileUrls([...props.data?.fetchBoard.images]);
    }
  }, [props.data]);

  return (
    <ProductWriteUI onChangeFileUrls={onChangeFileUrls} fileUrls={fileUrls} />
  );
}
