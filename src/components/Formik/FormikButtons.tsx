import Button from "../Button/Button";
import { screenSize } from "../../const/mediaQueries";
import styled from "styled-components";

type Props = {
  closeModal: () => void;
  submitTitle: string;
  disabled: boolean;
};

const FormikButtons = ({ closeModal, disabled, submitTitle }: Props) => {
  return (
    <ButtonsContainer>
      <Button greyVariant onClick={closeModal} title="Cancel" />
      <Button title={submitTitle} type="submit" disabled={disabled} />
    </ButtonsContainer>
  );
};

export default FormikButtons;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: ${screenSize.medium}) {
    flex-direction: column;
  }
`;
