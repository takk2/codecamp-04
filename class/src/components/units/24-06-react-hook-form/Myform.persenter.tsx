import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/Input01";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { schema } from "./Myform.validations";

export default function MyformUI(props) {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(props.onClickLogIn)}>
      이메일: <Input01 type="text" bbb={register("myEmail")} />
      {/* 이메일: <input type="text" {...props.register("myEmail")} /> */}
      <div>{formState.errors.myEmail?.message}</div>
      비밀번호: <Input01 type="password" bbb={register("myPassword")} />
      {/* 비밀번호: <input type="password" {...props.register("myPassword")} /> */}
      <div>{formState.errors.myPassword?.message}</div>
      <Button01 type="submit" name="로그인하기" isValid={formState.isValid} />
      {/* <button isValid={props.formState.isValid}>로그인하기</button> */}
      {/* <button type="button" onClick={onClickmove}> 목록으로 이동하기</button> 버튼의 디폴트값이 submit이니까 폼에 들어가있으면 무조건 제출이 되어버린다. 그래서 기능을 실행하기 위해 버튼이라는 타입을 부여한다 */}
    </form>
  );
}
