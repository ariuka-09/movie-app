import axios from "axios";
import { headers } from "next/headers";
import Image from "next/image";

export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjI5ZmNiMGRmZTNkMzc2MWFmOWM0YjFjYmEyZTg1NiIsIm5iZiI6MTc1OTcxMTIyNy43OTAwMDAyLCJzdWIiOiI2OGUzMGZmYjFlN2Y3MjAxYjI5Y2FiYmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.M0DQ3rCdsWnMw8U-8g5yGXx-Ga00Jp3p11eRyiSxCuY",
        },
      }
    );
    console.log(id);
    return response.data;
  };
  const movie = await getImages();
  return (
    <div className="flex gap-8 w-fit">
      <img
        className="w-[290px] "
        src={" https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      ></img>
      <img
        className="w-[788px] "
        src={" https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
    </div>
  );
}
