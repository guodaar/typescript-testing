import { useState } from "react";
import styled from "styled-components";
import { mainBgColor } from "../../const/styles";
import { useUsers } from "../../hooks/userHooks";
import UserCard from "./UserCard";

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
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};
  padding: 16px;
`;
