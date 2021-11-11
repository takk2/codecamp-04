import { gql,useQuery } from "@apollo/client"
import { useRouter } from "next/router"
import BoardWrite from "../../../../../src/componentds/units/board/write/BoardWrite.container"
import { UPDATE_BOARD } from "../../../../../src/componentds/units/board/write/BoardWrite.queries"

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

export default function EditPage(){
  const router = useRouter(  )
  const {data} = useQuery(FETCH_BOARD, {
    variables:{ _id:router.query.myID}
  }

  )



  return <BoardWrite isEdit ={true} data={data} />
  

}