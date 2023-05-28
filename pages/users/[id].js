import { useRouter } from "next/router";

export default function () {
  const router = useRouter();

  return <div>User id is: {router.query.id}</div>;
}
