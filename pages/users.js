import Link from "next/link";
import MainContainer from "../components/MainContainer/MainContainer";

const Users = ({ users }) => {
  return (
    <MainContainer keywords={"Users keywords"}>
      <h1>Users page</h1>
      <p>List of users</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { props: { users } };
};
