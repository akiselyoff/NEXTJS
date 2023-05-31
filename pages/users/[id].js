import { useRouter } from "next/router";
import MainContainer from "../../components/MainContainer/MainContainer";

export default function User({ user }) {
  const router = useRouter();

  return (
    <MainContainer keywords={"User id keywords"}>
      <div>User id is: {router.query.id}</div>
      <div>Users name: {user.name}</div>
    </MainContainer>
  );
}

export const getServerSideProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();
  return { props: { user } };
};
