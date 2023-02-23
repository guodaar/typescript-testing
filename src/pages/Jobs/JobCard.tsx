import styled from "styled-components";
interface JobCardProps {
  job: any;
}
const JobCard = ({ job }: JobCardProps) => {
  return <Container>{job.title}</Container>;
};
export default JobCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
`;
