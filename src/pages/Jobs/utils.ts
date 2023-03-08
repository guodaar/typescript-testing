import { DateOption, PriceOption } from "./types";

import { Job } from "../../types/job";
import { Option } from "../../types/filter";

export const sortSelect = (
  jobs: Job[],
  selectedDateOption: DateOption,
  selectedPriceOption: PriceOption,
  selectedType: Option,
  selectedLicenseOption: Option
) => {
  let sortedJobs = [...jobs];

  if (selectedDateOption.value) {
    if (selectedDateOption.value === "descending") {
      sortedJobs = sortSelectByDateDesc(sortedJobs);
    }
    if (selectedDateOption.value === "ascending") {
      sortedJobs = sortSelectByDateAsc(sortedJobs);
    }
  }

  if (selectedPriceOption.value) {
    if (selectedPriceOption.value === "highest") {
      sortedJobs = sortSelectByPriceDesc(sortedJobs);
    }
    if (selectedPriceOption.value === "lowest") {
      sortedJobs = sortSelectByPriceAsc(sortedJobs);
    }
  }
  if (selectedType.value) {
    sortedJobs = sortedJobs.filter((job) => job.type === selectedType.value);
  }

  if (selectedLicenseOption.value !== "") {
    sortedJobs = sortedJobs.filter(
      (job) => job.has_drivers_license === selectedLicenseOption.value
    );
  }

  return sortedJobs;
};

export const sortSelectByDateAsc = (arr: Job[]) => {
  return arr.sort((a: Job, b: Job) => {
    const dateA = new Date(a.starting_from).getTime();
    const dateB = new Date(b.starting_from).getTime();
    return dateA - dateB;
  });
};

export const sortSelectByDateDesc = (arr: Job[]) => {
  return arr.sort((a: Job, b: Job) => {
    const dateA = new Date(a.starting_from).getTime();
    const dateB = new Date(b.starting_from).getTime();
    return dateB - dateA;
  });
};

export const sortSelectByPriceAsc = (arr: Job[]) => {
  return arr.sort((a: Job, b: Job) => {
    if (a.price === null || a.price === "") return 1;
    if (b.price === null || b.price === "") return -1;
    return a.price - b.price;
  });
};

export const sortSelectByPriceDesc = (arr: Job[]) => {
  return arr.sort((a: Job, b: Job) => {
    if (a.price === null || a.price === "") return 1;
    if (b.price === null || b.price === "") return -1;
    return b.price - a.price;
  });
};
