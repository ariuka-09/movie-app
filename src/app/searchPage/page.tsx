import { Suspense } from "react";
import { Movie } from "@/components/MovieCard";
import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
import { Pagination } from "./_feature/Pagination";
import { GetGenres } from "../genrePageDynamic/_feature/GetGenres";

type searchPageProps = {
  searchParams: Promise<{ value: string; page: number }>;
};

// 1. We create a separate Inner component for the data fetching
async function SearchContent({ searchParams }: searchPageProps) {
  const params = await searchParams;
  const value = params.value || "";
  const page = params.page || 1;

  // Fetch Genres and Movies in parallel for better performance
  const [genresRes, moviesRes] = await Promise.all([
    axiosInstance.get("genre/movie/list?language=en"),
    axiosInstance.get(
      `/search/movie?query=${value}&language=en-US&page=${page}`
    ),
  ]);

  const genres = genresRes.data.genres;
  const moviesBySearch = moviesRes.data.results;

  return (
    <div className="flex flex-col md:flex-row gap-8 p-10">
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-10">
          {moviesBySearch?.slice(0, 12).map((movie: MovieType) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>

        {moviesBySearch?.length > 0 && (
          <div className="flex justify-end mt-10">
            <Pagination value={value} page={page} />
          </div>
        )}
      </div>

      <div className="w-full md:w-80 flex flex-col gap-5">
        <h3 className="text-[24px] font-[600]">Search by genre</h3>
        <p className="text-[16px] font-[400]">See lists of movies by genre</p>
        <GetGenres genres={genres} />
      </div>
    </div>
  );
}

// 2. The main Page component wraps everything in Suspense
export default function Home(props: searchPageProps) {
  return (
    <Suspense
      fallback={
        <div className="p-10 text-center">Loading search results...</div>
      }
    >
      <SearchContent searchParams={props.searchParams} />
    </Suspense>
  );
}
