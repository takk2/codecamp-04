import styled from "@emotion/styled";
import { LikeOutlined } from "@ant-design/icons";
import ReactPlayer from "react-player/youtube";

export const Container = styled.div`
  width: 1200px;
  height: auto;
  padding: 20px 102px 80px 102px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px 2px #eaeaea;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const Wrapper = styled.div`
  width: 996px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const WrapperHeader = styled.div`
  width: 996px;
  height: 50px;
  display: flex;
  /* justify-content: flex-end; */
  /* padding-right: 15px; */
`;

export const WrapperHeaderTitle = styled.div`
  margin-left: 20px;
  width: 900px;
  font-size: 40px;
  line-height: 60px;
  font-weight: 700;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const WrapperHeaderUser = styled.div`
  width: 100px;
  display: flex;
  flex-direction: column;
  /* padding-top: 0px; */
  padding-right: 15px;
`;

export const UserIcon = styled.img`
  width: 50px;
  height: 50px;
  color: #eaeaea;
  margin-right: 15px;
`;

export const Date = styled.div`
  /* margin-left: 0px; */
  margin-top: 3px;
  font-size: 15px;
  width: auto;
  height: 20px;
`;

export const UserName = styled.div`
  margin-top: 5px;
  font-size: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const Line = styled.div`
  width: 996px;
  height: 2px;
  border: 1px solid #eaeaea;
  margin-top: 7px;
`;

export const WrapperBody = styled.div`
  width: 996px;
  height: auto;
  margin-top: 10px;
`;

export const WrapperBodyContentBox = styled.div`
  width: 996px;
  height: 480px;
  display: flex;
  justify-content: space-between;
`;

export const WrapperBodyImgBox = styled.div`
  width: 580px;
  height: 480px;
  border: 1px solid black;
`;

export const WrapperBodyContents = styled.div`
  width: 400px;
  height: 480px;
  border: 1px solid black;
  padding-top: 5px;
  padding-left: 10px;
  font-size: 20px;
`;

export const WrapperBodyVideobox = styled(ReactPlayer)`
  width: 486px;
  height: 240px;
  border: 1px solid black;
  margin-top: 120px;
  margin-left: 180px;
`;

export const WrapperFooter = styled.div`
  margin-top: 40px;
  background-color: violet;
`;

export const LikeBtn = styled(LikeOutlined)`
  font-size: 50px;
  margin-left: 470px;
  color: #ffd600;
`;

export const WrapperBtn = styled.div`
  width: 585px;
  height: 45px;
  margin-top: 60px;
  margin-left: 200px;
  display: flex;
  align-items: center;
`;

export const WrapperBtn1 = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  background-color: white;
`;

export const WrapperBtn2 = styled.button`
  width: 179px;
  height: 45px;
  margin-left: 24px;
  margin-right: 24px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  background-color: white;
`;

export const WrapperBtn3 = styled.button`
  width: 179px;
  height: 45px;
  border: 1px solid #bdbdbd;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-weight: 500;
  background-color: white;
`;

export const WrapperCmts = styled.div`
  width: 1000px;
  height: 760px;
  margin-top: 350px;
  border-top: 1px solid #bdbdbd;
  /* padding-left: 200px; */
`;
