import { useUsers } from "../../hooks/userHooks";

const UseSearch = (props: any) => {
  const { data } = useUsers();
  const users = data || [];

  const filteredData = users.filter((el) => {
    if (props.input === '') {
      return el;
    }
    else {
      return el.email.toLowerCase().includes(props.input)
    }
  })

  return (
    <ul>
      {filteredData.map((item) => (
        <li key={item.id}>{item.email}{item.first_name}{item.last_name}</li>
      ))}
    </ul>
  )
};

export default UseSearch;