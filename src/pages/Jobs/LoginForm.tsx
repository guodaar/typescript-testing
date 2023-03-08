import * as Yup from "yup";

import { Form, Formik } from "formik";
import { darkGrey, lightGrey } from "../../const/styles";

import Button from "../../components/Button/Button";
import FormikInput from "../../components/Formik/FormikInput";
import { LoginUser } from "../../types/user";
import { UserContext } from "../../contexts/UserContext";
import { motion } from "framer-motion";
import { requiredField } from "../../const/validations";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";
import toast from "react-hot-toast";
import { useContext } from "react";
import { useLoginUser } from "../../hooks/userHooks";

const validationSchema: Yup.ObjectSchema<LoginUser> = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required(requiredField),
  password: Yup.string().required(requiredField),
});

const initialValues: LoginUser = {
  email: "",
  password: "",
};

type Props = {
  closeModal: () => void;
};

const LoginForm = ({ closeModal }: Props) => {
  const { mutateAsync: loginUser } = useLoginUser();
  const { setUser } = useContext(UserContext);

  const handleSubmit = (values: LoginUser) => {
    loginUser(values)
      .then((response) => {
        console.log(response);
        setUser(response);
        toast.success("Successfully logged in!");
        closeModal();
      })
      .catch((error) => {
        toast.error("Failed to login:");
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
              <FormikInput
                type="password"
                name="password"
                placeholder="Password"
              />
            </InputRowItem>
          </InputRow>
          <ButtonsContainer>
            <Button onClick={closeModal} title="close" greyVariant />
            <Button type="submit" disabled={isSubmitting} title="Login" />
          </ButtonsContainer>
        </StyledForm>
      )}
      </Formik>
      </motion.div>
  );
};

export default LoginForm;

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
