import { useRouter } from "next/router";
import { ComponentType, useEffect } from "react";

// eslint-disable-next-line react/display-name
// eslint-ignore
export const withAuth =
  <P extends {}>(Component: ComponentType<P>) =>
  (props: P) => {
    const router = useRouter();
    // const { accessToken } = useContext(GlobalContext);

    useEffect(() => {
      if (!localStorage.getItem("accessToken")) {
        alert("로그인 한 사람만 입장 가능합니다. 로그인을 해주세요!!");
        router.push("/23-04-login");
      }
    }, []);

    return <Component {...props} />;
  };
