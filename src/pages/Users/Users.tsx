import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { mainBgColor } from "../../const/styles";
import UserSearch from "./UserSearch";

const Users = () => {
  return (
    <div>
      <Container>
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </Container>
      <UserSearch />
    </div>
  );
};

export default Users;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};
`;