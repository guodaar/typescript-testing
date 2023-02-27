import { Field, ErrorMessage } from "formik";
import Input from "./Input";

type Props = {
  name: string;
  [x: string]: any;
};

const FormikInput = ({ name, ...restProps }: Props) => {
  return (
    <div>
      <Field name={name} as={Input} {...restProps} />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default FormikInput;
