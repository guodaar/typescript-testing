import { Job, NewJob } from "../types/job";

import axios from "axios";

const JOBS_API_URL = "https://testapi.io/api/guodaarr/resource/jobsServer";

export const fetchJobs = async (): Promise<Job[]> => {
  const response = await axios.get(JOBS_API_URL);
  return response.data.data;
};

export const createJob = async (newJob: NewJob): Promise<Job> => {
  const response = await axios.post(JOBS_API_URL, newJob);
  return response.data;
};
