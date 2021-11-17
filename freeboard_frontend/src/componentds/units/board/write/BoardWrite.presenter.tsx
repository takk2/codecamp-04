import {
  Page,
  Container,
  Wrapper,
  Noti,
  Info,
  Writer,
  Label,
  InputName,
  H1,
  InputPW,
  Password,
  Title,
  TitleBox,
  Body,
  BodyText,
  Address,
  Address1,
  Label2,
  Search,
  Address2,
  Address3,
  Youtube,
  YoutubeLink,
  Photo,
  GrayBox,
  Box,
  MainSet,
  Radio,
  Radio1,
  SubmitButton,
} from "./BoardWrite.styles";
import { Modal } from "antd";
import DaumPostcode from "react-daum-postcode";
import { useState } from "react";

export default function BoardWriteUI(props) {
  return (
    <>
      <Page>
        <H1>게시물 {props.isEdit ? "수정" : "등록"}</H1>
        <Wrapper>
          <Container>
            <Writer>
              <Label>작성자</Label>
              <InputName
                type="text"
                placeholder="이름을 적어주세요."
                onChange={props.NameChk}
                defaultValue={props.data?.fetchBoard.writer}
              />
              <Info>{props.Error1}</Info>
            </Writer>
            <Password>
              <Label>비밀번호</Label>
              <InputPW
                type="password"
                placeholder="비밀번호를 입력해주세요."
                onChange={props.PasswordChk}
              />
              <Info>{props.Error2}</Info>
            </Password>
          </Container>
          <Title>
            <Label>제목</Label>
            <TitleBox
              type="text"
              placeholder="제목을 작성해주세요."
              onChange={props.TitleChk}
            />
            <Info>{props.Error3}</Info>
          </Title>
          <Body>
            <Label>내용</Label>
            <BodyText
              placeholder="내용을 작성해주세요."
              onChange={props.BodyChk}
            ></BodyText>
            <Info>{props.Error4}</Info>
          </Body>
          <Address>
            <Label>주소</Label>
            <Address1>
              <Label2>{props.myZonecode}</Label2>
              <Search onClick={props.onToggleModal}>우편번호 검색</Search>
              {props.isOpen && (
                <Modal
                  visible={true}
                  onOk={props.onToggleModal}
                  onCancel={props.onToggleModal}
                >
                  <DaumPostcode onComplete={props.handleComplete} />
                </Modal>
              )}
            </Address1>
            <Address2>{props.myAddress}</Address2>
            <Address3
              type="text"
              placeholder="상세주소를 입력해주세요."
              onChange={props.myAddressDetail}
            />
          </Address>
          <Youtube>
            <Label>유튜브</Label>
            <YoutubeLink type="text" placeholder="링크를 복사해주세요." />
          </Youtube>
          <Photo>
            <Label>사진첨부</Label>
            <Box>
              <GrayBox>
                +<br />
                Upload
              </GrayBox>
              <GrayBox>
                +<br />
                Upload
              </GrayBox>
              <GrayBox>
                +<br />
                Upload
              </GrayBox>
            </Box>
          </Photo>
          <MainSet>
            <Label>메인설정</Label>
            <Radio>
              <Radio1 type="radio" /> 유튜브
              <Radio1 type="radio" /> 사진
            </Radio>
          </MainSet>
          <SubmitButton onClick={props.isEdit ? props.Check2 : props.Check}>
            {props.isEdit ? "수정" : "등록"}하기
          </SubmitButton>
        </Wrapper>
      </Page>
    </>
  );
}
