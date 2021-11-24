import * as H from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <H.Header>
        <H.Logo>로고</H.Logo>
        <H.SignupBox>
          <H.Login>로그인</H.Login>
          <H.Signup>회원가입</H.Signup>
        </H.SignupBox>
      </H.Header>
    </>
  );
}
