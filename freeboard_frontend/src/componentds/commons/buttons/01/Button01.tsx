import styled from "@emotion/styled";
import { SignInBtn } from "../../../../componentds/units/sign/signin/SignIn.styles";

export interface IMyButtonProps {
  isValid: boolean;
}

export const MyButton = styled.button`
  background-color: ${(props: IMyButtonProps) =>
    props.isValid ? "yellow" : ""};
`;

export default function Button01(props: IMyButtonProps) {
  return (
    <SignInBtn type={props.type} isValid={props.isValid}>
      {props.name}
    </SignInBtn>
  );
}
