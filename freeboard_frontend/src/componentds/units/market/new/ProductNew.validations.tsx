import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .required("상품명은 반드시 입력 해야하는 필수 항목 입니다."),

  remarks: yup
    .string()
    .required("한줄요약은 반드시 입력 해야하는 필수 항목 입니다."),

  price: yup
    .number()
    .typeError("")
    .required("판매가격은 반드시 입력 해야하는 필수 항목 입니다."),
});
