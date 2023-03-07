import styled from "styled-components";
import Emoji from "../Emoji/Emoji";

interface SearchBarProps {
    value: string;
    setValue: (value: string) => void;
};

const SearchBar = ({value, setValue}: SearchBarProps) => {
  return (
    <Container>
        <InputContainer>
            <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Search..."
            />
        </InputContainer>
        <Emoji symbol="🔎" />
    </Container>
  )
}

export default SearchBar;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border: 1px solid white;
    box-shadow: 5px 5px 5px gray;
    width: 300px;
`;

const InputContainer = styled.div`
    width: 90%;

    input {
        padding: 16px;
        width: 100%;
        border: none;
        font-weight: 700;
    };

    input:hover {
        opacity: 0.75;
      };
`;
