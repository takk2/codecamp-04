import { useMutation, gql } from "@apollo/client";
import { useState } from "react";

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMultationBoard3Page() {
  const [myInputs, setMyInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [createBoard] = useMutation(CREATE_BOARD);

  function onChangeMyInputs(event) {
    setMyInputs({
      ...myInputs,
      [event.target.id]: event.target.value, //key에 대괄호를 넣으면 더이상 변수가 아니다.
    });
  }

  async function zzz() {
    const result = await createBoard({
      variables: { ...myInputs },
    });
    console.log(result);
    console.log(result.data.createBoard.message);
  }

  return (
    <>
      작성자: <input type="text" name="writer" onChange={onChangeMyInputs} />
      <br />
      제목: <input type="text" name="title" onChange={onChangeMyInputs} />
      내용: <input type="text" name="contents" onChange={onChangeMyInputs} />
      <button onClick={zzz}>게시물 등록하기!!</button>
    </>
  );
}
