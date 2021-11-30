import * as A from "./SignIn.styles";

export default function SignInPageUI() {
  return (
    <>
      <A.Container>
        <A.Logo src="/images/FoamCar_Logo.png" />
        <A.Input placeholder="아이디를 입력해주세요" />
        <A.Input placeholder="비밀번호를 입력해주세요" />
        <A.Radio__Wrapper>
          <A.Radio type="checkbox" />
          <A.StayLogin>로그인 상태 유지하기</A.StayLogin>
        </A.Radio__Wrapper>
        <A.SignInBtn>로그인하기</A.SignInBtn>
      </A.Container>
    </>
  );
}
