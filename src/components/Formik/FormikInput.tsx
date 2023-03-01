import { ErrorMessage, Field } from 'formik';

import Input from '../Input/Input';
import { InputHTMLAttributes } from 'react';

type Props = {
  name: string;
  id?: InputHTMLAttributes<HTMLInputElement>['id'];
  type?: InputHTMLAttributes<HTMLInputElement>['type']; //gali but ir stringas
  placeholder?: InputHTMLAttributes<HTMLInputElement>['placeholder'];
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
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
