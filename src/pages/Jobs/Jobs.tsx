import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import { useContext, useState } from "react";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import Loader from "../../components/Loader/Loader";
import LoginForm from "./LoginForm";
import RegisterForm from "../Register/RegisterForm";
import StyledModal from "../../components/StyledModal/StyledModal";
import { UserContext } from "../../contexts/UserContext";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();
  const { user } = useContext(UserContext);
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const handleRegisterToggle = () => {
    setRegisterOpen((prevOpen) => !prevOpen);
  };

  const handleToggleAdForm = () => {
    setAdFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleLoginForm = () => {
    setLoginFormOpen((prevOpen) => !prevOpen);
  };

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <Loader isLoading={isLoading} />
      <TopContainer>
        {user ? (
          <Button onClick={handleToggleAdForm} title="Post a job" greyVariant />
        ) : (
          <>
            <Button onClick={handleRegisterToggle} title="Register" greyVariant />
            <Button onClick={handleToggleLoginForm} title="Log In" greyVariant />
          </>
        )}
      </TopContainer>
      <JobsContainer>
        {jobs &&
          jobs.map((job, index) => (
            <JobCard key={index} job={job} onClick={handleToggleApplicationForm} />
          ))}
      </JobsContainer>
      <StyledModal modalSize="medium" modalIsOpen={adFormOpen} closeModal={handleToggleAdForm} />
      <StyledModal modalSize="medium" modalIsOpen={adFormOpen} closeModal={handleToggleAdForm}>
        <JobAdForm closeModal={handleToggleAdForm} />
      </StyledModal>
      <StyledModal
        modalSize="small"
        modalIsOpen={applicationFormOpen}
        closeModal={handleToggleApplicationForm}
      >
        <JobApplicationForm closeModal={handleToggleApplicationForm} />
      </StyledModal>
      <StyledModal modalSize="medium" modalIsOpen={registerOpen} closeModal={handleRegisterToggle}>
        <RegisterForm closeModal={handleRegisterToggle} />
      </StyledModal>
      <StyledModal modalSize="small" modalIsOpen={loginFormOpen} closeModal={handleToggleLoginForm}>
        <LoginForm closeModal={handleToggleLoginForm} />
      </StyledModal>
    </Container>
  );
};

export default Jobs;

const Container = styled.div`
  background-color: ${mainBgColor};
  margin: 50px 15vw;
  padding: 32px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${darkGrey};
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const JobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
`;
