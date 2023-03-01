import * as Yup from "yup";

import { Form, Formik } from "formik";
import { darkGrey, lightGrey } from "../../const/styles";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { NewUser } from "../../types/user";
import { requiredField } from "../../const/validations";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useCreateUser } from "../../hooks/userHooks";

const initialValues: NewUser = {
  email: '',
  password: '',
  confirmPassword: '',
  first_name: '',
  last_name: '',
};

const validationSchema: Yup.ObjectSchema<NewUser> = Yup.object().shape({
  email: Yup.string().email('Invalid email').required(requiredField),
  password: Yup.string().required(requiredField),
  confirmPassword: Yup.string().required(requiredField).oneOf([Yup.ref("password")], "Your passwords do not match."),
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
});

type Props = {
  closeModal: () => void;
};

const RegisterForm = ({ closeModal }: Props) => {
  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values: NewUser) => {
    createUser(values)
      .then((response) => {
        closeModal();
        toast.success("Register successfully");
      })
      .catch((error) => {
        console.error("Failed to post the ad");
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm }) => (
        <StyledForm>
          <Title>
            <p>Register to apply or post a job </p>
          </Title>
          <InputRow>
            <InputRowItem>
              <FormikInput
                type="text"
                name="first_name"
                placeholder="First name"
              />
            </InputRowItem>
            <InputRowItem>
              <FormikInput
                type="text"
                name="last_name"
                placeholder="Last name"
              />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <InputRowItem>
              <FormikInput
                type="email"
                name="email"
                placeholder="Your email address"
              />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <InputRowItem>
              <FormikInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </InputRowItem>
            <InputRowItem>
              <FormikInput
                type="password"
                name="confirmPassword"
                placeholder="Repeat password"
              />
            </InputRowItem>
          </InputRow>
          <InputRow>
            <FormikInput
              type="checkbox"
              name="employer"
              id="employer"
            />
            <label htmlFor="employer">An Employer</label>
          </InputRow>
          <ButtonsContainer>
            <Button greyVariant={true} onClick={closeModal} title="close" />
            <Button title="Register" onClick={submitForm} />
          </ButtonsContainer>
        </StyledForm>
      )}
    </Formik>
  );
};

export default RegisterForm;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  color: ${darkGrey};
  border-bottom: 1px solid ${lightGrey};
  p{
    padding-bottom: 5px;
  }
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
