"use client";
import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
import { Movie } from "./MovieCard";
import { useEffect, useState } from "react";

export function DetailRelatedMovies({ id }: { id: string }) {
  const [relatedMovies, setRelatedMovies] = useState<any>();
  const getRelatedMovies = async () => {
    const relatedMovies = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    console.log(id);
    setRelatedMovies(relatedMovies.data.results);
  };
  useEffect(() => {
    getRelatedMovies();
  }, []);
  if (!relatedMovies) {
    return "loading";
  }
  return (
    <div className="flex flex-wrap justify-between">
      {relatedMovies.splice(0, 5).map((relatedMovie: MovieType) => {
        return (
          <Movie
            key={Math.random()}
            type="related"
            movie={relatedMovie}
          ></Movie>
        );
      })}
    </div>
  );
}
