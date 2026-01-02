import { Movie } from "@/components/MovieCard";
import { MovieType } from "@/lib/movieType";

export function Genres(props: { moviesByGenre: any }) {
  const { moviesByGenre } = props;
  return (
    <div className=" flex flex-wrap gap-8 justify-center w-[100%] ">
      {moviesByGenre &&
        moviesByGenre.results.splice(0, 12).map((movieByGenre: MovieType) => {
          return <Movie movie={movieByGenre} key={Math.random()} />;
        })}
    </div>
  );
}
