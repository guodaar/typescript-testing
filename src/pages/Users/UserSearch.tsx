import styled from "styled-components";

const UserSearch = ({ value, setValue }: any) => {
    return (
      <InputWrapper>
        <Input 
          placeholder="Search"
          value={value}
          onChange={(element) => setValue(element.target.value)}
        />
      </InputWrapper>
    )
  };

export default UserSearch;

const InputWrapper = styled.div`
  position: relative;
`;

const Input = styled.input`
  border: none; 
  outline: none;
  padding: 10px 40px;
`;