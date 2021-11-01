import {Container, Wrapper, Info, Writer, Label, InputName, H1, InputPW, Password, Title, TitleBox, Body, BodyText, 
        Address, Address1, Label2, Search, Address2, Youtube, YoutubeLink, Photo, GrayBox, Box, MainSet, Radio, Radio1, Button} from '../../../styles/boards'

export default function Boards(){

  return(
    <div>
      <H1>게시물 등록</H1>
      <Wrapper>
        <Container>  
          <Writer>
            <Label>작성자</Label>
            <InputName type="text" placeholder="이름을 적어주세요." />
          </Writer>
          <Password>
            <Label>비밀번호</Label>
            <InputPW type="password" placeholder="비밀번호를 입력해주세요." />
          </Password>
        </Container>
        <Title>
          <Label>제목</Label>
          <TitleBox type="text" placeholder="제목을 작성해주세요." />
        </Title>
        <Body>
          <Label>내용</Label>
          <BodyText placeholder="내용을 작성해주세요."></BodyText>
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
            <GrayBox>+<br />Upload</GrayBox>
          </Box>
        </Photo>
        <MainSet>
          <Label>메인설정</Label>
          <Radio>
            <Radio1 type="radio" /> 유튜브
            <Radio1 type="radio" /> 사진
          </Radio>  
        </MainSet>
        <Button>등록하기</Button>
      </Wrapper>
    </div>
    


  )

}