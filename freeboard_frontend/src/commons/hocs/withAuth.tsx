import { useRouter } from "next/router";
import { useEffect } from "react";

// eslint-disable-next-line react/display-name
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  // const { accessToken } = useContext(GlobalContext);

  useEffect(() => {
    if (!localStorage.getItem("refreshToken")) {
      alert("로그인이 필요합니다.");
      router.push("/sign/signin");
    }
  }, []);

  return <Component {...props} />;
};
