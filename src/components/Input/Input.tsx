import styled from "styled-components";
import { darkBlue, lightGrey, smallBorderRadius } from "../../const/styles";

const Input = (props: any) => {
  return <StyledInput {...props} />;
};

export default Input;

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: ${smallBorderRadius};
  color: ${darkBlue};
  background-color: ${lightGrey};
  padding: 10px 14px;
  border: 0;
  outline: none;
  width: 100%;
`;
