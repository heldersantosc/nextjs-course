import { useRouter } from "next/router";

export default function PortifolioId() {
  const router = useRouter();

  return <div>{JSON.stringify(router.query)}</div>;
}
