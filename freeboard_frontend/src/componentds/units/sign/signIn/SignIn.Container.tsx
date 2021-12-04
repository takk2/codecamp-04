import SignInPageUI from "./SignIn.presenter";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useContext, useState } from "react";
import {
  IMutation,
  IMutationLoginUserArgs,
} from "../../../../../src/commons/types/generated/types";
import { GlobalContext } from "../../../../../pages/_app";
import { LOGIN_USER } from "./SignIn.query";

export default function SignInPage() {
  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();

  const [myEmail, setMyEmail] = useState("");
  const [myPassword, setMyPassword] = useState("");
  const [loginUser] = useMutation<
    Pick<IMutation, "loginUser">,
    IMutationLoginUserArgs
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
    localStorage.setItem(
      "accessToken",
      result.data?.loginUser.accessToken || ""
    );
    setAccessToken(result.data?.loginUser.accessToken || ""); // 여기서 setAccessToken 필요! (글로벌 스테이트에...)

    // const result = await axios.get("koreanjson.com/posts/1") 이러한 방식으로 우너하는 곳에서 useApolloClient 사용
    // const result = fetchUserLoggedIn()
    // setUserInfo(result.data?.fetchUserLoggedIn)

    // 로그인 성공된 페이지로 이동시키기!
    router.push("/sign/success");
  }

  return (
    <SignInPageUI
      onClickLogin={onClickLogin}
      onChangeMyEmail={onChangeMyEmail}
      onChangeMyPassword={onChangeMyPassword}
    />
  );
}
