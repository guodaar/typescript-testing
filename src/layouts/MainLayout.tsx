import { ReactNode } from "react";
import Topbar from "./Topbar";
import styled from "styled-components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Topbar children={undefined} />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default MainLayout;

const Wrapper = styled.div`
  padding: 20px 40px;
`;