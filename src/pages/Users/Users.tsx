import { useUsers } from "../../hooks/userHooks";
import styled from "styled-components";
import UserCard from "./UserCard";
import { User } from "../../types/user";

const Users = () => {
  const { data } = useUsers();
  const users = data || [];

  return (
    <Container>
      {users.map((user: User) => (
        <UserCard key={user.id} user={user} />
      ))}
    </Container>
  );
};

export default Users;

const Container = styled.div`
  max-width: 1100px;
  margin: 40px auto;
`;
