import Link from "next/link";

export default function Home() {
  const clients = [
    { id: 1, value: "helder" },
    { id: 2, value: "santos" },
  ];

  return (
    <div>
      <ul>
        <li>
          <Link href={"/clients"}>clients</Link>
        </li>
        <li>
          <Link href={"/clients/helder"}>client helder</Link>
        </li>
        <li>
          <Link href={"/clients/helder/projectId"}>client helder projectId</Link>
        </li>
        <li>
          <Link href={"/blog/22"}>blog 22</Link>
        </li>
        {clients.map(client => {
          return (
            <li key={client.id}>
              <Link
                key={client.id}
                href={{
                  pathname: "clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.value}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
