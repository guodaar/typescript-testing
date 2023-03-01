import {
  borderRadius,
  darkGrey,
  lightGrey,
  mainBgColor,
} from "../../const/styles";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import JobAddForm from "./JobAddForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import StyledModal from "../../components/StyledModal/StyledModal";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {

  const { data: jobs, isLoading } = useJobs();
  const [ adFormOpen, setAdFormOpen ] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  
  const handleToggleAdForm = () => {
    setAdFormOpen(prevOpen => !prevOpen)
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
  console.log(jobs);

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <TopContainer>
        <Button greyVariant={true} onClick={handleToggleAdForm} title="post a job" />
      </TopContainer>
      <JobsContainer>
        {jobs.map((job, index) => (
          <JobCard key={index} job={job} onClick={handleToggleApplicationForm} />
        ))}
      </JobsContainer>
      <StyledModal
        modalSize="medium"
        modalIsOpen={adFormOpen}
        closeModal={handleToggleAdForm}
      >
        <JobAddForm closeModal={handleToggleAdForm} />
      </StyledModal>
      <StyledModal
        modalSize="small"
        modalIsOpen={applicationFormOpen}
        closeModal={handleToggleAdForm}
      >
        <JobApplicationForm closeModal={handleToggleApplicationForm} />
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
