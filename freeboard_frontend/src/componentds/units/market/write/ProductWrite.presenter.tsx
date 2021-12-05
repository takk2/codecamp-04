import * as M from "./ProductWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";
import { IBoardCommentWriteProps } from "../../boardComment/write/BoardCommentWrite.types";

export default function ProductWriteUI(props) {
  return (
    <>
      <M.Wrapper>
        <M.Header>상품 등록</M.Header>
        <M.Body>
          <M.SubTitle>상품명:</M.SubTitle>
          <M.Body__ProductName placeholder="상품의 이름을 입력해주세요" />
          상세설명:<M.Body__Contents></M.Body__Contents>
          상품가격:
          <M.Body__Price placeholder="희망가격을 입력해주세요" />
          상품 사진
          <div>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchBoard.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </div>
          거래 위치<M.Body__Maps></M.Body__Maps>
          <M.SubmitBtn>등록하기</M.SubmitBtn>
        </M.Body>
      </M.Wrapper>
    </>
  );
}
