import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";

import UserCard from "./UserCard";
import { motion } from "framer-motion";
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
    <motion.div
    animate={{opacity: 1}}
    initial={{opacity: 0}}
    exit={{opacity: 0}}
    transition={{duration: 0.5}}
    >
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
      </motion.div>
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
