import { MovieType } from "@/lib/movieType";
import { Movie } from "./MovieCard";
export function GroupedMovies(props: { movies: MovieType[]; text: string }) {
  //aldaa garval end baih magadlal undur
  const { movies, text } = props;
  return (
    <div className="w-[1500px] flex flex-col gap-8 justify-center items-center">
      <div className="w-[1250px] justify-between ">
        <p className="text-[24px] font-[600]">{text}</p>
      </div>
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {movies.splice(0, 10).map((movie) => {
          return <Movie movie={movie} key={Math.random()} />;
        })}
      </div>
    </div>
  );
}
