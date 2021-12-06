import * as A from "./SignIn.styles";

export default function SignInPageUI(props) {
  return (
    <>
      <A.Container>
        <A.Logo src="/images/FoamCar_Logo.png" />
        <A.Input
          type="text"
          onChange={props.onChangeMyEmail}
          placeholder="아이디를 입력해주세요"
        />
        <A.Input
          type="password"
          onChange={props.onChangeMyPassword}
          placeholder="비밀번호를 입력해주세요"
        />
        <A.Radio__Wrapper>
          <A.Radio type="checkbox" />
          <A.StayLogin>로그인 상태 유지하기</A.StayLogin>
        </A.Radio__Wrapper>
        <A.SignInBtn onClick={props.onClickLogin}>로그인</A.SignInBtn>
        <A.SignUpBtn>회원가입</A.SignUpBtn>
      </A.Container>
    </>
  );
}