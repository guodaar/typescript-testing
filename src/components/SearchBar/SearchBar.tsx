import { useState } from "react";
import styled from "styled-components";
import { mainBgColor } from "../../const/styles";
import { useUsers } from "../../hooks/userHooks";
import UserCard from "../../pages/Users/UserCard";

const SearchBar = () => {
    const { data } = useUsers();
    const users = data || [];
    const [searchText, setSearchText] = useState("");
  
    const filteredBySearch = users.filter((user) => user.email.toLowerCase().includes(searchText) || user.first_name.toLowerCase().includes(searchText))

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
  )
}

export default SearchBar;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
  background-color: ${mainBgColor};

  input {
    padding: 16px;
    width: 100%;
    border: none;
  };

  input:hover {
    opacity: 0.85;
  };
`;

