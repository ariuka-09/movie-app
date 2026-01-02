"use client";

import { DetailHeader } from "@/components/DetailHeader";
import { DetailImages } from "@/components/DetailImages";
import { DetailRelatedMovies } from "@/components/DetailRelatedMovies";
import { DetailTexts } from "@/components/DetailTexts";
import { useParams } from "next/navigation"; // Import this

export default function MoviePage() {
  // useParams() is a synchronous-looking hook that handles the
  // async nature of params internally in Next.js 15.
  const params = useParams();
  const movieId = params?.id as string;

  // Safety check: if the ID isn't ready yet, return null or a skeleton
  if (!movieId) return null;

  return (
    <div>
      <div className="px-[180px] pt-[52px] pb-[112px]">
        <DetailHeader id={movieId} />
        <DetailImages id={movieId} />
        <DetailTexts id={movieId} />
        <DetailRelatedMovies id={movieId} />
      </div>
    </div>
  );
}
