import BoardWriteUI from "./BoardWrite.presenter"
import {useState} from 'react'
import { useMutation } from "@apollo/client"
import {useRouter} from 'next/router'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){

  const router = useRouter()

  const [ name, setNameChk ] = useState("")
  const [ password, setPasswordChk ] = useState("")
  const [ title, setTitleChk ] = useState("")
  const [ body, setBodyChk ] = useState("") 
  
  const [ nameError, setNameError ] = useState("")
  const [ passwordError, setPasswordError ] = useState("")
  const [ titleError, setTitleError ] = useState("")
  const [ bodyError, setBodyError ] = useState("")

  // const [myWriter, setMyWriter] = useState("")
  // const [myPassword, setMyPassword] = useState("")
  // const [myTitle, setMyTitle] = useState("")
  // const [myContents, setMyContents] = useState("")

  const [ createBoard ] = useMutation( CREATE_BOARD )
  const [ updateBoard ] = useMutation( UPDATE_BOARD )

  // function onChangeMyWriter(event){
  //   setMyWriter(event.target.value)
  // }
  // function onChangeMyPassword(event){
  //   setMyPassword(event.target.value)
  // }
  // function onChangeMyTitle(event){
  //   setMyTitle(event.target.value)
  // }
  // function onChangeMyContents(event){
  //   setMyContents(event.target.value)
  // }

  function NameChk(event){
    setNameChk(event.target.value)
  } 

  function PasswordChk(event){
    setPasswordChk(event.target.value)
  }

  function TitleChk(event){
    setTitleChk(event.target.value)
  }

  function BodyChk(event){
    setBodyChk(event.target.value)
  }

  async function Check(){
    if(name.length === 0) {
      setNameError("작성자명을 입력해주세요.")
    } else {
      setNameError("")
    }

    if(password.length === 0) {
      setPasswordError("비밀번호를 입력하세요.")
    } else {
      setPasswordError("")
    }

    if(title.length === 0) {
      setTitleError("제목을 입력하세요.")
    } else {
      setPasswordError("")
    }

    if(body.length === 0) {
      setBodyError("내용을 입력하세요.")
    } else {
      setBodyError("")
    }

    if(name.length !== 0 &&
      password.length !== 0 &&
      title.length !== 0 &&
      body.length !== 0){

        try{
          
          const result = await createBoard({
            variables: {
              createBoardInput: {
                
                  writer: name,
                  password: password,
                  title: title,
                  contents: body
              }
            }
          })
          console.log(result);

          router.push(`/boards/detail/${result.data.createBoard._id}`)

        } catch(error) {
          console.log(error.message)
        }
    }
  }

   const Check2 = async function(){
    try{
      const myVariables = {
        updateBoardInput: {},
        password : password,
        contents : body,
        boardId: router.query.myID
      }
      if(name !== '') myVariables.updateBoardInput.writer = name
      if(title !== '') myVariables.updateBoardInput.title = title
      if(body !== '' ) myVariables.updateBoardInput.contents = body
      
      const result = await updateBoard({
        variables: myVariables
        // variables: {
        //   updateBoardInput: {title:title, contents:body},
        //   password : password,
        //   boardId: router.query.myID
        // }
      })
      console.log(result);

      router.push(`/boards/detail/${result.data.updateBoard._id}`)

    } catch(error) {
      console.log(error.message)
    }
  }

  return(
    <BoardWriteUI
      aaa={NameChk}
      bbb={PasswordChk}
      ccc={TitleChk}
      ddd={BodyChk}
      zzz={Check} //등록하기
      fff={Check2} //수정하기
      ggg={props.isEdit}
      Error1 = {nameError}
      Error2 = {passwordError}
      Error3 = {titleError}
      Error4 = {bodyError}
      data = {props.data}
    />
  )

}