

// import { Movie } from "@/components/MovieCard";
// import { Pagination } from "@/components/PaginationButtons";
// import { MovieType } from "@/lib/movieType";
// import { axiosInstance } from "@/lib/utils";
// import { Genres } from "./_feature/Genres";
// import { GetGenres } from "./_feature/GetGenres";

// export default async function genrePageDynamic({
//   params,
// }: {
//   params: Promise<{ id: string; page: number }>;
// }) {
//   const { id, page } = await params;

//   console.log("page on the main page", page);
//   const getMoviesByGenre = async () => {
//     const moviesByGenre = await axiosInstance.get(
//       `/discover/movie?language=en&with_genres=${id}&page=${page}`
//     );
//     console.log("movies by genre", moviesByGenre);
//     return moviesByGenre.data;
//   };

//   const moviesByGenre = await getMoviesByGenre();

//   const getGenres = async () => {
//     const response = await axiosInstance.get("genre/movie/list?language=en");

//     return response.data;
//   };
//   const genres = await getGenres();

//   const getCorrectGenre = () => {
//     const theCorrectGenre = genres.genres.filter(
//       (genre: { id: number; name: string }) => {
//         if (genre.id == Number(id)) {
//           return true;
//         }
//       }
//     );

//     return theCorrectGenre[0].name;
//   };
//   const theGenre = getCorrectGenre();

//   return (
//     <div className="pl-10">
//       <div>
//         <p className="font-bold text-[30px] ">Search filter</p>
//       </div>
//       <div>
//         <div>
//           <p></p>
//           <p></p>
//         </div>
//       </div>
//       <div className="flex gap-10">
//         <div className=" w-[30%]">
//           <GetGenres genres={genres.genres}></GetGenres>
//         </div>
//         <div className="flex flex-col gap-8 justify-center w-[65%]">
//           <p className="inline ml-21 text-[20px] font-[600] ">
//             {moviesByGenre.total_results} titles found in "{theGenre}"
//           </p>

//           <div>
//               <Genres moviesByGenre={moviesByGenre} ></Genres>
//             <div className="flex justify-end px-20 py-10">
//               <Pagination id={id} page={page}></Pagination>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { Pagination } from "@/components/PaginationButtons";
import { axiosInstance } from "@/lib/utils";
import { GetGenres } from "./_feature/GetGenres";
import { Genres } from "./_feature/Genres";
import { GenreClient } from "./_feature/GenreClient";

type genrePageProps= {searchParams:Promise<{id:string; page:number}>}

export default async function genrePageDynamic({
  searchParams,
}: genrePageProps) {
  const { id, page } = await searchParams;

 
  const getGenres = async () => {
    const response = await axiosInstance.get("genre/movie/list?language=en");
    return response.data;
  };
  const genres = await getGenres();
  const getCorrectGenre = () => {
    const theCorrectGenre = genres.genres.filter(
      (genre: { id: number; name: string }) => {
        if (genre.id == Number(id)) {
          return true;
        }
      }
    );
    return theCorrectGenre[0].name;
  };
  const theGenre = getCorrectGenre();

  return (
<GenreClient genres={genres} id={id} page={page}></GenreClient>
  );
}
