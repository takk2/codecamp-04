import MyformUI from "./Myform.persenter";
import { FormValues } from "./Myform.types";
export default function Myform() {
  function onClickLogIn(data: FormValues) {
    console.log(data);
    // loginUser API요청하기
  }

  return <MyformUI onClickLogIn={onClickLogIn} />;
}
