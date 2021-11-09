import {MyInput, MyButton} from "./BoardWrite.styles"
export default function BoardWriteUI(props){

  return(
    <>
      작성자: <MyInput type="text" onChange={props.aaa}/><br/>
      제목: <MyInput type="text" onChange={props.bbb}/><br/>
      내용: <MyInput type="text" onChange={props.ccc}/><br/>
      <MyButton onClick={props.zzz} MyQqq1={props.qqq}>게시물 등록하기!!</MyButton>
    </>
  )
}