import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  /* height: 2000px; */
  display: flex;
  flex-direction: column;
  padding-top: 80px;
  padding-bottom: 405px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  /* height: 2000px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const WrapperHeader = styled.div`
  width: 1200px;
  height: 339px;
  margin-top: 80px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  clear: both;
  /* background-color: violet; */
`;

export const WrapperHeaderTitle = styled.h1`
  font-size: 36px;
  font-weight: 700;
  padding-bottom: 40px;
  text-align: center;
`;

export const WrapperHeaderBest = styled.div`
  width: 1200px;
  height: 257px;
  display: flex;
  /* background-color: red; */
  /* flex-direction: row; */
  justify-content: space-between;
`;

export const Best = styled.div`
  width: 282px;
  height: 257px;
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  border-radius: 20px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
`;

export const BestPhoto = styled.div`
  width: 282px;
  height: 120px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: skyblue;
`;

export const BestTitle = styled.label`
  width: 282px;
  height: 27px;
  font-size: 18px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const BestInfo = styled.div`
  width: 282px;
  /* padding-top: 20px; */
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
`;

export const InfoWriter = styled.div`
  width: 20px;
  display: flex;
  flex-direction: column;
`;

export const WriterUser = styled.div`
  width: 120px;
  height: 24px;
  display: flex;
  padding-top: 20px;
`;

export const UserIcon = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
  padding-left: 2px;
  padding-top: 2px;
`;

export const UserName = styled.label`
  width: 100px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  padding-left: 6px;
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const WriteDate = styled.label`
  width: 103px;
  height: 18px;
  margin-top: 26px;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #828282;
`;

export const Like = styled.div`
  width: 27px;
  height: 50px;
  /* border: 1px solid black; */
  margin-right: 20px;
  padding-top: 20px;
`;

export const LikeIcon = styled.img`
  width: 20px;
  height: 18px;
  padding-top: 2px;
  padding-left: 3.5px;
`;

export const LikeCounter = styled.div`
  width: 27px;
  height: 24px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding-top: 6px;
  text-align: center;
`;

export const WrapperFunction = styled.div`
  width: 1200px;
  height: 52px;
  margin-top: 80px;
  /* padding-bottom: 80px; */
  display: flex;
  justify-content: space-between;
  /* background-color: yellow; */
`;

export const FunctionSearch = styled.input`
  width: 776px;
  height: 52px;
  padding-left: 19px;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

export const FunctionDate = styled.input`
  width: 244px;
  height: 52px;
  /* padding-left: 42px; */
  font-size: 16px;
  font-weight: 400;
  color: #bdbdbd;
  line-height: 24px;
  border: 1px solid #bdbdbd;
  text-align: center;
`;
export const FunctionButton = styled.button`
  width: 94px;
  height: 52px;
  background-color: #000000;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-align: center;
`;

export const WrapperBody = styled.div`
  width: 1200px;
  height: 583px;
  margin-top: 40px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  /* background-color: blue; */
`;

export const BodyTab = styled.div`
  width: 1200px;
  height: 52px;
  /* padding-top: 592px; */
  /* border-top: 1px solid #BDBDBD; */
  /* border-bottom: 1px solid #000000; */
  display: flex;
  justify-content: space-between;
`;

export const TabNum = styled.div`
  width: 50px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const TabTitle = styled.div`
  width: 200px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const TabWriter = styled.div`
  width: 60px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const TabDate = styled.div`
  width: 100px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const BodyTab1 = styled.div`
  width: 1200px;
  height: 52px;
  border-top: 1px solid #bdbdbd;
  /* border-bottom: 1px solid #000000; */
  display: flex;
  justify-content: space-between;
`;

export const TabNum1 = styled.div`
  width: 50px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const TabTitle1 = styled.div`
  width: 220px;
  height: 52px;
  padding-left: 70px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
  :hover {
    color: red;
  }
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const TabWriter1 = styled.div`
  width: 170px;
  height: 52px;
  padding-left: 35px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const TabDate1 = styled.div`
  width: 100px;
  height: 52px;
  color: 4f4f4f;
  font-size: 16px;
  line-height: 52px;
  text-align: center;
`;

export const CreatButton = styled.button`
  width: 171px;
  height: 52px;
  margin-top: 40px;
  margin-left: 1030px;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
  text-align: center;
  line-height: 24px;
  font-weight: 500; 
`;
