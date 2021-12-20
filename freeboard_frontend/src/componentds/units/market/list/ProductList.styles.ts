import styled from "@emotion/styled";

export const WrapperHeaderBest = styled.div`
  width: 1200px;
  height: 257px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
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

export const BestPhoto = styled.img`
  width: 282px;
  height: 120px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  /* background-color: skyblue; */
`;

export const BestTitle = styled.label`
  width: 282px;
  height: 27px;
  font-size: 21px;
  font-weight: 500;
  margin-left: 20px;
  margin-right: 20px;
  /* margin-top: 20px; */
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
  padding-top: 10px;
`;

export const Price = styled.label`
  width: 120px;
  height: 24px;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 24px;
  /* padding-left: 6px; */
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const WriteDate = styled.label`
  width: 220px;
  height: 18px;
  margin-top: 26px;
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  color: #828282;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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
