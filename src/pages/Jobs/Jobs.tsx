import {
  DateOption,
  DriversLicenseOption,
  JobOption,
  PriceOption,
} from "./types";
import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import {
  dateOptions,
  emptyDateOption,
  emptyDriversLicenseOption,
  emptyJobTypeOption,
  emptyPriceOption,
  priceOptions,
} from "./consts";
import { driversLicenseOptions, jobTypeOptions } from "./consts";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import FilterComponent from "../../components/Filters/FilterComponent";
import FiltersBar from "../../components/Filters/FiltersBar";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import Loader from "../../components/Loader/Loader";
import StyledModal from "../../components/StyledModal/StyledModal";
import { screenSize } from "../../const/mediaQueries";
import { sortSelect } from "./utils";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {
  const [toggle, setToggle] = useState(false);
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [selectedTypeOption, setSelectedTypeOption] =
    useState(emptyJobTypeOption);
  const [selectedLicenseOption, setSelectedLicenseOption] = useState(
    emptyDriversLicenseOption
  );
  const [selectedDateOption, setSelectedDateOption] = useState(emptyDateOption);
  const [selectedPriceOption, setSelectedPriceOption] =
    useState(emptyPriceOption);

  const { data, isLoading } = useJobs();
  const jobs = data || [];

  const handleTypeChange = (option: JobOption) => {
    setSelectedTypeOption(option);
  };

  const handleDriverChange = (option: DriversLicenseOption) => {
    setSelectedLicenseOption(option);
  };

  const handleDateSortChange = (selectedOption: DateOption) => {
    setSelectedDateOption(selectedOption);
  };

  const handlePriceSortChange = (selectedOption: PriceOption) => {
    setSelectedPriceOption(selectedOption);
  };

  const handleClearFilters = () => {
    setSelectedLicenseOption(emptyDriversLicenseOption);
    setSelectedTypeOption(emptyJobTypeOption);
    setSelectedDateOption(emptyDateOption);
    setSelectedPriceOption(emptyPriceOption);
  };

  const handleToggleAdForm = () => {
    setAdFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleFilters = () => {
    setToggle(!toggle);
  };

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  const sortedJobs = sortSelect(
    jobs,
    selectedDateOption,
    selectedPriceOption,
    selectedTypeOption,
    selectedLicenseOption
  );

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <Loader isLoading={isLoading} />
      <TopContainer>
        <Button onClick={handleToggleFilters} title="filter jobs" greyVariant />
        <Button
          onClick={handleToggleAdForm}
          title="Post a job"
          greyVariant={false}
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
        <FilterComponent
          options={dateOptions}
          value={selectedDateOption}
          onChange={handleDateSortChange}
          controlText="Sort by"
        />
        <FilterComponent
          options={priceOptions}
          value={selectedPriceOption}
          onChange={handlePriceSortChange}
          controlText="Sort by"
        />
        <Button
          onClick={handleClearFilters}
          title="clear filters"
          greyVariant
        />
      </FiltersBar>
      <JobsContainer>
        {sortedJobs.map((job, index) => (
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
  gap: 16px;
  color: ${darkGrey};

  @media (max-width: ${screenSize.medium}) {
    margin: 20px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
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
