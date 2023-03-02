import { useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { mainBgColor } from "../../const/styles";
import { useUsers } from "../../hooks/userHooks";
import UserCard from "./UserCard";
import UserSearch from "./UserSearch";


const Users = () => {
  const { data } = useUsers();
  const users = data || [];
  const [inputText, setInputText] = useState("");
  const inputHandler = (e: any) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <div>
      <Container>
        <TextField
          id="outlined-basic"
          onChange={inputHandler}
          variant="outlined"
          fullWidth
          label="Search"
        />
      </Container>
      <Container>
        <UserSearch input={inputText} />
        {users.map((user) => (
        <UserCard key={user.id} user={user} />
        ))}
      </Container>
    </div>
  );
};

export default Users;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};
`;