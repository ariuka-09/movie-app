
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
  console.log("codee", genres)
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
