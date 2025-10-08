import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
import { Movie } from "./MovieCard";

export async function DetailRelatedMovies({ id }: { id: string }) {
  const getRelatedMovies = async () => {
    const relatedMovies = await axiosInstance.get(
      `/movie/${id}/similar?language=en-US&page=1`
    );
    console.log(id);

    return relatedMovies.data.results;
  };
  //   const getCreditInfo = async () => {
  //     const creditInfo = await axiosInstance.get(
  //       `/movie/${id}/credits?language=en-US`
  //     );
  //     return creditInfo.data;
  //   };
  //   const creditInfo = await getCreditInfo();

  const relatedMovies: MovieType[] = await getRelatedMovies();
  return (
    <div className="flex flex-wrap justify-between">
      {relatedMovies.splice(0, 5).map((relatedMovie: MovieType) => {
        return <Movie type="related" movie={relatedMovie}></Movie>;
      })}
    </div>
  );
}
