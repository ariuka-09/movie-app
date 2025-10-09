import { axiosInstance } from "@/lib/utils";


export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);

    return response.data;
  };
  const movie = await getImages();
  return (
    <div className="flex gap-[2%] w-full">
      <img
        className="w-[30%] "
        src={" https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      ></img>
      <img
        className="w-[68%] "
        src={" https://image.tmdb.org/t/p/original" + movie.backdrop_path}
        alt=""
      />
    </div>
  );
}
