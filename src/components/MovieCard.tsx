"use client";
import { MovieType } from "@/lib/movieType";
import { useRouter } from "next/navigation";

export function Movie(props: { movie: MovieType; type?: string }) {
  const { movie, type } = props;
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/moviePage/${movie.id}`);
  };
  return (
    <div
      onClick={handleOnClick}
      className={
        !type
          ? `w-[230px] h-[439px] rounded-[8px] bg-[#F4F4F5] overflow-hidden `
          : `w-[15%]  rounded-[8px] bg-[#F4F4F5] overflow-hidden `
      }
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
        height={85}
      />
      <div>
        <div className="rating flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M7.99967 1.33331L10.0597 5.50665L14.6663 6.17998L11.333 9.42665L12.1197 14.0133L7.99967 11.8466L3.87967 14.0133L4.66634 9.42665L1.33301 6.17998L5.93967 5.50665L7.99967 1.33331Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>{" "}
          {movie.vote_average}
          <p> / 10</p>
        </div>
        <p className="name">{movie.title}</p>
      </div>
    </div>
  );
}
