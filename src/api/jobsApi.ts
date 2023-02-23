import axios from "axios";

const JOBS_API_URL = "https://testapi.io/api/rokasandreikenas/resource/jobs";

export const fetchJobs = async (): Promise<any> => {
  const response = await axios.get(JOBS_API_URL);
  return response.data.data;
};

export const createJob = async (newJob: any): Promise<any> => {
  const response = await axios.post(JOBS_API_URL, newJob);
  return response.data;
};
