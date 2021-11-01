import { Container, Label, PassWord, Title, Id } from '../../styles/emotion'

export default function EmotionPage(){
  //자바스크립트 쓰는곳


  
  return (
  //html 쓰는곳(jsx - react전용 html)
    <Container> 
      <Title>로그인</Title>
      <Label>아이디</Label>
      <Id type="text" />
      <Label>비밀번호</Label>
      <PassWord type="password" />
      나의이미지: <img src="/images/lotto.png" /> 
    </Container>
  )

}