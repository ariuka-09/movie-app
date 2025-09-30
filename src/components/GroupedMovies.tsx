import { MovieType } from "@/lib/movieType";
import { Movie } from "./Movie";
export function GroupedMovies(props: { movies: MovieType[]; text: string }) {
  //aldaa garval end baih magadlal undur
  const { movies, text } = props;
  return (
    <div>
      <div>
        <p>{text}</p>
        <p></p>
      </div>
      <div className="flex flex-wrap gap-2">
        {movies.map((movie) => {
          return <Movie movie={movie} />;
        })}
      </div>
    </div>
  );
}
