import { useUsers } from "../../hooks/userHooks";
import styled from "styled-components";
import UserCard from "./UserCard";
import { mainBgColor } from "../../const/styles";
import { useState } from "react";
import UserSearch from "./UserSearch";

const Users = () => {
  const [search, setSearch] = useState("");
  const { data } = useUsers();
  const users = data || [];

  return (
    <Container>
      <UserSearch 
        value={search}
        setValue={setSearch}
      >
        {users.length ? (
          users.map((email) => (
            <p key={email.email} onClick={() => setSearch("")}>
              <FilteredContainer>
                {users.map((user) => (
                  <UserCard key={user.id} user={user} />
                ))};
              </FilteredContainer>
            </p>
          ))
        ):(
          <p>
            Item not found
          </p>
        )}
      </UserSearch>
    </Container>
  );
};

export default Users;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};
`;

const FilteredContainer = styled.div`
  max-width: 1100px;
`;
