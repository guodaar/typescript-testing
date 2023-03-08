import {
  DateOption,
  DriversLicenseOption,
  JobOption,
  PriceOption,
} from "./types";

export const dateOptions: DateOption[] = [
  { value: "descending", label: "Newest date" },
  { value: "ascending", label: "Oldest date" },
];

export const priceOptions: PriceOption[] = [
  { value: "highest", label: "Highest salary" },
  { value: "lowest", label: "Lowest salary" },
];

export const jobTypeOptions: JobOption[] = [
  { value: "", label: "All" },
  { value: "fullTime", label: "Full-time" },
  { value: "partTime", label: "Part-time" },
  { value: "freelance", label: "Freelance" },
];

export const driversLicenseOptions: DriversLicenseOption[] = [
  { value: "", label: "All" },
  { value: true, label: "Yes" },
  { value: false, label: "No" },
];

export const emptyDateOption: DateOption = {
  value: "",
  label: "Starting date",
};

export const emptyPriceOption: PriceOption = {
  value: "",
  label: "Salary",
};

export const emptyJobTypeOption = jobTypeOptions[0];

export const emptyDriversLicenseOption = driversLicenseOptions[0];
