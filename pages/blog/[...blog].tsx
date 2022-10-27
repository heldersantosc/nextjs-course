import { useRouter } from "next/router";

export default function Blogs() {
  const router = useRouter();

  return <div>{JSON.stringify(router.query)}</div>;
}
