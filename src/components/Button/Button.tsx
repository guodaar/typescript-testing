import styled from "styled-components";
import { lighterBlue, mainBgColor, mediumBlue } from "../../const/styles";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  title: string;
  type?: "submit";
};

const Button = ({ onClick, title, type }: Props) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${lighterBlue};
  color: ${mainBgColor};
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 7px 23px;
  margin: 10px 5px;
  border: none;
  border-radius: 25px;
  transition: 0.2s ease-in-out;
  &:hover {
    background-color: ${mediumBlue};
  }
`;
