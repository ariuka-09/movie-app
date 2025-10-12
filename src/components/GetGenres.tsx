"use client";

import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function GetGenres(props: {
  genres: { name: string; id: number; page: number }[];
}) {
  const { genres } = props;
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const handleClick = (id: number) => {
    console.log(genres);
    const genre = genres.filter(
      (wantedGenre: { name: string; id: number; page: number }) => {
        if (id == wantedGenre.id) {
          return true;
        }
      }
    );

    router.push(`/genrePageDynamic/${genre[0].id}/1`);
    return id;
  };
  return (
    <div>
      <div className="items-center flex flex-wrap gap-3 ">
        {genres.map((genre: { name: string; id: number }) => {
          const genreName = genre.name;
          return (
            <div
              className="cursor-pointer"
              onClick={() => {
                handleClick(genre.id);
              }}
            >
              {/* /discover/movie?language=en&with_genres=${genreIds}&page=${page} */}
              <div
                key={Math.random()}
                className="border-[1px] rounded-4xl font-[600] "
              >
                {genre.name + ` >`}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
