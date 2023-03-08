import { useState } from "react";
import styled from "styled-components";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useUsers } from "../../hooks/userHooks";
import UserCard from "../../pages/Users/UserCard";
import { borderRadius, darkGrey, mainBgColor } from "../../const/styles";
import { motion } from "framer-motion";


const Users = () => {
    const { data } = useUsers();
    const users = data || [];
    const [search, setSearch] = useState("");
  
    const filteredBySearch = users.filter((user) => user.email.toLowerCase().includes(search) || user.first_name.toLowerCase().includes(search));

  return (
    <motion.div
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        exit={{opacity: 0}}
        transition={{duration: 0.5}}
    >
        <Container>
        <SearchBar 
            value={search}
            setValue={setSearch}
        />
        {filteredBySearch.map((user) => (
            <UserCard key={user.id} user={user} />
        ))}
        </Container>
    </motion.div>
  )
}

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