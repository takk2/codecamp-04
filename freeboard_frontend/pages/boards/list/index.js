import {useQuery, gql} from "@apollo/client"
import { useRouter } from "next/router"
// import gql from 'graphql-tag'
import * as S from "../../../styles/list"

const FETCH_BOARDS = gql`
  query{
    fetchBoards {
      _id
      writer
      title
      createdAt
    }
  }
`

const FETCH_BOARDS_BEST = gql`
  query{
    fetchBoardsOfTheBest {
      title
      writer
      createdAt
      likeCount
    }
  }
`

// const router = useRouter()


export default function ListPage(){
  const{ data } = useQuery(FETCH_BOARDS);
  const{ data : bestdata} = useQuery(FETCH_BOARDS_BEST);

  const router = useRouter()
  const CreatePageBtn = () => {
    router.push('/boards/new')
  }

  function select(event) {
    router.push(`/boards/detail/${event.target.id}`);
  }
  

  return(
    <>
    <S.Container>
      <S.Wrapper>
        <S.WrapperHeader>
          <S.WrapperHeaderTitle>베스트 게시글</S.WrapperHeaderTitle>
          <S.WrapperHeaderBest>
          {bestdata?.fetchBoardsOfTheBest.map((el) => (
            <S.Best >
              <S.BestPhoto></S.BestPhoto>
              <S.BestTitle>{el.title}</S.BestTitle>
              <S.BestInfo>
                <S.InfoWriter>
                  <S.WriterUser>
                    <S.UserIcon></S.UserIcon>
                    <S.UserName>{el.writer}</S.UserName>
                  </S.WriterUser>
                  <S.WriteDate> Date : {(el.createdAt).replaceAll("-",".").split("T")[0]}</S.WriteDate>
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
          <S.FunctionSearch placeholder = "제목을 입력해주세요."></S.FunctionSearch>
          <S.FunctionDate placeholder = "YYYY. MM. DD ~ YYYY. MM. DD"></S.FunctionDate>
          <S.FunctionButton>검색하기</S.FunctionButton>      
        </S.WrapperFunction>
        <S.WrapperBody>
          <S.BodyTab>
            <S.TabNum>번호</S.TabNum>
            <S.TabTitle>제목</S.TabTitle>
            <S.TabWriter>작성자</S.TabWriter>
            <S.TabDate>날짜</S.TabDate>
          </S.BodyTab>
          {data?.fetchBoards.map((el , index) => (
          <S.BodyTab1 key={el._id}>
            <S.TabNum1>{10-index}</S.TabNum1>
            <S.TabTitle1 id={el._id} onClick={select}>{el.title}</S.TabTitle1>
            <S.TabWriter1>{el.writer}</S.TabWriter1>
            <S.TabDate1>{(el.createdAt).replaceAll("-",".").split("T")[0]}</S.TabDate1>
          </S.BodyTab1>
            ))}
        </S.WrapperBody>
        <div class="wrapper__footer">
          <div class="footer__left"></div>
          <div class="footer__pagenum"></div>
          <div class="footer__pagenum"></div>
          <div class="footer__right"></div>
          <S.CreatButton onClick={CreatePageBtn}>게시물 등록하기</S.CreatButton>
        </div>  
      </S.Wrapper>
    </S.Container>
    </>

  )
}