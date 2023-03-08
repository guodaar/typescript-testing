import { JOBS_PATH, USERS_PATH } from "../routes/const";
import { useContext, useState } from "react";

import Button from "../components/Button/Button";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoginForm from "../pages/Jobs/LoginForm";
import RegisterForm from "../pages/Register/RegisterForm";
import StyledModal from "../components/StyledModal/StyledModal";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";

const Topbar = () => {
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const { user, isLoggedIn, handleLogOut } = useContext(UserContext);


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
          <UserMenuFlayout>Flayout menu content</UserMenuFlayout>
          {isLoggedIn ? (
            <>
              <Avatar
                src={process.env.PUBLIC_URL + "/avatar.jpg"}
                alt="avatar"
              />
              <UserName>{user?.first_name}</UserName>
              <StyledArrow />
            </>
          ) : (
            <>
              <Button
                onClick={handleToggleLoginForm}
                title="log In"
                greyVariant
              />
              <Button
                onClick={handleToggleRegisterForm}
                title="Register"
                greyVariant
              />
            </>
          )}
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

const UserMenuFlayout = styled.div`
  position: absolute;
  top: 70px;
  right: 10px;
  width: 200px;
  background-color: gray;
  border-radius: 4px;
  padding: 8px;
  display: none;
  color: white;
  justify-content: center;
  align-items: center;
`;

const UserArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover ${UserMenuFlayout} {
    display: flex;
  }
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

const UserName = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  color: #2b2a2a;
`;

const StyledArrow = styled(FaAngleDown)`
  font-size: 1.2rem;
  color: #2b2a2a;
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
