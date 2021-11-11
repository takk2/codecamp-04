import { ChangeEvent } from "react"
import {MyInput, MyButton} from "./BoardWrite.styles"
import {IProps2} from "./BoardWrite.types"

// interface IProps2 {
//   aaa: (event: ChangeEvent<HTMLInputElement>) => void
//   bbb: (event: ChangeEvent<HTMLInputElement>) => void
//   ccc: (event: ChangeEvent<HTMLInputElement>) => void
//   zzz: () => void
//   qqq: boolean
//   ggg: boolean
//   xxx: () => void
//   data: any
// }

export default function BoardWriteUI(props: IProps2 ){

  return(
    <>
      작성자: <MyInput type="text" onChange={props.aaa} defaultValue={props.data?.fetchBoard.writer} /><br/>
      제목: <MyInput type="text" onChange={props.bbb} defaultValue={props.data?.fetchBoard.title} /><br/>
      내용: <MyInput type="text" onChange={props.ccc} defaultValue={props.data?.fetchBoard.contents} /><br/>
      <MyButton onClick={props.ggg ? props.xxx : props.zzz}> {props.qqq}게시물 {props.ggg ? "수정" : "등록"}하기!!</MyButton>
    </>
  )
}