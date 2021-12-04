import * as M from "./ProductWrite.styles";

export default function ProductWriteUI() {
  return (
    <>
      <M.Wrapper>
        <M.Header>상품 등록</M.Header>
        <M.Body>
          상품명:
          <M.Body__ProductName placeholder="상품의 이름을 입력해주세요" />
          상세설명:<M.Body__Contents></M.Body__Contents>
          상품가격:
          <M.Body__Price placeholder="희망가격을 입력해주세요" />
          상품 사진<M.Body__Fileupload></M.Body__Fileupload>
          거래 위치<M.Body__Maps></M.Body__Maps>
          <M.SubmitBtn>등록하기</M.SubmitBtn>
        </M.Body>
      </M.Wrapper>
    </>
  );
}
