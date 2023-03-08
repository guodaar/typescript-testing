import {
  borderRadius,
  darkGrey,
  lightGrey,
  lighterBlue,
  mainBgColor,
  mediumGrey,
  smallBorderRadius,
} from "../../const/styles";

import Button from "../../components/Button/Button";
import JobApplicationForm from "../Jobs/JobApplicationForm";
import Loader from "../../components/Loader/Loader";
import StyledModal from "../../components/StyledModal/StyledModal";
import { addHyphen } from "../../utils/string";
import { formatDate } from "../../utils/date";
import { motion } from "framer-motion";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";
import { useJobs } from "../../hooks/jobsHooks";
import { useParams } from "react-router";
import { useState } from "react";

const JobAdPage = () => {
  const { id } = useParams();
  const [applicationFormOpen, setApplicationFormOpen] = useState(false);

  const { data, isLoading } = useJobs();
  const jobs = data || [];
  const job = jobs.find((job) => job.id === Number(id));

  const handleToggleApplicationForm = () => {
    setApplicationFormOpen((prevOpen) => !prevOpen);
  };
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container>
        {!isLoading && job ? (
          <>
            <TopContainer>
              <img src={job.image_url} alt="company logo" />
              <Title>
                {job.title} <span>{addHyphen(job.type)}</span>
              </Title>
              <Button title="apply" onClick={handleToggleApplicationForm} />
            </TopContainer>
            <InfoContainer>
              <Price>Salary: €{job.price}</Price>
              <Details>
                <p>
                  Driver's license required: <span>{job.has_drivers_license ? "Yes" : "No"}</span>
                </p>
                <p>
                  Starting from: <span>{formatDate(job.starting_from)}</span>
                </p>
              </Details>
              <p>{job.description}</p>
            </InfoContainer>
            <StyledModal
              modalSize="small"
              modalIsOpen={applicationFormOpen}
              closeModal={handleToggleApplicationForm}
            >
              <JobApplicationForm closeModal={handleToggleApplicationForm} />
            </StyledModal>
          </>
        ) : (
          <Loader isLoading={isLoading} />
        )}
      </Container>
    </motion.div>
  );
};

export default JobAdPage;

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
  gap: 24px;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    border-radius: ${borderRadius};
    object-fit: cover;
  }
  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
    button {
      width: 100%;
    }
  }
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 120px;
  gap: 24px;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
`;

const Title = styled.h2`
  text-transform: capitalize;
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  span {
    font-size: 0.8rem;
    color: ${mainBgColor};
    background-color: ${lightGrey};
    border-radius: ${smallBorderRadius};
    padding: 3px;
  }
`;

const Price = styled.p`
  font-size: 1.3rem;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: ${mediumGrey};
  font-size: 1rem;

  span {
    color: ${lighterBlue};
  }

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
