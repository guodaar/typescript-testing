import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar/SearchBar";
import { mainBgColor } from "../../const/styles";
import { useUsers } from "../../hooks/userHooks";
import UserCard from "../../pages/Users/UserCard";

const Users = () => {
    const { data } = useUsers();
    const users = data || [];
    const [search, setSearch] = useState("");
  
    const filteredBySearch = users.filter((user) => user.email.toLowerCase().includes(search) || user.first_name.toLowerCase().includes(search))

  return (
    <Container>
      <SearchBar 
        value={search}
        setValue={setSearch}
      />
      {filteredBySearch.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  )
}

export default Users;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};
`;
