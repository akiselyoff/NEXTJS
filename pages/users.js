import Link from "next/link";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Andy" },
    { id: 2, name: "John" },
  ]);
  return (
    <div>
      <h1>Users page</h1>
      <p>List of users</p>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
