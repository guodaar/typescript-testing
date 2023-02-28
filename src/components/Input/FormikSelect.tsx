import { ErrorMessage, useField } from "formik";
import Select from "react-select";

type Props = {
  name: string;
  [x: string]: any;
};

const FormikSelect = ({ name, ...rest }: Props) => {
  const [field, , helpers] = useField(name);
  return (
    <div>
      <Select
        name={name}
        value={field.value}
        onChange={(value) => helpers.setValue(value)}
        {...rest}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikSelect;
