import * as M from "./ProductNew.styles";
import Uploads01 from "../../../commons/uploads/01/Uploads01.container";
import { FormValues } from "./ProductNew.types";
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import MapsPage from "../../../commons/maps/Maps.container";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function ProductWriteUI(props: FormValues) {
  console.log(props.data?.fetchUseditem.name);
  return (
    <>
      <M.Wrapper
        onSubmit={props.handleSubmit(
          props.isEdit ? props.onClickUpdate : props.onClickSubmit
        )}
      >
        <M.Header>상품 {props.isEdit ? "수정" : "등록"}</M.Header>
        <M.Body>
          <M.Body__InputWrapper1>
            <input
              id="outlined-password-input"
              // label="상품명"
              type="text"
              autoComplete="current-password"
              placeholder="상품의 이름을 적어주세요."
              defaultValue={props.isEdit ? props.data?.fetchUseditem.name : ""}
              {...props.register("name")}
            />
            <div>{props.formState.errors.name?.message}</div>
            <input
              id="outlined-password-input"
              // label="가격"
              type="text"
              autoComplete="current-password"
              placeholder="가격의 단위는 '₩'입니다."
              defaultValue={props.isEdit ? props.data?.fetchUseditem.price : ""}
              {...props.register("price")}
            />
            <div>{props.formState.errors.price?.message}</div>
          </M.Body__InputWrapper1>
          <M.Body__InputWrapper2>
            <input
              id="outlined-password-input"
              // label="태그"
              type="text"
              autoComplete="current-password"
              placeholder="상품을 태그로 표현해주세요."
              defaultValue={props.isEdit ? props.data?.fetchUseditem.tags : ""}
              {...props.register("tags")}
            />
            <input
              id="outlined-password-input"
              // label="한줄소개"
              type="text"
              autoComplete="current-password"
              placeholder="상품의 정보를 한줄로 적어주세요."
              defaultValue={
                props.isEdit ? props.data?.fetchUseditem.remarks : ""
              }
              {...props.register("remarks")}
            />
            <div>{props.formState.errors.remarks?.message}</div>
          </M.Body__InputWrapper2>
          {props.isEdit ? (
            <ReactQuill
              onChange={props.handleChange}
              value={
                props.getValues("contents") ||
                props.data?.fetchUseditem.contents ||
                ""
              }
            />
          ) : (
            <ReactQuill onChange={props.handleChange} />
          )}
          {/* <M.Body__Contents
            id="outlined-multiline-static"
            label="상세정보"
            multiline
            rows={15}
            placeholder="판매하려는 상품의 상태와 정보를 적어주세요."
            name="contents"
            onChange={props.onChangeMyInputs}
          /> */}
          상품 사진
          <M.Body__Fileupload>
            {props.fileUrls.map((el, index) => (
              <Uploads01
                key={uuidv4()}
                index={index}
                fileUrl={el}
                defaultFileUrl={props.data?.fetchUseditem.images?.[index]}
                onChangeFileUrls={props.onChangeFileUrls}
              />
            ))}
          </M.Body__Fileupload>
          <MapsPage setPropsAddress={props.setPropsAddress} />
          <M.SubmitBtn>{props.isEdit ? "수정" : "등록"}하기</M.SubmitBtn>
        </M.Body>
      </M.Wrapper>
    </>
  );
}
