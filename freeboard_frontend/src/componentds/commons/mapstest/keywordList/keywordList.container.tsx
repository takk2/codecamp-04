import axios from "axios";
import { useState, useEffect } from "react";
import KeywordListPageUI from "./keywordList.presenter";

const KeywordListPage = () => {
  const [myKeyword, setMyKeyword] = useState<any>();

  async function search() {
    const result = await axios.get(
      "https://dapi.kakao.com/v2/local/search/keyword.json?page=1&size=15&sort=accuracy&query=서울시 구로구 디지털로 300 주변 헬스장",
      {
        headers: {
          Host: "dapi.kakao.com",
          Authorization: "KakaoAK 80255a1f4e1c8018da2312bc4f97ad51",
        },
      }
    );
    setMyKeyword(result.data.documents);
  }

  useEffect(() => {
    search();
  }, []);

  return (
    <>
      <KeywordListPageUI myKeyword={myKeyword} />
    </>
  );
};

export default KeywordListPage;
