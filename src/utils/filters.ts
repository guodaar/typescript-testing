import { Job } from "../types/job";
import { Option } from "../types/filter";

export const allFilteredJobs = (
  jobs: Job[],
  selectedTypeOption: Option,
  selectedLicenseOption: Option
) => {
  return jobs.filter(
    (job) =>
      job.type === selectedTypeOption.value &&
      (selectedLicenseOption.value === null ||
        job.has_drivers_license === selectedLicenseOption.value)
  );
};
