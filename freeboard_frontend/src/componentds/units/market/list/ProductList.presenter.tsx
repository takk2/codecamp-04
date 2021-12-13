import { getDate } from "../../../../commons/libraries/utils";
import * as S from "./ProductList.styles";
import InfiniteScroll from "react-infinite-scroller";

export default function ProductListPageUI(props) {
  return (
    <>
      {/* {props.fetchUseditems?.fetchUseditems.map((el) => (
        <div key={el._id}>
          <span id={el._id} onClick={props.onClickTitle}>
            {el.name}
          </span>
          <span>{el.price}</span>
          <span>{el.remarks}</span>
          <span>{getDate(el.createdAt)}</span>
          <span>{el.pickedCount}</span>
        </div>
      ))} */}

      <InfiniteScroll pageStart={0} loadMore={props.scroll} hasMore={true}>
        {/* <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        > */}
        <S.WrapperHeaderBest>
          {props.fetchUseditems?.fetchUseditems.map((el) => (
            <S.Best key={el._id}>
              <S.BestPhoto
                src={`https://storage.googleapis.com/${el.images[0]}`}
              ></S.BestPhoto>
              <S.BestTitle id={el._id} onClick={props.onClickTitle}>
                {el.name}
              </S.BestTitle>
              <S.BestInfo>
                <S.InfoWriter>
                  <S.WriterUser>
                    <S.Price>{el.price}원</S.Price>
                  </S.WriterUser>
                  <S.WriteDate>{el.remarks}</S.WriteDate>
                </S.InfoWriter>
                <S.Like>
                  <S.LikeIcon src="/images/Vector.png" />
                  <S.LikeCounter>{el.pickedCount}</S.LikeCounter>
                </S.Like>
              </S.BestInfo>
            </S.Best>
          ))}
        </S.WrapperHeaderBest>
        {/* </div> */}
      </InfiniteScroll>
    </>
  );
}
