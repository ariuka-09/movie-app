import { MovieType } from "@/lib/movieType";
import { Movie } from "./Movie";
export function GroupedMovies(props: { movies: MovieType[]; text: string }) {
  //aldaa garval end baih magadlal undur
  const { movies, text } = props;
  return (
    <div className="w-[1186px] ">
      <div>
        <p className="text-[24px] font-[600]">{text}</p>
        <p></p>
      </div>
      <div className="flex flex-wrap gap-2">
        {movies.splice(0, 10).map((movie) => {
          return <Movie movie={movie} key={Math.random()} />;
        })}
      </div>
    </div>
  );
}
