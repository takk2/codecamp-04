import * as A from "./SignIn.styles";
import Button01 from "../../../commons/buttons/01/Button01";

export default function SignInPageUI(props: any) {
  return (
    <>
      <A.Container>
        <form onSubmit={props.handleSubmit(props.onClickLogin)}>
          <A.Logo src="/images/FoamCar_Logo.png" />
          {/* <A.Input type="text" props.register={props.register("Email")} />
          <A.Input type="password" props.register={props.register("Password")} />  */}
          <A.Input
            type="text"
            placeholder="이메일"
            {...props.register("email")}
          />
          <div>{props.formState.errors.email?.message}</div>
          <A.Input
            type="password"
            placeholder="비밀번호"
            {...props.register("password")}
          />
          <div>{props.formState.errors.password?.message}</div>
          <A.Radio__Wrapper>
            <A.Radio type="checkbox" />
            <A.StayLogin>로그인 상태 유지하기</A.StayLogin>
          </A.Radio__Wrapper>
          <Button01
            type="submit"
            name="로그인"
            isValid={props.formState.isValid}
          />
          {/* <button type="submit">로그인</button> */}
          {/* <A.SignUpBtn>회원가입</A.SignUpBtn> */}
        </form>
      </A.Container>
    </>
  );
}
