import { DateOption, PriceOption } from "../../types/select";
import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import { dateOptions, priceOptions } from "../../const/selectOptions";
import {
  sortSelectByDateAsc,
  sortSelectByDateDesc,
  sortSelectByPriceAsc,
  sortSelectByPriceDesc,
} from "../../utils/select";

import Button from "../../components/Button/Button";
import Emoji from "../../components/Emoji/Emoji";
import JobAdForm from "./JobAdForm";
import JobApplicationForm from "./JobApplicationForm";
import JobCard from "./JobCard";
import Select from "react-select";
import StyledModal from "../../components/StyledModal/StyledModal";
import StyledSelect from "../../components/Select/StyledSelect";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useState } from "react";

const Jobs = () => {
  const { data: jobs, isLoading } = useJobs();
  const [adFormOpen, setAdFormOpen] = useState(false);
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);
  const [selectedDateOption, setSelectedDateOption] = useState<DateOption>();
  const [selectedPriceOption, setSelectedPriceOption] = useState<PriceOption>();

  const handleToggleAdForm = () => {
    setAdFormOpen((prevOpen) => !prevOpen);
  };

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };

  const handleDateSortChange = (selectedOption: any) => {
    setSelectedDateOption(selectedOption);
    setSelectedPriceOption({ value: "", label: "Sort by salary" });
  };

  const handlePriceSortChange = (selectedOption: any) => {
    setSelectedPriceOption(selectedOption);
    setSelectedDateOption({ value: "", label: "Sort by starting date" });
  };

  if (isLoading) {
    return <div>Jobs are loading...</div>;
  }

  if (!isLoading && !jobs?.length) {
    return <div>There are no jobs added yet</div>;
  }

  let sortedJobs = [...jobs];

  if (selectedDateOption) {
    if (selectedDateOption.value === "descending") {
      sortedJobs = sortSelectByDateDesc(sortedJobs);
    } else if (selectedDateOption.value === "ascending") {
      sortedJobs = sortSelectByDateAsc(sortedJobs);
    }
  }

  if (selectedPriceOption) {
    if (selectedPriceOption.value === "highest") {
      sortedJobs = sortSelectByPriceDesc(sortedJobs);
    } else if (selectedPriceOption.value === "lowest") {
      sortedJobs = sortSelectByPriceAsc(sortedJobs);
    }
  }

  return (
    <Container>
      <Title>
        Vilnius Tech Jobs <Emoji symbol="🎉" />
      </Title>
      <TopContainer>
        <Button
          greyVariant={true}
          onClick={handleToggleAdForm}
          title="post a job"
        />
        <StyledSelect>
          <Select
            options={dateOptions}
            value={selectedDateOption}
            onChange={handleDateSortChange}
            placeholder="Sort by starting date"
          />
          <Select
            options={priceOptions}
            value={selectedPriceOption}
            onChange={handlePriceSortChange}
            placeholder="Sort by salary"
          />
        </StyledSelect>
      </TopContainer>
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
