"use client";
import { MovieType } from "@/lib/movieType";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"; // 1. Add these

export function Movie(props: { movie: MovieType; type?: string }) {
  const { movie, type } = props;
  const router = useRouter();
  const { theme } = useTheme();

  // 2. Track if the component has mounted on the client
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOnClick = () => {
    router.push(`/moviePage/${movie.id}`);
  };

  // 3. Logic for background color
  // If not mounted, use a safe default that matches your server's initial state
  const isLight = mounted && theme === "light";
  const bgClass = isLight ? "bg-[#F4F4F5]" : "bg-[#27272A]";
  const widthClass = !type ? "w-[230px] h-[439px]" : "w-[15%]";

  return (
    <div
      onClick={handleOnClick}
      className={`${widthClass} rounded-[8px] overflow-hidden ${bgClass} transition-colors duration-200`}
    >
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
        className="w-full h-auto" // Added for better image handling
      />
      <div className="p-2">
        <div className="rating flex items-center gap-1">
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
          </svg>
          <span>{movie.vote_average.toFixed(1)}</span>
          <p className="text-gray-500"> / 10</p>
        </div>
        <p className="name font-semibold line-clamp-2">{movie.title}</p>
      </div>
    </div>
  );
}
