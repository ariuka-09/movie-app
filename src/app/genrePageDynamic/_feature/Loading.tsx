import { Movie } from "@/components/MovieCard";
import { Skeleton } from "@/components/ui/skeleton";
import { MovieType } from "@/lib/movieType";
import { Genres } from "./Genres";
import { GetGenres } from "./GetGenres";
import { Pagination } from "@/components/PaginationButtons";

export function Loading() {
  return (
    <Skeleton>
      <div className="pl-10 flex">
        <div>
          <p className="font-bold text-[30px] ">Search filter</p>
        </div>
        <div className="flex gap-2 w-30% flex-wrap">
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>{" "}
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
          <div className="border-[1px] rounded-4xl font-[600] ">
            <div className="w-40 h-4"></div>
          </div>
        </div>

        <div className="flex gap-10">
          <div className=" w-[30%]">
            <div className="cursor-pointer" onClick={() => {}}>
              {/* /discover/movie?language=en&with_genres=${genreIds}&page=${page} */}
              <div
                key={Math.random()}
                className="border-[1px] rounded-4xl font-[600] "
              ></div>
            </div>
          </div>

          <div className="flex flex-col gap-8 justify-center w-[65%]">
            {/* {data &&  <p className="inline ml-21 text-[20px] font-[600] ">
                    {data?.data.results.name} titles found in "{theGenre}"
                  </p> } */}

            <div>
              <div
                className={` w-[230px] h-[439px] rounded-[8px] bg-[#27272A] overflow-hidden `}
              >
                <img
                  src={"https://image.tmdb.org/t/p/w500"}
                  alt=""
                  height={400}
                />
                <div className="p-2">
                  <div className="rating flex"></div>
                  <p className="name"></p>
                </div>
              </div>
              <div className="flex justify-end px-20 py-10"></div>
            </div>
          </div>
        </div>
      </div>
    </Skeleton>
  );
}
