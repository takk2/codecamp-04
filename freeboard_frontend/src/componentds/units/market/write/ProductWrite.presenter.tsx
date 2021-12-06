import * as M from "./ProductWrite.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { v4 as uuidv4 } from "uuid";

export default function ProductWriteUI(props) {
  return (
    <>
      <M.Wrapper>
        <M.Header>상품 등록</M.Header>
        <M.Body>
          <M.Body__InputWrapper1>
            <M.InputBox
              id="outlined-password-input"
              label="상품명"
              type="text"
              autoComplete="current-password"
              placeholder="상품의 이름을 적어주세요."
              name="name"
              onChange={props.onChangeMyInputs}
            />
            <M.InputBox
              id="outlined-password-input"
              label="가격"
              type="text"
              autoComplete="current-password"
              placeholder="가격의 단위는 '₩'입니다."
              name="price"
              onChange={props.onChangeMyInputs}
            />
          </M.Body__InputWrapper1>
          <M.Body__InputWrapper2>
            <M.MaxInputBox
              id="outlined-password-input"
              label="태그"
              type="text"
              autoComplete="current-password"
              placeholder="상품을 태그로 표현해주세요."
              name="tags"
              onChange={props.onChangeMyInputs}
            />
            <M.MaxInputBox
              id="outlined-password-input"
              label="한줄소개"
              type="text"
              autoComplete="current-password"
              placeholder="상품의 정보를 한줄로 적어주세요."
              name="remarks"
              onChange={props.onChangeMyInputs}
            />
          </M.Body__InputWrapper2>
          <M.Body__Contents
            id="outlined-multiline-static"
            label="상세정보"
            multiline
            rows={15}
            placeholder="판매하려는 상품의 상태와 정보를 적어주세요."
            name="contents"
            onChange={props.onChangeMyInputs}
          />
          상품 사진
          <M.Body__Fileupload>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchBoard.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </M.Body__Fileupload>
          거래 위치<M.Body__Maps></M.Body__Maps>
          <M.SubmitBtn onClick={props.onClickSubmitBtn}>등록하기</M.SubmitBtn>
        </M.Body>
      </M.Wrapper>
    </>
  );
}
