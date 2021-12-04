import SignUpUIPage from "./SignUp.presenter";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "./SignUp.query";
import { ChangeEvent, useState } from "react";
import { useRouter } from "next/router";

export default function SignUpPage() {
  const router = useRouter();

  const [createUser] = useMutation(CREATE_USER);

  const [myInputs, setMyInputs] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [passwordCheck, setMyPasswordCheck] = useState("");

  const [myEmailError, setMyEmailError] = useState("");
  const [myNameError, setMyNameError] = useState("");
  const [myPasswordError, setMyPasswordError] = useState("");
  const [myPasswordChk, setMyPasswordChk] = useState("");

  function onChangeMyInputs(event: ChangeEvent<HTMLInputElement>) {
    // if (!/\w+@\w+\.\w+/.test(myInputs.email)) {
    //   setMyEmailError("이메일 형식이 올바르지 않습니다.");
    // }
    setMyInputs({
      ...myInputs,
      [event.target.name]: event.target.value,
    });

    if (myInputs.email) setMyEmailError("");
    if (myInputs.name) setMyNameError("");
    if (myInputs.password) setMyPasswordError("");
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPasswordCheck(event.target.value);
    if (onChangeMyPassword) setMyPasswordChk("");
  }

  async function onClickBtn() {
    if (!/\w+@\w+\.\w+/.test(myInputs.email)) {
      setMyEmailError("이메일 형식이 올바르지 않습니다.");
    }
    if (!myInputs.email) {
      setMyEmailError("이메일을 입력해주세요.");
    }
    if (!myInputs.name) {
      setMyNameError("이름을 입력해주세요.");
    }
    if (!myInputs.password) {
      setMyPasswordError("비밀번호를 입력해주세요.");
    }
    if (myInputs.password !== passwordCheck) {
      setMyPasswordChk("비밀번호가 일치하지 않습니다.");
    }
    try {
      const result = await createUser({
        variables: { createUserInput: { ...myInputs } },
      });
    } catch (error) {
      console.log(error.message);
    }
    alert("회원가입에 성공하였습니다, 로그인 페이지로 이동합니다.");
    router.push("/sign/signin");
  }

  return (
    <SignUpUIPage
      onChangeMyInputs={onChangeMyInputs}
      onChangeMyPassword={onChangeMyPassword}
      onClickBtn={onClickBtn}
      myEmailError={myEmailError}
      myNameError={myNameError}
      myPasswordError={myPasswordError}
      myPasswordChk={myPasswordChk}
    />
  );
}
