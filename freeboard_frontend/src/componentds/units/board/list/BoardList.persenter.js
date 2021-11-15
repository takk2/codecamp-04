import * as S from "./BoardList.styles";

export default function BoardListUI(props) {
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
            <S.FunctionSearch placeholder="제목을 입력해주세요."></S.FunctionSearch>
            <S.FunctionDate placeholder="YYYY. MM. DD ~ YYYY. MM. DD"></S.FunctionDate>
            <S.FunctionButton>검색하기</S.FunctionButton>
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
                <S.TabNum1>{10 - index}</S.TabNum1>
                <S.TabTitle1 id={el._id} onClick={props.select}>
                  {el.title}
                </S.TabTitle1>
                <S.TabWriter1>{el.writer}</S.TabWriter1>
                <S.TabDate1>
                  {el.createdAt.replaceAll("-", ".").split("T")[0]}
                </S.TabDate1>
              </S.BodyTab1>
            ))}
          </S.WrapperBody>
          <div>
            {/* <div class="wrapper__footer">
            <div class="footer__left"></div>
            <div class="footer__pagenum"></div>
            <div class="footer__pagenum"></div>
            <div class="footer__right"></div> */}
            <S.CreatButton onClick={props.CreatePageBtn}>
              게시물 등록하기
            </S.CreatButton>
          </div>
        </S.Wrapper>
      </S.Container>
    </>
  );
}
