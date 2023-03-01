import { DateOption, PriceOption } from "../types/select";

export const dateOptions: DateOption[] = [
  { value: "descending", label: "Newest first" },
  { value: "ascending", label: "Oldest first" },
];

export const priceOptions: PriceOption[] = [
  { value: "highest", label: "Highest salary" },
  { value: "lowest", label: "Lowest salary" },
];
