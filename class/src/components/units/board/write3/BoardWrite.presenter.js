import {MyInput, MyButton} from "./BoardWrite.styles"

export default function BoardWriteUI(props){

  return(
    <>
      작성자: <MyInput type="text" onChange={props.aaa} defaltValue={props.data?.fetchBoard.writer} /><br/>
      제목: <MyInput type="text" onChange={props.bbb} defaltValue={props.data?.fetchBoard.title} /><br/>
      내용: <MyInput type="text" onChange={props.ccc} defaltValue={props.data?.fetchBoard.contents} /><br/>
      <MyButton onClick={props.ggg ? props.xxx : props.zzz}> {props.qqq}게시물 {props.ggg ? "수정" : "등록"}하기!!</MyButton>
    </>
  )
}