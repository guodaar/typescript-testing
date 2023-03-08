import * as Yup from "yup";

import { Form, Formik } from "formik";
import { NewUser, Role } from "../../types/user";
import { darkGrey, lightGrey } from "../../const/styles";

import { AiOutlineCloseSquare } from "react-icons/ai";
import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { motion } from "framer-motion";
import { requiredField } from "../../const/validations";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useCreateUser } from "../../hooks/userHooks";

const initialValues: NewUser = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
};

const validationSchema: Yup.ObjectSchema<NewUser> = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(requiredField),
  password: Yup.string().required(requiredField),
  confirmPassword: Yup.string()
    .required(requiredField)
    .oneOf([Yup.ref("password")], "Your passwords do not match."),
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
  role: Yup.mixed<Role>()
    .oneOf(["employee", "employeer", "admin"])
    .required(requiredField),
});

type Props = {
  closeModal: () => void;
};

const RegisterForm = ({ closeModal }: Props) => {
  const { mutateAsync: createUser } = useCreateUser();

  const handleSubmit = (values: NewUser) => {
    createUser(values)
      .then(() => {
        closeModal();
        toast.success("Register successfully");
      })
      .catch(() => {
        console.error("Failed to post the ad");
      });
  };

  return (
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({ submitForm }) => (
        <StyledFormContainer>
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
            <InputCheckBoxRow>
              <FormikInput type="checkbox" name="employer" id="employer" />
              <label htmlFor="employer">An Employer</label>
            </InputCheckBoxRow>
            <ButtonsContainer>
              <Button greyVariant onClick={closeModal} title="Cancel" />
              <Button title="Register" onClick={submitForm} />
            </ButtonsContainer>
            <CloseBtn onClick={closeModal} />
          </StyledForm>
        </StyledFormContainer>
      )}
      </Formik>
      </motion.div>
  );
};

export default RegisterForm;

const StyledFormContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
`;

const CloseBtn = styled(AiOutlineCloseSquare)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 1.2rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
  }
`;

const Title = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  color: ${darkGrey};
  border-bottom: 1px solid ${lightGrey};
  p {
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

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
  }
`;

const InputCheckBoxRow = styled.div`
  display: flex;
  gap: 8px;
`;

const InputRowItem = styled.div`
  flex: 1;
`;
