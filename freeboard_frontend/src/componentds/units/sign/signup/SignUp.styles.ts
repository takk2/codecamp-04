import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 1200px;
  height: 1000px;
  margin: 0 auto;
  margin-top: 100px;
  /* background-color: yellow; */
  /* border: 1px solid black; */
`;

export const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
  /* background-color: skyblue; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.label`
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const SubTitle = styled.label`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Wrapper__Input = styled.div`
  width: 384px;
  height: 550px;
  /* background-color: blueviolet; */
`;

export const InputTitle = styled.label`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 25px;
  display: block;
  /* margin-bottom: 12px; */
`;

export const InputBox = styled.input`
  width: 384px;
  height: 30px;
  margin-top: 15px;
  /* margin-bottom: 30px; */
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

export const Noti = styled.div`
  height: 15px;
  padding-left: 10px;
  font-size: 12px;
  color: red;
`;

export const SubmitBtn = styled.button`
  width: 150px;
  height: 50px;
  background-color: white;
  border-radius: 5px;
  font-size: 15px;
  font-weight: 700;
  :hover {
    background-color: #81daf5;
    color: white;
  }
`;
