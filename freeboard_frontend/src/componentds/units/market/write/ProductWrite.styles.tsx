import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 1000px;
  height: auto;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
  background-color: lightyellow;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.label`
  width: 100%;
  height: 50px;
  font-size: 40px;
`;

export const Body = styled.div`
  width: 100%;
  height: auto;
  background-color: skyBlue;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body__ProductName = styled.input`
  font-size: 20px;
`;

export const Body__Contents = styled.textarea`
  width: 100%;
  height: 400px;
`;

export const Body__Price = styled.input`
  font-size: 20px;
`;

export const Body__Fileupload = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000000;
`;

export const Body__Maps = styled.div`
  width: 100%;
  height: 300px;
  border: 1px solid #000000;
`;

export const SubmitBtn = styled.button`
  width: 300px;
  height: 30px;
`;
