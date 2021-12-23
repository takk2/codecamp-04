import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import "react-quill/dist/quill.snow.css";

export const Wrapper = styled.form`
  width: 1000px;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  /* background-color: lightyellow; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.label`
  width: 100%;
  height: 70px;
  margin-top: 70px;
  margin-bottom: 40px;
  font-size: 40px;
  text-align: center;
  line-height: 70px;
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
  /* background-color: skyBlue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body__InputWrapper1 = styled.div`
  width: 100%;
  height: 60px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InputBox = styled(TextField)`
  width: 470px;
  font-size: 15px;
`;

export const Body__InputWrapper2 = styled.div`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const MaxInputBox = styled(TextField)`
  width: 100%;
  font-size: 15px;
  margin-bottom: 20px;
`;

export const Body__Fileupload = styled.div`
  width: 100%;
  height: 100px;
`;

export const Body__Maps = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000000;
`;

export const SubmitBtn = styled.button`
  width: 300px;
  height: 30px;
  margin-top: 100px;
`;
