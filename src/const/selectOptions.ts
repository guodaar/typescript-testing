import { DateOption, PriceOption } from "../types/select";

export const dateOptions: DateOption[] = [
  { value: "descending", label: "Newest date" },
  { value: "ascending", label: "Oldest date" },
];

export const priceOptions: PriceOption[] = [
  { value: "highest", label: "Highest salary" },
  { value: "lowest", label: "Lowest salary" },
];
