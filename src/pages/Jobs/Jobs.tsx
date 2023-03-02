import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import {
  driversLicenseOptions,
  jobTypeOptions,
} from "../../const/filterOptions";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import FilterComponent from "../../components/Filters/FilterComponent";
import FiltersBar from "../../components/Filters/FiltersBar";
import { Job } from "../../types/job";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import StyledModal from "../../components/StyledModal/StyledModal";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {
  const [selectedTypeOption, setSelectedTypeOption] = useState(
    jobTypeOptions[0]
  );
  const [selectedLicenseOption, setSelectedLicenseOption] = useState(
    driversLicenseOptions[0]
  );
  const [toggle, setToggle] = useState(false);
  const { data: jobs, isLoading } = useJobs();
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);

  const handleToggleAdForm = () => {
    setAdFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleFilters = () => {
    setToggle(!toggle);
  };

  const handleClearFilters = () => {
    setSelectedLicenseOption(driversLicenseOptions[0]);
    setSelectedTypeOption(jobTypeOptions[0]);
  };

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  const handleTypeChange = (option: typeof jobTypeOptions[number]) => {
    setSelectedTypeOption(option);
  };

  const handleDriverChange = (option: typeof driversLicenseOptions[number]) => {
    setSelectedLicenseOption(option);
  };

  const filteredByJobType: Job[] = jobs.filter(
    (job) => job.type === selectedTypeOption.value
  );

  const filteredByDriversLicense: Job[] = jobs.filter(
    (job) =>
      selectedLicenseOption.value === null ||
      job.has_drivers_license === selectedLicenseOption.value
  );

  console.log(filteredByDriversLicense);

  // const filteredJobs: Job[] = filteredByJobType.length
  //   ? filteredByJobType
  //   : jobs;

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <TopContainer>
        <Button
          greyVariant={true}
          onClick={handleToggleFilters}
          title="filter jobs"
        />
        <Button
          greyVariant={false}
          onClick={handleToggleAdForm}
          title="post a job"
        />
      </TopContainer>
      <FiltersBar toggle={toggle}>
        <FilterComponent
          value={selectedTypeOption}
          onChange={handleTypeChange}
          options={jobTypeOptions}
          controlText="Job type"
        />
        <FilterComponent
          value={selectedLicenseOption}
          onChange={handleDriverChange}
          options={driversLicenseOptions}
          controlText="Driver's license"
        />
        <Button
          greyVariant={true}
          onClick={handleClearFilters}
          title="clear filters"
        />
      </FiltersBar>
      <JobsContainer>
        {filteredByDriversLicense.map((job, index) => (
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
  align-items: center;
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
