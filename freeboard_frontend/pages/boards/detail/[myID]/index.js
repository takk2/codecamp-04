import { useRouter } from "next/router"
import {useQuery, gql} from '@apollo/client'

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
    }
  }
`

export default function DynamicMyBoards(){
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myID }
  });

  console.log("ddd",data);

  return(
    <>
    <div>나의 아이디: {router.query.myID}</div>
    <div>작성자: {data ? data.fetchBoard.writer : "qqq"}</div>
    <div>제목: {data && data.fetchBoard.title}</div>
    <div>내용: {data ?. fetchBoard.contents}</div>
    </>
  )

}