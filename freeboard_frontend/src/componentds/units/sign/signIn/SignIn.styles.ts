import styled from "@emotion/styled";
import HeaderUI from "../../../commons/layout/Header/header.presenter";

export const Container = styled.div`
  width: 384px;
  height: 800px;
  margin: 0 auto;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 300px;
  height: 170px;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  width: 384px;
  height: 30px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding-left: 10px;
  font-size: 20px;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-bottom: 2px solid black;
  outline: none;
  ::placeholder {
    color: #bdbdbd;
  }
`;

export const Radio__Wrapper = styled.div`
  width: 384px;
  height: 24px;
  margin-top: 20px;
  /* display: flex;   */
`;

export const Radio = styled.input`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const StayLogin = styled.label`
  width: 111px;
  height: 24px;
  margin-left: 20px;
  font-size: 20px;
  line-height: 24px;
`;

export const SignInBtn = styled.button`
  width: 384px;
  height: 50px;
  margin-top: 50px;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  :hover {
    background-color: #5882fa;
    color: white;
  }
`;

export const SignUpBtn = styled.button`
  width: 384px;
  height: 50px;
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  :hover {
    background-color: #5882fa;
    color: white;
  }
`;
