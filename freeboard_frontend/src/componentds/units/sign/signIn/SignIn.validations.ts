import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup
    .string()
    .email("올바른 이메일을 입력해주세요.")
    .required("이메일은 필수값입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 4자리 이상으로 입력해주세요.")
    .max(20, "비밀번호는 20자리 이하로 입력해주세요.")
    .required("비밀번호는 필수값입니다."),
});
