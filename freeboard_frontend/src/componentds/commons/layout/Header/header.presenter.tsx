import * as H from "./header.styles";

export default function HeaderUI() {
  return (
    <>
      <H.Header>
        <H.Logo src="/images/FoamCar_Logo.png" />
        <H.Navbox>
          <H.Navtab>홈</H.Navtab>
          <H.Navtab>출석체크</H.Navtab>
          <H.Navtab>세차장정보</H.Navtab>
          <H.Navtab>용품장터</H.Navtab>
          <H.Navtab>마이페이지</H.Navtab>
        </H.Navbox>
        <H.SignupBox>
          <H.Login>로그인</H.Login>
          <H.Signup>회원가입</H.Signup>
        </H.SignupBox>
      </H.Header>
    </>
  );
}
