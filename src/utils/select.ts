import { Job } from "../types/job";

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
  return arr.sort((a: any, b: any) => {
    if (a.price === null) return 1;
    if (b.price === null) return -1;
    return a.price - b.price;
  });
};

export const sortSelectByPriceDesc = (arr: Job[]) => {
  return arr.sort((a: any, b: any) => {
    if (a.price === null) return 1;
    if (b.price === null) return -1;
    return b.price - a.price;
  });
};
