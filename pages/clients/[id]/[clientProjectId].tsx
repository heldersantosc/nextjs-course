import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectId() {
  const router = useRouter();

  function returnToPage() {
    router.back();
  }

  return (
    <div>
      <h1>ClientProjectId:</h1>
      <h2>{JSON.stringify(router.query)}</h2>
      <button onClick={returnToPage}>Retornar</button>
    </div>
  );
}
