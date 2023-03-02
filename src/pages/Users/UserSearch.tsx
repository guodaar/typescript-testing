import { useUsers } from "../../hooks/userHooks";

const UseSearch = () => {
  const { data } = useUsers();
  const users = data || [];

  return (
    <ul>
      {users.map((email) => (
        <li 
          key={email.first_name}>
            {email.email}
          </li>
      ))}
    </ul>
  );
};

export default UseSearch;