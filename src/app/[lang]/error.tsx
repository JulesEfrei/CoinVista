"use client"; // Error components must be Client Components

import Button from "@atoms/Button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  const router = useRouter();

  return (
    <div className="w-full h-full flex gap-2 justify-center items-center">
      <h2 className="pr-3">Something went wrong</h2>
      <h2>|</h2>
      <Button intent="underline" onClick={() => router.push("/dashboard")}>
        Go home
      </Button>
    </div>
  );
}
