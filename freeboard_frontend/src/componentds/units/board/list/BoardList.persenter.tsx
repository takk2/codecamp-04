import * as S from "./BoardList.styles";
import Paginations01 from "../../../commons/pagination/01/Paginations01.container";
import SearchPage01 from "../../../commons/search/01/search01.container";
import { v4 as uuidv4 } from "uuid";
import { IBoardListUIProps } from "./BoardList.types";

export default function BoardListUI(props: IBoardListUIProps) {
  return (
    <>
      <S.Container>
        <S.Wrapper>
          <S.WrapperHeader>
            <S.WrapperHeaderTitle>베스트 게시글</S.WrapperHeaderTitle>
            <S.WrapperHeaderBest>
              {props.bestdata?.fetchBoardsOfTheBest.map((el) => (
                <S.Best key={el._id}>
                  <S.BestPhoto></S.BestPhoto>
                  <S.BestTitle id={el._id} onClick={props.selectBest}>
                    {el.title}
                  </S.BestTitle>
                  <S.BestInfo>
                    <S.InfoWriter>
                      <S.WriterUser>
                        <S.UserIcon></S.UserIcon>
                        <S.UserName>{el.writer}</S.UserName>
                      </S.WriterUser>
                      <S.WriteDate>
                        {" "}
                        Date : {el.createdAt.replaceAll("-", ".").split("T")[0]}
                      </S.WriteDate>
                    </S.InfoWriter>
                    <S.Like>
                      <S.LikeIcon src="/images/Vector.png" />
                      <S.LikeCounter>{el.likeCount}</S.LikeCounter>
                    </S.Like>
                  </S.BestInfo>
                </S.Best>
              ))}
            </S.WrapperHeaderBest>
          </S.WrapperHeader>
          <S.WrapperFunction>
            <SearchPage01
              refetch={props.refetch}
              refetchBoardsCount={props.refetchBoardsCount}
              onChangeKeyword={props.onChangeKeyword}
            />
          </S.WrapperFunction>
          <S.WrapperBody>
            <S.BodyTab>
              <S.TabNum>번호</S.TabNum>
              <S.TabTitle>제목</S.TabTitle>
              <S.TabWriter>작성자</S.TabWriter>
              <S.TabDate>날짜</S.TabDate>
            </S.BodyTab>
            {props.data?.fetchBoards.map((el, index) => (
              <S.BodyTab1 key={el._id}>
                <S.TabNum1>{index + 1}</S.TabNum1>
                <S.TabTitle1 id={el._id} onClick={props.select}>
                  {el.title
                    .replaceAll(props.keyword, `@#$%${props.keyword}@#$%`)
                    .split("@#$%")
                    .map((el) => (
                      <S.TextToken
                        key={uuidv4()}
                        isMatched={props.keyword === el}
                      >
                        {el}
                      </S.TextToken>
                    ))}
                </S.TabTitle1>
                <S.TabWriter1>{el.writer}</S.TabWriter1>
                <S.TabDate1>
                  {el.createdAt.replaceAll("-", ".").split("T")[0]}
                </S.TabDate1>
              </S.BodyTab1>
            ))}
          </S.WrapperBody>
          <S.Footer>
            <Paginations01
              refetch={props.refetch}
              refetchBoardsCount={props.refetchBoardsCount}
              count={props.count}
              startPage={props.startPage}
              setStartPage={props.setStartPage}
            />
            <S.CreatButton onClick={props.CreatePageBtn}>
              게시물 등록하기
            </S.CreatButton>
          </S.Footer>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
