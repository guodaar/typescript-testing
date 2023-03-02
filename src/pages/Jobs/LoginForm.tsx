import * as Yup from "yup";

import { Form, Formik } from "formik";
import { LoginUser, Role } from "../../types/user";
import { darkGrey, lightGrey } from "../../const/styles";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import FormikSelect from "../../components/Formik/FormikSelect";
import { requiredField } from "../../const/validations";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useLoginUser } from "../../hooks/userHooks";

const validationSchema: Yup.ObjectSchema<LoginUser> = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(requiredField),
  password: Yup.string().required(requiredField),
  role: Yup.mixed<Role>().oneOf(['employee', 'employeer', 'admin']).required(requiredField)

});

const initialValues: LoginUser = {
  email: "",
  password: "",
  role: 'employee'
};

type Props = {
  closeModal: () => void;
};

const LoginForm = ({ closeModal }: Props) => {
  const { mutateAsync: loginUser } = useLoginUser();

  const handleSubmit = (values: LoginUser) => {
    loginUser(values)
      .then(() => {
        toast.success("Successfully logged in!");
      })
      .catch((error) => {
        console.log("Failed to login:", error);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }) => (
        <StyledForm>
          <Title>Login</Title>
          <InputRow>
            <InputRowItem>
              <FormikInput type="email" name="email" placeholder="Email" />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <InputRowItem>
              <FormikInput type="password" name="password" placeholder="Password" />
            </InputRowItem>
          </InputRow>
          <FormikSelect
            name="type"
            options={[
              { value: "employee", label: "Employee" },
              { value: "employeer", label: "Employeer" },
              { value: "admin", label: "Admin" },
            ]}
          />
          <ButtonsContainer>
            <Button onClick={closeModal} title="close" greyVariant />
            <Button type="submit" disabled={isSubmitting} title="Login" />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default LoginForm;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  color: ${darkGrey};
  border-bottom: 1px solid ${lightGrey};
  width: fit-content;
  padding-bottom: 5px;
  margin: 0px auto;
  margin-bottom: 32px;
`;

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  padding: 32px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 8px;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
