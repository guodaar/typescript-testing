import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import RegisterForm from "../Register/RegisterForm";
import StyledModal from "../../components/StyledModal/StyledModal";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const handleRegisterToggle = () => {
    setRegisterOpen((prevOpen) => !prevOpen)
  }

  const handleToggleAdForm = () => {
    setAdFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <TopContainer>
      <Button
          greyVariant={true}
          onClick={handleRegisterToggle}
          title="Register"
        />
        <Button
          greyVariant={true}
          onClick={handleToggleAdForm}
          title="post a job"
        />
      </TopContainer>
      <JobsContainer>
        {jobs.map((job, index) => (
          <JobCard
            key={index}
            job={job}
            onClick={handleToggleApplicationForm}
          />
        ))}
      </JobsContainer>
      <StyledModal
        modalSize="medium"
        modalIsOpen={adFormOpen}
        closeModal={handleToggleAdForm}
      >
        <JobAdForm closeModal={handleToggleAdForm} />
      </StyledModal>
      <StyledModal
        modalSize="small"
        modalIsOpen={applicationFormOpen}
        closeModal={handleToggleApplicationForm}
      >
        <JobApplicationForm closeModal={handleToggleApplicationForm} />
      </StyledModal>
      <StyledModal
        modalSize="medium"
        modalIsOpen={registerOpen}
        closeModal={handleRegisterToggle}
        >
        <RegisterForm closeModal={handleRegisterToggle}/>
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
