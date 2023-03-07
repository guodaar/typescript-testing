import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";

import UserCard from "./UserCard";
import styled from "styled-components";
import { useState } from "react";
import { useUsers } from "../../hooks/userHooks";

const Users = () => {
  const { data } = useUsers();
  const users = data || [];
  const [searchText, setSearchText] = useState("");

  const filteredBySearch = users.filter((user) => {
    const search = searchText.toLowerCase();

    return (
      user.email.toLowerCase().includes(search) ||
      user.last_name.toLowerCase().includes(search)
    );
  });

  return (
    <Container>
      <input
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search..."
      />
      {filteredBySearch.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default Users;

const Container = styled.div`
 background-color: ${mainBgColor};
  margin: 50px 15vw;
  padding: 32px;
  border-radius: ${borderRadius};
  display: flex;
  flex-direction: column;
  gap: 18px;
  color: ${darkGrey};
`;
