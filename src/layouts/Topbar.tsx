import { JOBS_PATH, USERS_PATH } from "../routes/const";
import { hoverTransition, lighterBlue, mediumBlue } from "../const/styles";

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
          <Button
            onClick={handleToggleLoginForm}
            title="log In"
            greyVariant={false}
          />
          <Button
            onClick={handleToggleRegisterForm}
            title="Register"
            greyVariant={false}
          />
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
        closeModal={handleToggleRegisterForm}
      >
        <RegisterForm closeModal={handleToggleRegisterForm} />
      </StyledModal>
    </Wrapper>
  );
};

export default Topbar;

const Wrapper = styled.div`
  display: flex;
  background-color: #fdffffe6;
  justify-content: space-between;
  align-items: center;
  padding: 8px 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 18px;
  height: 50px;
`;

const UserArea = styled.div`
  display: flex;
`;

const StyledLink = styled(Link)`
  color: ${lighterBlue};
  font-size: 1.1rem;
  text-transform: uppercase;
  padding: 8px;
  position: relative;
  font-weight: 600;

  &::after {
    content: "";
    position: absolute;
    width: 96%;
    transform: scaleX(0);
    height: 2px;
    bottom: 4px;
    left: 0;
    background-color: ${mediumBlue};
    transform-origin: bottom right;
    transition: transform ${hoverTransition};
  }

  &:hover {
    color: ${mediumBlue};
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const Logo = styled.p`
  font-size: 1.7rem;
  font-weight: 700;
  color: ${lighterBlue};
  text-transform: uppercase;
  transition: ${hoverTransition};

  &:hover {
    color: ${mediumBlue};
  }
`;

const LeftSide = styled.div`
  display: flex;
`;

const RightSide = styled.div`
  display: flex;
  gap: 3vw;
`;
