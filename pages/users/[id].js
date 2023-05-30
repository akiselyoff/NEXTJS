import { useRouter } from "next/router";

export default function User({ user }) {
  const router = useRouter();

  return (
    <>
      <div>User id is: {router.query.id}</div>
      <div>Users name: {user.name}</div>
    </>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
};
