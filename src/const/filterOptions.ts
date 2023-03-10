import { Option } from "../types/filter";

export const jobTypeOptions: Option[] = [
  { value: "", label: "All" },
  { value: "fullTime", label: "Full-time" },
  { value: "partTime", label: "Part-time" },
  { value: "freelance", label: "Freelance" },
];

export const driversLicenseOptions: Option[] = [
  { value: "", label: "All" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];
