import { Job } from "../types/job";

type Option = {
  value: string;
};

export const filterJobs = (jobs: Job[], selectedOption: Option): any => {
  jobs.filter((job: Job) => job.type === selectedOption.value);
};
