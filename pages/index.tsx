import Link from "next/link";

export default function Home() {
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
          <Link href={"/blog/22"}>blog 22</Link>
        </li>
      </ul>
    </div>
  );
}
