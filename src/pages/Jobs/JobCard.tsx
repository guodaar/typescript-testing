import {
  borderRadius,
  lightGrey,
  lighterBlue,
  mainBgColor,
  mediumGrey,
  smallBorderRadius,
} from "../../const/styles";
import { generatePath, useNavigate } from "react-router-dom";

import Button from "../../components/Button/Button";
import { JOB_AD_PATH } from "../../routes/const";
import { Job } from "../../types/job";
import { addHyphen } from "../../utils/string";
import { formatDate } from "../../utils/date";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";

interface JobCardProps {
  job: Job;
  onClick: () => void;
}

const JobCard = ({ job, onClick }: JobCardProps) => {
  const navigate = useNavigate();
  const navigateToJobAd = (id: string) => {
    const path = generatePath(JOB_AD_PATH, { id });
    navigate(path);
  };
  return (
    <Container>
      <LeftWrapper>
        <img src={job.image_url} alt="company logo" />
      </LeftWrapper>
      <MiddleWrapper>
        <Title onClick={() => navigateToJobAd(job.id.toString())}>
          {job.title} <span>{addHyphen(job.type)}</span>
        </Title>
        <Details>
          <p>
            Driver's license required: <span>{job.has_drivers_license ? "yes" : "no"}</span>
          </p>
          <p>
            Starting from: <span>{formatDate(job.starting_from)}</span>
          </p>
        </Details>
        <Description>{job.description}</Description>
      </MiddleWrapper>
      <RightWrapper>
        <Price>€{job.price}</Price>
        <Button onClick={onClick} title="apply" />
      </RightWrapper>
    </Container>
  );
};
export default JobCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  box-shadow: rgba(201, 200, 206, 0.6) 0px 2px 8px 0px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
    align-items: center;
  }
`;

const LeftWrapper = styled.div`
  display: flex;

  img {
    width: 100px;
    height: 100px;
    border-radius: ${borderRadius};
    object-fit: cover;
  }
`;

const MiddleWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;

  :hover {
    cursor: pointer;
  }

  span {
    font-size: 0.8rem;
    color: ${mainBgColor};
    background-color: ${lightGrey};
    border-radius: ${smallBorderRadius};
    padding: 3px;
  }
`;

const Details = styled.div`
  display: flex;
  gap: 12px;
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

const Description = styled.p`
  font-size: 0.9rem;
  color: ${mediumGrey};
  margin-top: 6px;

  @media (max-width: ${screenSize.medium}) {
    text-align: center;
  }
`;

const Price = styled.p`
  font-size: 1.7rem;
`;
