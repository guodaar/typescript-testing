import Footer from "../components/Footer/Footer";
import { ReactNode } from "react";
import Topbar from "./Topbar";
import { screenSize } from "../const/mediaQueries";
import styled from "styled-components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Topbar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  min-height: 81vh;
  padding: 20px 40px;

  @media (max-width: ${screenSize.medium}) {
    padding: 0;
  }
`;
