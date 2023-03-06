import { JOBS_PATH, USERS_PATH } from "../routes/const";

import Button from "../components/Button/Button";
import { Link } from "react-router-dom";
import LoginForm from "../pages/Jobs/LoginForm";
import RegisterForm from "../pages/Register/RegisterForm";
import StyledModal from "../components/StyledModal/StyledModal";
import styled from "styled-components";
import { useState } from "react";

const Topbar = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  
  const handleToggleLoginForm = () => {
    setLoginFormOpen((prevOpen) => !prevOpen);
  };

  const handleRegisterToggle = () => {
    setRegisterOpen((prevOpen) => !prevOpen);
  };
  
  return (
    <Wrapper>
      <LeftSide>
        <Logo>Tech Jobs.</Logo>
      </LeftSide>
      <RightSide>
        <MenuContainer>
          <StyledLink to={JOBS_PATH}>Jobs</StyledLink>
          <StyledLink to={USERS_PATH}>Users</StyledLink>
        </MenuContainer>
        <UserArea>
          <Button onClick={handleToggleLoginForm} title="log In" greyVariant />
          <Button onClick={handleRegisterToggle} title="Register" greyVariant />
        </UserArea>
      </RightSide>
      <StyledModal
        modalSize="small"
        modalIsOpen={loginFormOpen}
        closeModal={handleToggleLoginForm}
      >
        <LoginForm closeModal={handleToggleLoginForm} />
      </StyledModal>
      <StyledModal
        modalSize="medium"
        modalIsOpen={registerOpen}
        closeModal={handleRegisterToggle}
      >
        <RegisterForm closeModal={handleRegisterToggle} />
      </StyledModal>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: transparent;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 8px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  height: 50px;
`;

const UserArea = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.1rem;
  text-transform: none;
  text-transform: uppercase;
  padding: 8px 8px;

  &:hover {
    border-bottom: 2px solid white;
  }
`;

const Logo = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-transform: uppercase;
`;

const LeftSide = styled.div`
  display: flex;
  padding-left: 32px;
`;

const RightSide = styled.div`
  display: flex;
  gap: 16px;
  padding-right: 32px;
`;