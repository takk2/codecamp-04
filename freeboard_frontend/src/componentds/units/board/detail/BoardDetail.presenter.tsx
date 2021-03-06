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
            <D.UserIcon src="/images/avatar.png" />
            <D.WrapperHeaderUser>
              <D.Date>
                {
                  props.data?.fetchBoard.createdAt
                    .replaceAll("-", ".")
                    .split("T")[0]
                }
              </D.Date>
              <D.UserName> {props.data?.fetchBoard.writer} </D.UserName>
            </D.WrapperHeaderUser>
          </D.WrapperHeader>
          <D.Line></D.Line>
          <D.WrapperBody>
            <D.WrapperBodyContentBox>
              <D.WrapperBodyImgBox
                src={`https://storage.googleapis.com/${props.data?.fetchBoard.images[0]}`}
              ></D.WrapperBodyImgBox>
              <D.WrapperBodyContents>
                {props.data?.fetchBoard.contents}
              </D.WrapperBodyContents>
            </D.WrapperBodyContentBox>
            <D.WrapperBodyVideobox url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
          </D.WrapperBody>
          <D.WrapperFooter>
            <D.LikeWrapper>
              <D.LikeBtn onClick={props.LikeBtn}></D.LikeBtn>
              <D.DisLikeBtn onClick={props.DisLikeBtn}></D.DisLikeBtn>
            </D.LikeWrapper>
            <D.WrapperBtn>
              <D.WrapperBtn1 onClick={props.ListPageBtn}>
                목록으로
              </D.WrapperBtn1>
              <D.WrapperBtn2 onClick={props.Edit}>수정하기</D.WrapperBtn2>
              <D.WrapperBtn3 onClick={props.Delete}>삭제하기</D.WrapperBtn3>
            </D.WrapperBtn>
          </D.WrapperFooter>
        </D.Wrapper>
      </D.Container>
    </>
  );
}
