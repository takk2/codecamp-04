import { ReactChild } from "react";
import styled from "@emotion/styled";
import Header from "./header/header.conatiner";
import Banner from "./banner/banner.conatiner";
import Navigation from "./navigation/navigation.conatiner";
import Footer from "./footer/footer.conatiner";
import { useRouter } from "next/router";

const Wrapper = styled.div``;
const Body = styled.div``;
const BodyWrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.div`
  width: 200px;
  height: 700px;
  background-color: blue;
`;

const HIDDEN_HEADERS = ["/12-05-modal-address-stateprev"];

interface ILayoutProps {
  children: ReactChild;
}

export default function Layout(props: ILayoutProps) {
  const router = useRouter();
  console.log(router);

  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  return (
    <Wrapper>
      {!isHiddenHeader && <Header />}
      <Banner />
      <Navigation />
      <BodyWrapper>
        <Sidebar>sidebar!!!</Sidebar>
        <Body>{props.children}</Body>
      </BodyWrapper>
      <Footer />
    </Wrapper>
  );
}
