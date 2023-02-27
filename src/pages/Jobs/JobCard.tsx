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
  box-shadow: rgba(179, 183, 254, 0.6) 0px 2px 8px 0px;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 4px;
  gap: 16px;
`;
