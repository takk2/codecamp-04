import MapsLoadPage from "../../../commons/mapsLoad/mapsLoad";
import * as D from "./ProductDetail.styles";

export default function ProductDetailPageUI(props) {
  return (
    <>
      <D.Container>
        <D.Wrapper>
          <D.WrapperHeader>
            <D.WrapperHeaderTitle>
              {props.data?.fetchUseditem.name}
            </D.WrapperHeaderTitle>
            <D.UserIcon src="/images/avatar.png" />
            <D.WrapperHeaderUser>
              <D.Date>
                {
                  props.data?.fetchUseditem.createdAt
                    .replaceAll("-", ".")
                    .split("T")[0]
                }
              </D.Date>
              <D.UserName> {props.data?.fetchUseditem.seller.name} </D.UserName>
            </D.WrapperHeaderUser>
          </D.WrapperHeader>
          <D.Line></D.Line>
          <D.WrapperBody>
            <D.WrapperBodyContentBox>
              <D.WrapperBodyImgBox
                src={`https://storage.googleapis.com/${props.data?.fetchUseditem.images[0]}`}
              />
              <D.WrapperBodyContents>
                {props.data?.fetchUseditem.contents}
              </D.WrapperBodyContents>
            </D.WrapperBodyContentBox>
          </D.WrapperBody>
          <MapsLoadPage data={props.data} />
          <D.WrapperFooter>
            <D.WrapperBtn>
              <D.WrapperBtn1 onClick={props.onClickListBtn}>
                목록으로
              </D.WrapperBtn1>
              <D.WrapperBtn2 onClick={props.onClickEditBtn}>
                수정하기
              </D.WrapperBtn2>
              <D.WrapperBtn3 onClick={props.Delete}>삭제하기</D.WrapperBtn3>
            </D.WrapperBtn>
          </D.WrapperFooter>
        </D.Wrapper>
      </D.Container>
    </>
  );
}
