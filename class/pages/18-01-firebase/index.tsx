import {
  collection,
  getFirestore,
  addDoc,
  getDocs,
} from "firebase/firestore/lite";

import { firebaseApp } from "../_app";

export default function FirebasePage() {
  async function onClcikSubmit() {
    // const board = collection(getFirestore(firebaseApp), "board");
    // await addDoc(board, {
    //   writer: "철수",
    //   title: "제목입니다!!",
    //   contents: "내용입니다!!",
    // });

    const product = collection(getFirestore(firebaseApp), "product");
    await addDoc(product, {
      seller: "영희",
      name: "리모콘",
      contents: "좋은 리모콘ㅋㅋ",
    });
  }

  async function onClcikFetch() {
    const board = collection(getFirestore(firebaseApp), "board");
    const result = await getDocs(board);
    const docs = result.docs.map((el) => el.data());
    console.log(docs);
  }

  return (
    <>
      <div>파이어베이스 연습 페이지입니다!!</div>
      <button onClick={onClcikSubmit}>등록하기</button>
      <button onClick={onClcikFetch}>불러오기</button>
    </>
  );
}
