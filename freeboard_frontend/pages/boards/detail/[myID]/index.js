import {Container, Wrapper, WrapperHeader, WrapperHeaderTitle, WrapperHeaderUser, UserIcon, Date, UserName, 
        Line, WrapperBody, WrapperBodyContentBox, WrapperBodyImgBox, WrapperBodyContents, WrapperBodyVideobox}
        from '../../../../styles/details';
// import { useState } from "react";
import {useQuery, gql} from '@apollo/client'
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";


const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!){
    fetchBoard(boardId: $boardId){
      _id
      writer
      title
      contents
    }
  }
`

export default function Details(){
  const router = useRouter();
  
  const{data} = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.myID }  
  });

  console.log("ddd", data)

  return(
    <>
     <Container>
       <Wrapper>
        <WrapperHeader>
          <WrapperHeaderTitle>{data && data.fetchBoard.title}</WrapperHeaderTitle>
          <UserIcon>아이콘 들어갈자리</UserIcon>
          <WrapperHeaderUser>
            <Date>21.11.05</Date>
            <UserName> {data ? data.fetchBoard.writer:"qqq"} </UserName>
          </WrapperHeaderUser>
        </WrapperHeader>
        <Line></Line>
        <WrapperBody>
          <WrapperBodyContentBox>
            <WrapperBodyImgBox>이미지</WrapperBodyImgBox>
            <WrapperBodyContents>{data ?. fetchBoard.contents}</WrapperBodyContents>
          </WrapperBodyContentBox>
          <WrapperBodyVideobox>유튜브</WrapperBodyVideobox>
        </WrapperBody>
       </Wrapper>
     </Container>
    </>
  )

}

 {/* <FontAwesomeIcon icon={faCamera} />   아이콘 */}