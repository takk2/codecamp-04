import {Page, Container, Wrapper, Noti, Info, Writer, Label, InputName, H1, InputPW, 
  Password, Title, TitleBox, Body, BodyText, Address, Address1, Label2, Search,
  Address2, Youtube, YoutubeLink, Photo, GrayBox, Box, MainSet, Radio, Radio1, 
  Button} from '../../../styles/boards'
  
import {useState} from 'react'
import { useMutation , gql} from "@apollo/client"
import {useRouter} from 'next/router'

const CREATE_BOARD = gql`
mutation createBoard( $createBoardInput : CreateBoardInput!) {
createBoard(createBoardInput : $createBoardInput){
_id
writer
title
contents
}
}
`

// export function GraphqlMutationProductPage()                                                                                                        
export default function Boards(){

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


return(
<div>
<Page>
  <H1>게시물 등록</H1>
  <Wrapper>
    <Container>  
      <Writer>
        <Label>작성자</Label>
        <InputName type="text" placeholder="이름을 적어주세요." onChange={NameChk} />
        <Info>{nameError}</Info>
      </Writer>
      <Password>
        <Label>비밀번호</Label>
        <InputPW type="password" placeholder="비밀번호를 입력해주세요." onChange={PasswordChk} />
        <Info>{passwordError}</Info>
      </Password>
    </Container>
    <Title>
      <Label>제목</Label>
      <TitleBox type="text" placeholder="제목을 작성해주세요." onChange={TitleChk} />
      <Info>{titleError}</Info>
    </Title>
    <Body>
      <Label>내용</Label>
      <BodyText placeholder="내용을 작성해주세요." onChange={BodyChk}></BodyText>
      <Info>{bodyError}</Info>
    </Body>
    <Address>
      <Label>주소</Label>
      <Address1>
        <Label2 type="text" placeholder="07250" />
        <Search>우편번호 검색</Search>
      </Address1> 
      <Address2 type="text" />
      <Address2 type="text" />
    </Address>
    <Youtube>
      <Label>유튜브</Label>
      <YoutubeLink type="text" placeholder="링크를 복사해주세요." />
    </Youtube>
    <Photo>
      <Label>사진첨부</Label>
      <Box>
        <GrayBox>+<br />Upload</GrayBox>
        <GrayBox>+<br />Upload</GrayBox>
        <GrayBox>+<br />Upl ad</GrayBox>
      </Box>
    </Photo>
    <MainSet>
      <Label>메인설정</Label>
      <Radio>
        <Radio1 type="radio" /> 유튜브
        <Radio1 type="radio" /> 사진
      </Radio>  
    </MainSet>
    <Button onClick={Check}>등록하기</Button>
  </Wrapper>
</Page>  
</div>



)

}