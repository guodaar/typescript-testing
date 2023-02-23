import { useJobs } from "../../hooks/jobsHooks";
import JobCard from "./JobCard";
import styled from "styled-components";

const Jobs = () => {
  const { data } = useJobs();
  const jobs = data || [];
  console.log(jobs);

  return (
    <Container>
      {jobs.map((job: any) => (
        <JobCard key={job.id} job={job} />
      ))}
    </Container>
  );
};

export default Jobs;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
`;
