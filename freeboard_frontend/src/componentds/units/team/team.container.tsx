// import TestPages2UI from "./team.presenter";
import axios from "axios";
import { useState } from "react";
import { XMLParser } from "react-xml-parser";

export default function TestPages2() {
  const [aaa, setAaa] = useState("");

  async function zzz() {
    try {
      const result = await axios.get(
        "/api" +
          "http://www.kspo.or.kr/openapi/service/sportsNewFacilInfoService/getNewFacilInfoList?serviceKeyq0YtNPdWx8qVNteC3GhxWSEIH9BCs2fYeStvOI6zh%2B3dvcWYFUplo0Vy60nD1P63KiHbTQvXCfD6kyee6VxBtA%3D%3D=&numOfRows=123&pageNo=1"
      );
      console.log(result);
      setAaa(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div>{aaa}</div>
      <button onClick={zzz}>정보가져오기</button>
    </>
  );
}
