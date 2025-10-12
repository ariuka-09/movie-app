"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Next({ page, id }: { page: number; id: string }) {
  const router = useRouter();
  const handleOnNext = () => {
    router.push(`/movie?language=en&with_genres=${id}&page=${page}`);
  };
  const [Page, setPage] = useState(page);
  const Next = () => {
    setPage(Page + 1);
    console.log("page", Page);
  };
  return (
    <button
      onClick={() => {
        Next();
        handleOnNext();
        console.log(Page);
      }}
    >
      Next {Page}
    </button>
  );
}
export function Previous({ page }: { page: number }) {
  const [Page, setPage] = useState(page);

  const Previous = () => {
    setPage(Page - 1);
    console.log("page", Page);
  };
  return (
    <button
      onClick={() => {
        Previous();
      }}
    >
      Previous {Page}
    </button>
  );
}
