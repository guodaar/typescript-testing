export type DateOption = {
  value: "descending" | "ascending" | "";
  label: string;
};

export type PriceOption = {
  value: "highest" | "lowest" | "";
  label: string;
};

export type JobOption = {
  value: "fullTime" | "partTime" | "freelance" | "";
  label: string;
};

export type DriversLicenseOption = {
  value: boolean | "";
  label: string;
};
