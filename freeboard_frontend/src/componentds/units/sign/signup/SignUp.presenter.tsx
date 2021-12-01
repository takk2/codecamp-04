import * as S from "./SignUp.styles";

export default function SignUpUIPage(props) {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Title>회원가입</S.Title>
        <S.SubTitle>세차인의 커뮤니티 폼카에 오신것을 환영합니다!</S.SubTitle>
        <S.Wrapper__Input>
          <S.InputTitle>- 이메일 -</S.InputTitle>
          <S.InputBox
            type="text"
            placeholder="이메일을 입력해주세요"
            name="email"
            onChange={props.onChangeMyInputs}
          />
          <S.Noti>{props.myEmailError}</S.Noti>
          <S.InputTitle>- 이름 -</S.InputTitle>
          <S.InputBox
            type="text"
            placeholder="이름을 입력해주세요"
            name="name"
            onChange={props.onChangeMyInputs}
          />
          <S.Noti>{props.myNameError}</S.Noti>
          <S.InputTitle>- 비밀번호- </S.InputTitle>
          <S.InputBox
            type={"password"}
            placeholder="비밀번호를 입력해주세요"
            name="password"
            onChange={props.onChangeMyInputs}
          />
          <S.Noti>{props.myPasswordError}</S.Noti>
          <S.InputTitle>- 비밀번호 확인 -</S.InputTitle>
          <S.InputBox
            type={"password"}
            placeholder="비밀번호를 한번 더 입력해주세요"
            onChange={props.onChangeMyPassword}
            // onChange={props.myPasswordChk}
          />
          <S.Noti>{props.myPasswordChk}</S.Noti>
        </S.Wrapper__Input>
        <S.SubmitBtn onClick={props.onClickBtn}>가입하기</S.SubmitBtn>
      </S.Wrapper>
    </S.Container>
  );
}
