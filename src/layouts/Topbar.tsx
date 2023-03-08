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

  const handleToggleRegisterForm = () => {
    setRegisterOpen((prevOpen) => !prevOpen);
  };

  return (
    <Wrapper>
      <LeftSide>
        <Logo as={Link} to={JOBS_PATH}>
          Tech Jobs.
        </Logo>
      </LeftSide>
      <RightSide>
        <MenuContainer>
          <StyledLink to={JOBS_PATH}>Jobs</StyledLink>
          <StyledLink to={USERS_PATH}>Users</StyledLink>
        </MenuContainer>
        <UserArea>
          <Button onClick={handleToggleLoginForm} title="log In" greyVariant />
          <Button
            onClick={handleToggleRegisterForm}
            title="Register"
            greyVariant
          />
        </UserArea>
      </RightSide>
      <StyledModal
        modalSize="small"
        modalIsOpen={loginFormOpen}
        closeModal={handleToggleLoginForm}
        title="Login"
        symbol="👋"
      >
        <LoginForm closeModal={handleToggleLoginForm} />
      </StyledModal>
      <StyledModal
        modalSize="medium"
        modalIsOpen={registerOpen}
        closeModal={handleToggleRegisterForm}
        title="Enter your details to register"
        symbol="👇"
      >
        <RegisterForm closeModal={handleToggleRegisterForm} />
      </StyledModal>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fdffffe6;
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
  color: #261ea7;
  font-size: 1.1rem;
  text-transform: none;
  text-transform: uppercase;
  padding: 8px 8px;
  border-bottom: 2px solid transparent;
  font-weight: 600;

  &:hover {
    border-bottom: 2px solid #261ea7;
    color: #261ea7;
  }
`;

const Logo = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: #261ea7;
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
