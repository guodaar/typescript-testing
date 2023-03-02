import Select, { StylesConfig, components } from "react-select";

import { Option } from "../../types/filter";
import { mainBgColor } from "../../const/styles";

type Props = {
  options: Option[];
  value: any;
  onChange: any;
  controlText?: string;
};

const Control = ({ children, controlText, ...props }: any) => (
  <components.Control {...props}>
    {controlText}: {children}
  </components.Control>
);

const customStyles: StylesConfig<Option, false> = {
  singleValue: (base) => ({
    ...base,
    padding: "0",
    borderRadius: 5,
    display: "flex",
    width: "fit-content",
  }),
  valueContainer: (base) => ({
    ...base,
    padding: "5px",
  }),
  control: (base) => ({
    ...base,
    paddingLeft: "12px",
    background: mainBgColor,
    borderRadius: "25px",
  }),
};

const FilterComponent = ({ controlText, value, onChange, options }: Props) => {
  return (
    <>
      <Select
        components={{
          Control: (props) => <Control {...props} controlText={controlText} />,
        }}
        styles={customStyles}
        value={value}
        onChange={onChange}
        options={options}
      />
    </>
  );
};

export default FilterComponent;
