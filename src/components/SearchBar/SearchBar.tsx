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
        <EmojiContainer>
            <Emoji symbol="🔎" />
        </EmojiContainer>
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
    border-radius: 20px;
    box-shadow: 3px 3px 15px lightgray;
    width: 300px;
    height: 50px;
`;

const InputContainer = styled.div`
    width: 245px;

    input {
        padding-left: 16px;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 20px;
        font-weight: 700;
        outline: none;
    };

    input:hover {
        opacity: 0.75;
      };
`;

const EmojiContainer = styled.div`
    padding-right: 16px;
`;
