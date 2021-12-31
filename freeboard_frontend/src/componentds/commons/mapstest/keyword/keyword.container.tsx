import axios from "axios";
import { useState, useEffect } from "react";

const Keyword = () => {
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
    console.log(result.data.documents);
    setMyKeyword(result.data.documents);
    // typeof result.data.documents;
  }

  useEffect(() => {
    search();
  }, []);

  console.log(typeof myKeyword);
  return (
    <>
      <div>이 페이지는 키워드 검색 페이지 입니다. </div>
      <div>
        {myKeyword &&
          myKeyword.map((el) => (
            <div key={el.id}>
              <div>{el.place_name}</div>
              <div>{el.address_name}</div>
              <div>{el.phone}</div>
              <a href={el.place_url}>{el.place_url}</a>
            </div>
          ))}
      </div>
      {/* <button onClick={search}>리스트 가져오기</button> */}
    </>
  );
};

export default Keyword;
