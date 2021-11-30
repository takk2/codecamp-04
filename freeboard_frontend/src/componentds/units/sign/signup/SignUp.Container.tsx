import SignUpUIPage from "./SignUp.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.query";
import { ChangeEvent, useState } from "react";

export default function SignUpPage() {
  const [createUser] = useMutation(CREATE_USER);

  const [myInputs, setMyInputs] = useState({
    email: "",
    name: "",
    password: "",
  });

  const [myEmailError, setMyEmailError] = useState("");
  const [myNameError, setMyNameError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myPasswordChk, setMyPasswordChk] = useState("");

  function onChangeMyInputs(event: ChangeEvent<HTMLInputElement>) {
    // console.log(setMyInputs);
    if (!/\w+@\w+\.\w+/.test(myInputs.email)) {
      setMyEmailError("이메일 형식이 올바르지 않습니다.");
    }

    if (myInputs.password) {
      setMyPasswordChk("비밀번호가 일치하지 않습니다.");
    }
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });
  }
  async function onClickBtn() {
    if (!myInputs.email) {
      setMyEmailError("이메일을 입력해주세요.");
    }
    if (!myInputs.name) {
      setMyNameError("이름을 입력해주세요.");
    }
    if (!myInputs.password) {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    try {
      const result = await createUser({
        variables: { createUserInput: { ...myInputs } },
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <SignUpUIPage
      onChangeMyInputs={onChangeMyInputs}
      onClickBtn={onClickBtn}
      myEmailError={myEmailError}
      myNameError={myNameError}
      myPasswordError={myPasswordError}
    />
  );
}
