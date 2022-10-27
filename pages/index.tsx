import Link from "next/link";

export default function Home() {
  return (
    <div>
      <ul>
        <li>
          <Link href={"/clients"}>clients</Link>
        </li>
      </ul>
    </div>
  );
}
