import * as Yup from "yup";

import { Form, Formik } from "formik";
import { JobType, NewJob } from "../../types/job";

import FormikDatepicker from "../../components/Formik/FormikDatepicker";
import FormikInput from "../../components/Formik/FormikInput";
import FormikSelect from "../../components/Formik/FormikSelect";
import FormikTextArea from "../../components/Formik/FormikTextArea";
import ModalButtons from "../../components/ModalButtons/ModalButtons";
import { requiredField } from "../../const/validations";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";
import { toast } from "react-hot-toast";
import { useCreateJob } from "../../hooks/jobsHooks";

const initialValues: NewJob = {
  title: "",
  price: "",
  image_url: "",
  type: "fullTime",
  starting_from: "",
  has_drivers_license: false,
  user_id: 1,
  description: "",
};

const validationSchema: Yup.ObjectSchema<NewJob> = Yup.object().shape({
  title: Yup.string().required(requiredField),
  price: Yup.number().required(requiredField),
  image_url: Yup.string().required(requiredField),
  description: Yup.string().required(requiredField),
  type: Yup.mixed<JobType>()
    .oneOf(["freelance", "fullTime", "partTime"])
    .required(requiredField),
  starting_from: Yup.string().required(requiredField),
  has_drivers_license: Yup.boolean().required(requiredField),
  user_id: Yup.number().required(),
});

type Props = {
  closeModal: () => void;
};

const JobAdForm = ({ closeModal }: Props) => {
  const { mutateAsync: createJob } = useCreateJob();

  const handleSubmit = (values: NewJob) => {
    createJob(values)
      .then(() => {
        closeModal();
        toast("Job added!", {
          icon: "💪",
        });
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
      {({ isSubmitting }) => (
        <StyledFormContainer>
          <StyledForm>
            <FormikInput type="text" name="title" placeholder="Job title" />
            <InputRow>
              <InputRowItem>
                <FormikInput
                  type="number"
                  name="price"
                  placeholder="Pay offered"
                />
              </InputRowItem>
              <InputRowItem>
                <FormikDatepicker
                  name="starting_from"
                  placeholder="Enter start date"
                />
              </InputRowItem>
            </InputRow>
            <FormikInput
              type="text"
              name="image_url"
              placeholder="Company Logo URL"
            />
            <FormikSelect
              name="type"
              options={[
                { value: "fullTime", label: "Full Time" },
                { value: "partTime", label: "Part Time" },
                { value: "freelance", label: "Freelance" },
              ]}
            />
            <FormikTextArea
              type="text"
              name="description"
              placeholder="Job description"
            />
            <RadioContainer>
              <FormikInput
                type="checkbox"
                name="has_drivers_license"
                id="has_drivers_license"
              />
              <label htmlFor="has_drivers_license">
                Driving license needed
              </label>
            </RadioContainer>
            <ModalButtons
              closeModal={closeModal}
              disabled={isSubmitting}
              submitTitle="Save"
            />
          </StyledForm>
        </StyledFormContainer>
      )}
    </Formik>
  );
};

export default JobAdForm;

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

const RadioContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;
