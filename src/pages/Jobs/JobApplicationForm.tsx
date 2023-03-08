import * as Yup from "yup";

import { Form, Formik } from "formik";

import { ApplyUser } from "../../types/user";
import FormikInput from "../../components/Formik/FormikInput";
import ModalButtons from "../../components/ModalButtons/ModalButtons";
import { motion } from "framer-motion";
import { requiredField } from "../../const/validations";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";
import { toast } from "react-hot-toast";

const initialValues: ApplyUser = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  has_drivers_license: false,
  user_id: 1,
};

const validationSchema: Yup.ObjectSchema<ApplyUser> = Yup.object().shape({
  first_name: Yup.string().required(requiredField),
  last_name: Yup.string().required(requiredField),
  email: Yup.string().required(requiredField),
  phone_number: Yup.number().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
  user_id: Yup.number().required(),
});

type Props = {
  closeModal: () => void;
};

const JobApplicationForm = ({ closeModal }: Props) => {
  // const { mutateAsync: createJob } = useCreateJob();

  const handleSubmit = (values: any) => {
    toast("Submission successfull!", {
      icon: "🥳",
    });
    closeModal();
    // createJob(values)
    //   .then(() => {
    //     closeModal();
    //   })
    //   .catch((error) => {
    //     console.error("Failed to post the ad");
    //   });
  };

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ isSubmitting }) => (
          <StyledFormContainer>
            <StyledForm>
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
                <InputRowItem>
                  <FormikInput
                    type="number"
                    name="phone_number"
                    placeholder="Your phone number"
                  />
                </InputRowItem>
              </InputRow>
              <ModalButtons
                closeModal={closeModal}
                disabled={isSubmitting}
                submitTitle="submit application"
              />
            </StyledForm>
          </StyledFormContainer>
        )}
      </Formik>
    </motion.div>
  );
};

export default JobApplicationForm;

const StyledFormContainer = styled.div`
  max-height: 500px;
  overflow-y: auto;
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

const InputRowItem = styled.div`
  flex: 1;
`;
