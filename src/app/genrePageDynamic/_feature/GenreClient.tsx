"use client";
import useSWR from "swr";
import { Pagination } from "@/components/PaginationButtons";
import { GetGenres } from "./GetGenres";
import { axiosInstance } from "@/lib/utils";
import { Genres } from "./Genres";
import { Loading } from "./Loading";

export function GenreClient(props: {
  genres: { genres: { name: string; id: number; page: number }[] };
  id: string;
  page: number;
}) {
  const { page, id, genres } = props;

  const getMoviesByGenre = async () => {
    const moviesByGenre = await axiosInstance.get(
      `/discover/movie?language=en&with_genres=${id}&page=${page}`
    );
    return moviesByGenre;
  };

  const moviesByGenre = getMoviesByGenre();

  const fetcher = (url: string) =>
    axiosInstance.get(url).then((res) => res.data);
  const url = `/discover/movie?language=en&with_genres=${id}&page=${page}`;
  const theGenre = genres.genres.filter(
    (genre: { id: number; page: number }) => {
      if (genre.id == Number(id)) {
        return true;
      }
    }
  );

  const { data, error, isLoading } = useSWR(
    `/discover/movie?language=en&with_genres=${id}&page=${page}`,
    getMoviesByGenre
  );
  console.log("data with swr", data);
  console.log("is loading ", isLoading);
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="pl-10">
      <div>
        <p className="font-bold text-[30px] ">Search filter</p>
      </div>
      <div>
        <div>
          <p></p>
          <p></p>
        </div>
      </div>
      <div className="flex gap-10">
        <div className=" w-[30%]">
          <GetGenres genres={genres.genres}></GetGenres>
        </div>
        <div className="flex flex-col gap-8 justify-center w-[65%]">
          {/* {data &&  <p className="inline ml-21 text-[20px] font-[600] ">
              {data?.data.results.name} titles found in "{theGenre}"
            </p> } */}

          <div>
            {data && <Genres moviesByGenre={data.data.results}></Genres>}

            <div className="flex justify-end px-20 py-10">
              <Pagination id={id} page={page}></Pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
