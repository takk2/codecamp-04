import {
  BottomWrapper,
  Button,
  Contents,
  ContentsLength,
  ContentsWrapper,
  Input,
  InputWrapper,
  PencilIcon,
  Wrapper,
} from "./BoardCommentWrite.styles";
import { IBoardCommentWriteUIProps } from "./BoardCommentWrite.types";

export default function BoardCommentWriteUI(props: IBoardCommentWriteUIProps) {
  return (
    <Wrapper>
      {!props.isEdit && (
        <>
          <PencilIcon src="/images/boardComment/write/pencil.png" />
          <span>댓글</span>
        </>
      )}
      <InputWrapper>
        <Input
          placeholder="작성자"
          readOnly={Boolean(props.el?.writer)}
          defaultValue={props.el?.writer || ""}
          onChange={props.onChangeMyWriter}
        />
        <Input
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangeMyPassword}
        />
      </InputWrapper>
      <ContentsWrapper>
        <Contents
          maxLength={100}
          defaultValue={props.el?.contents}
          onChange={props.onChangeMyContents}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <BottomWrapper>
          <ContentsLength>{props.myContents.length}/100</ContentsLength>
          <Button
            onClick={props.isEdit ? props.onClickUpdate : props.onClickWrite}
          >
            {props.isEdit ? "수정하기" : "등록하기"}
          </Button>
        </BottomWrapper>
      </ContentsWrapper>
    </Wrapper>
  );
}
