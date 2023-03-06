import { DateOption, PriceOption } from "../../types/select";
import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import { dateOptions, priceOptions } from "../../const/selectOptions";
import { driversLicenseOptions, jobTypeOptions } from "../../const/filterOptions";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import FilterComponent from "../../components/Filters/FilterComponent";
import FiltersBar from "../../components/Filters/FiltersBar";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import Loader from "../../components/Loader/Loader";
import LoginForm from "./LoginForm";
import RegisterForm from "../Register/RegisterForm";
import StyledModal from "../../components/StyledModal/StyledModal";
import { sortSelect } from "../../utils/select";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {
  const [toggle, setToggle] = useState(false);
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);

  const [selectedTypeOption, setSelectedTypeOption] = useState(jobTypeOptions[0]);
  const [selectedLicenseOption, setSelectedLicenseOption] = useState(driversLicenseOptions[0]);
  const [selectedDateOption, setSelectedDateOption] = useState<DateOption>({
    value: "",
    label: "Starting date",
  });
  const [selectedPriceOption, setSelectedPriceOption] = useState<PriceOption>({
    value: "",
    label: "Salary",
  });

  const { data, isLoading } = useJobs();
  const jobs = data || [];

  const handleTypeChange = (option: typeof jobTypeOptions[number]) => {
    setSelectedTypeOption(option);
  };

  const handleDriverChange = (option: typeof driversLicenseOptions[number]) => {
    setSelectedLicenseOption(option);
  };

  const handleClearFilters = () => {
    setSelectedLicenseOption(driversLicenseOptions[0]);
    setSelectedTypeOption(jobTypeOptions[0]);
    setSelectedDateOption({
      value: "",
      label: "Starting date",
    });
    setSelectedPriceOption({
      value: "",
      label: "Salary",
    });
  };

  const handleDateSortChange = (selectedOption: DateOption | null) => {
    setSelectedDateOption(selectedOption || { value: "", label: "Starting date" });
    setSelectedPriceOption({ value: "", label: "Salary" });
  };

  const handlePriceSortChange = (selectedOption: PriceOption | null) => {
    setSelectedPriceOption(selectedOption || { value: "", label: "Salary" });
    setSelectedDateOption({ value: "", label: "Starting date" });
  };

  const handleRegisterToggle = () => {
    setRegisterOpen((prevOpen) => !prevOpen);
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

  const handleToggleLoginForm = () => {
    setLoginFormOpen((prevOpen) => !prevOpen);
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
        <Button onClick={handleRegisterToggle} title="Register" greyVariant />
        <Button onClick={handleToggleLoginForm} title="Log In" greyVariant />
        <Button onClick={handleToggleAdForm} title="Post a job" greyVariant={false} />
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
        <Button onClick={handleClearFilters} title="clear filters" greyVariant />
      </FiltersBar>
      <JobsContainer>
        {sortedJobs.map((job, index) => (
          <JobCard key={index} job={job} onClick={handleToggleApplicationForm} />
        ))}
      </JobsContainer>
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
