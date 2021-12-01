import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./Header/header.container";
import Banner from "./Banner/banner.container";
import Navigation from "./Navigation/navigation.container";
import Sidebar from "./Sidebar/sidebar.container";
import { useRouter } from "next/router";

const Wrapper = styled.div`
  width: auto;
  max-width: 1920px;
  margin: 0 auto;
`;

const BodyWrapper = styled.div`
  margin: 0 auto;
`;

const Body = styled.div``;

// const Sidebar = styled.div`
//   width: 200px;
//   height: 700px;
//   background-color: blue;
// `;

// const HIDDEN_HEADERS = [];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  // console.log(router);

  // const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      <Header />
      <Banner />
      <BodyWrapper>
        <Body>{props.children}</Body>
      </BodyWrapper>
    </Wrapper>
  );
}
