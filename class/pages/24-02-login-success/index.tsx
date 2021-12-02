import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import { IQuery } from "../../src/commons/types/generated/types";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
import { GlobalContext } from "../_app";

function LoginSuccessPage() {
  const { userInfo } = useContext(GlobalContext);
  console.log("dddd", userInfo);

  return (
    <>
      <div>로그인에 성공하였습니다.!!!</div>
      <div>{userInfo.name}님 환영합니다!!!</div>
    </>
  );
}

export default withAuth(LoginSuccessPage);
