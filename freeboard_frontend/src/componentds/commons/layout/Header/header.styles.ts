import styled from "@emotion/styled";

export const Header = styled.div`
  height: 70px;
  background-color: white;
  margin-bottom: 20px;
  /* font-size: 40px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 1px solid #bdbdbd;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 130px;
  height: 60px;
  margin-bottom: 10px;
`;

export const Navbox = styled.div`
  width: 1000px;
  height: 80px;
  /* margin-top: 20px; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* background-color: yellow; */
`;

export const Navtab = styled.span`
  width: 200px;
  height: 70px;
  font-size: 20px;
  line-height: 70px;
  text-align: center;
  /* font-weight: 700; */
  :hover {
    color: #ffffff;
    /* font-weight: 600; */
    background-color: #5882fa;
    border-radius: 20px;
  }
`;

export const SignupBox = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
  /* background-color: skyblue; */
`;

export const Login = styled.button`
  width: 100px;
  height: 30px;
  font-size: 12px;
  /* background-color: yellow; */
  border: none;
  background-color: white;
  display: block;
  :hover {
    color: #5882fa;
  }
`;

export const Signup = styled.button`
  width: 100px;
  height: 30px;
  font-size: 12px;
  /* background-color: yellow; */
  border: none;
  background-color: white;
  display: block;
  :hover {
    color: #5882fa;
  }
`;
