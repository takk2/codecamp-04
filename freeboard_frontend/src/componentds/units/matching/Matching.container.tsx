import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";
import { ChangeEvent, useState } from "react";
import MatchingUI from "./Matching.presenter";
import { firebaseapp } from "../../../../pages/_app";
import { Writer } from "../boardComment/list/BoardCommentList.styles";

export default function MatchingPage() {
  async function onClickSubmit() {
    const comments = collection(getFirestore(firebaseapp), "comments");
    await addDoc(comments, {
      ...userInfo,
    });
  }

  const [userInfo, setUserInfo] = useState({
    writer: "",
    password: "",
    contents: "",
  });

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInfo({
      //   writer: userInfo.writer,
      //   password: userInfo.password,
      //   contents: userInfo.contents,
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  // --- 조회 기능 ---
  const [myData, setData] = useState([]);

  async function onClickFetch() {
    const comments = collection(getFirestore(firebaseapp), "comments");
    const result = await getDocs(comments);
    setData(result.docs.map((el) => el.data()));

    // console.log(myData);
  }

  // const Writer = comments.writer;
  // console.log(getDocs);
  return (
    <>
      <MatchingUI
        onChangeInput={onChangeInput}
        onClickSubmit={onClickSubmit}
        onClickFetch={onClickFetch}
        data={myData}
      />
    </>
  );
}
