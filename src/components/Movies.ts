import { MovieType } from "@/lib/movieType";
import { axiosInstance } from "@/lib/utils";
type MoviesCategory = {
  category: string;
  movieType: MovieType[];
};

export async function Movies() {
  const getUpcomingMovies = async () => {
    const response = await axiosInstance.get(`movie/upcoming?language=en-US&page=1`)
    return response.data.results;
  };

  const upComingMovies = await getUpcomingMovies();

  const getPopularMovies = async () => {
    const response = await axiosInstance.get(`movie/popular?language=en-US&page=1`)
    return response.data.results;
  };
  const popularMovies = await getPopularMovies();

  const getTopRatedMovies = async () => {
    const response = await axiosInstance.get(`movie/top_rated?language=en-US&page=1`)
    return response.data.results;
  };
  const topRatedMovies = await getTopRatedMovies();
  const movies: MoviesCategory[] = [
    { category: "Popular", movieType: await upComingMovies },
    { category: "Upcoming", movieType: await popularMovies },
    { category: "Top Rated", movieType: await topRatedMovies },
  ];
  return movies;
}
