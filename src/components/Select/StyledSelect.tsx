import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const StyledSelect = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default StyledSelect;
