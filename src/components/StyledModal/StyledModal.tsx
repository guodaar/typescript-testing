import styled from "styled-components";
import { Formik, Form } from "formik";
import Modal from "react-modal";
import { useContext } from "react";
import { ModalContext } from "../../context/ModalContext";
import * as Yup from "yup";
import {
  borderRadius,
  darkGrey,
  mainBgColor,
  mediumGrey,
} from "../../const/styles";
import Button from "../Button/Button";
import Emoji from "../Emoji/Emoji";
import FormikInput from "../Input/FormikInput";
import { createJob } from "../../api/jobsApi";
import { NewJob } from "../../types/job";
import { requiredField } from "../../const/validations";
import FormikSelect from "../Input/FormikSelect";

const validationSchema = Yup.object().shape({
  title: Yup.string().required(requiredField),
  price: Yup.number().required(requiredField),
  description: Yup.string().required(requiredField),
  type: Yup.string().required(requiredField),
  starting_from: Yup.string().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
});

const StyledModal = () => {
  const { closeModal, modalIsOpen, setIsOpen } = useContext(ModalContext);

  const handleSubmit = (values: NewJob) => {
    console.log(values);
    createJob(values)
      .then((response) => {
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Failed to post the ad");
      });
  };

  return (
    <Container isOpen={modalIsOpen} onRequestClose={closeModal}>
      <Formik
        initialValues={{
          title: "",
          price: null,
          type: "fullTime",
          starting_from: "",
          has_drivers_license: false,
          user_id: 0,
          description: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ values, errors, isSubmitting }) => (
          <StyledForm>
            <Title>
              Create a job ad <Emoji symbol="✍" />
            </Title>
            <InputRow>
              <InputRowItem>
                <FormikInput type="text" name="title" placeholder="Job title" />
              </InputRowItem>
              <InputRowItem>
                <FormikInput
                  type="number"
                  name="price"
                  placeholder="Pay offered"
                />
              </InputRowItem>
            </InputRow>
            <FormikSelect
              name="type"
              options={[
                { value: "fullTime", label: "Full Time" },
                { value: "partTime", label: "Part Time" },
                { value: "freelance", label: "Freelance" },
              ]}
            />
            <FormikInput
              type="text"
              name="description"
              placeholder="Job description"
            />
            <ButtonsContainer>
              <Button greyVariant={true} onClick={closeModal} title="close" />
              <Button type="submit" title="save" />
            </ButtonsContainer>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default StyledModal;

const Container = styled(Modal)`
  min-height: 18rem;
  background-color: ${mainBgColor};
  color: ${mediumGrey};
  margin: 50px 15vw;
  border-radius: ${borderRadius};
  padding: 24px 10vw;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 0.25rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
  color: ${darkGrey};
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
