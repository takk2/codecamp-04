import {Container, Search, Header, My, Photo, Name, Nav, Tab, Tab1, Line, Body, QuestionBoard, Question, Number, Title, Arrow,
        Footer, Icons, Icon, IconsName, IconName,Arrow2} from '../../../styles/faq'

export default function Faq(){



  return (
    <Container>
      <Search src="/images/ic-58-main-search-black.png" />
      <Header>
        <My>마이</My>
        <Photo src="/images/img-60-profile-image.png" />
        <Name>임정아</Name>
        <Arrow2 src="/images/ic-28-arrow.png" />
      </Header>
      <Nav>
        <Tab>공지사항</Tab>
        <Tab>이벤트</Tab>
        <Tab1>FAQ</Tab1>
        <Tab>Q&A</Tab>
      </Nav>
      <Line></Line>
      <Body>
        <QuestionBoard>
          <Question>
            <Number>Q.01</Number>
            <Title>리뷰 작성은 어떻게 하나요?</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
        <QuestionBoard>
          <Question>
            <Number>Q.02</Number>
            <Title>리뷰 수정/삭제는 어떻게 하나요?</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
        <QuestionBoard>
          <Question>
            <Number>Q.03</Number>
            <Title>아이디/비밀번호를 잊어버렸어요.</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
        <QuestionBoard>
          <Question>
            <Number>Q.04</Number>
            <Title>회원탈퇴를 하고싶어요.</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
        <QuestionBoard>
          <Question>
            <Number>Q.05</Number>
            <Title>출발지 설정은 어떻게 하나요?</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
        <QuestionBoard>
          <Question>
            <Number>Q.06</Number>
            <Title>비밀번호를 변경하고 싶어요.</Title>
          </Question>
          <Arrow src="/images/ic-70-arrow-right.png" />
        </QuestionBoard>
      </Body>
      <Footer>
        <Icons>
          <Icon src="/images/ic-58-main-home-unselected.png" />
          <Icon src="/images/ic-58-main-location-unselected.png" />
          <Icon src="/images/ic-58-main-like-unselected.png" />
          <Icon src="/images/ic-58-main-my-selected.png" />
        </Icons>
        <IconsName>
          <IconName>홈</IconName>
          <IconName>잇츠로드</IconName>
          <IconName>마이찜</IconName>
          <IconName>마이</IconName>
        </IconsName>
      </Footer>

    </Container>

  )

}