import React from "react";
import * as D from "./BoardDetail.styles";

export default function BoardDetailUI(props) {
  return (
    <>
      <D.Container>
        <D.Wrapper>
          <D.WrapperHeader>
            <D.WrapperHeaderTitle>
              {props.data?.fetchBoard.title}
            </D.WrapperHeaderTitle>
            <D.UserIcon>아이콘 들어갈자리</D.UserIcon>
            <D.WrapperHeaderUser>
              <D.Date>{props.data?.fetchBoard.createAt}</D.Date>
              <D.UserName> {props.data?.fetchBoard.writer} </D.UserName>
            </D.WrapperHeaderUser>
          </D.WrapperHeader>
          <D.Line></D.Line>
          <D.WrapperBody>
            <D.WrapperBodyContentBox>
              <D.WrapperBodyImgBox>이미지</D.WrapperBodyImgBox>
              <D.WrapperBodyContents>
                {props.data?.fetchBoard.contents}
              </D.WrapperBodyContents>
            </D.WrapperBodyContentBox>
            <D.WrapperBodyVideobox>유튜브</D.WrapperBodyVideobox>
          </D.WrapperBody>
          <D.WrapperBtn>
            <D.WrapperBtn1 onClick={props.ListPageBtn}>목록으로</D.WrapperBtn1>
            <D.WrapperBtn2 onClick={props.Edit}>수정하기</D.WrapperBtn2>
            <D.WrapperBtn3 onClick={props.Delete}>삭제하기</D.WrapperBtn3>
          </D.WrapperBtn>
        </D.Wrapper>
      </D.Container>
    </>
  );
}
