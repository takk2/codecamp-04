import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserExampleArgs,
} from "../../src/commons/types/generated/types";
import { GlobalContext } from "../_app";

const LOGIN_USER = gql`
  mutation loginUserExample($email: String!, $password: String!) {
    loginUserExample(email: $email, password: $password) {
      accessToken
    }
  }
`;

export default function LogInPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUserExample">,
    IMutationLoginUserExampleArgs
  >(LOGIN_USER);

  function onChangeMyEmail(event: ChangeEvent<HTMLInputElement>) {
    setMyEmail(event.target.value);
  }

  function onChangeMyPassword(event: ChangeEvent<HTMLInputElement>) {
    setMyPassword(event.target.value);
  }

  async function onClickLogin() {
    console.log(myEmail, myPassword);
    const result = await loginUser({
      variables: {
        email: myEmail,
        password: myPassword,
      },
    });
    // localStorage.setItem(
    //   "accessToken",
    //   result.data?.loginUserExample.accessToken || ""
    // );
    localStorage.setItem("refreshToken", "true");
    setAccessToken(result.data?.loginUserExample.accessToken || ""); // 여기서 setAccessToken 필요! (글로벌 스테이트에...)

    // const result = await axios.get("koreanjson.com/posts/1") 이러한 방식으로 우너하는 곳에서 useApolloClient 사용
    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)

    // 로그인 성공된 페이지로 이동시키기!
    router.push("/30-02-login-success");
  }

  return (
    <>
      이메일: <input type="text" onChange={onChangeMyEmail} />
      비밀번호: <input type="password" onChange={onChangeMyPassword} />
      <button onClick={onClickLogin}>로그인하기!!!</button>
    </>
  );
}
