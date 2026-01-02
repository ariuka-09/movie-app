import { Movie } from "@/components/MovieCard";

import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
import { Pagination } from "./_feature/Pagination";
import { GetGenres } from "../genrePageDynamic/_feature/GetGenres";

type searchPageProps = {
  searchParams: Promise<{ value: string; page: number }>;
};

export default async function Home({ searchParams }: searchPageProps) {
  const getGenres = async () => {
    const response = await axiosInstance.get("genre/movie/list?language=en");

    return response.data;
  };
  const genres = await getGenres();

  const params = await searchParams;
  const value = params.value;
  const page = params.page;
  const getMoviesBySearch = async () => {
    const moviesBySearch = await axiosInstance.get(
      `/search/movie?query=${value}&language=en-US&page=${page}`
    );
    return moviesBySearch.data.results;
  };
  const moviesBySearch = await getMoviesBySearch();
  console.log(moviesBySearch);
  return (
    <div className="flex">
      <div className="flex flex-col ">
        <div className="flex  flex-wrap gap-10 px-10">
          {moviesBySearch
            .splice(0, 12)
            .map((movieBySearch: MovieType, i: number) => {
              return (
                <div key={i}>
                  <Movie movie={movieBySearch}></Movie>
                </div>
              );
            })}
        </div>
        <div className=" flex justify-end px-10">
          <Pagination value={value} page={page}></Pagination>
        </div>
      </div>
      <div className="flex gap-5 flex-col">
        <h3 className="text-[24px] font-[600] ">Search by genre</h3>
        <p className="text-[16px] font-[400] ">See lists of movies by genre</p>
        <GetGenres genres={genres.genres}></GetGenres>
      </div>
    </div>
  );
}
