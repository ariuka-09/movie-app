"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";

export function Genres(props: { genres: { name: string; id: number }[] }) {
  const { genres } = props;
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const handleClick = (id: number) => {
    console.log(genres);
    const genre = genres.filter((wantedGenre: { name: string; id: number }) => {
      if (id == wantedGenre.id) {
        return true;
      }
    });
    router.push(`/genrePageDynamic/${genre[0].id}`);
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="">Genre</DropdownMenuTrigger>
      <DropdownMenuContent
        className={`flex flex-col ${
          theme === "light" ? "bg-gray-100" : "bg-black"
        }  rounded`}
      >
        <div className="px-10 py-5">
          <p className="font-bold text-[25px] ">Genres</p>
          <p>See lists of movies by genre</p>
        </div>
        <DropdownMenuSeparator />

        <div className="items-center flex flex-wrap min-w-[fit] w-[40vw] gap-3 p-5">
          {genres.map((genre: { name: string; id: number }) => {
            return (
              <div
                onClick={() => {
                  handleClick(genre.id);
                }}
              >
                {/* /discover/movie?language=en&with_genres=${genreIds}&page=${page} */}
                <DropdownMenuItem
                  key={Math.random()}
                  className="border-[1px] rounded-4xl font-[600] "
                >
                  {genre.name + ` >`}
                </DropdownMenuItem>
              </div>
            );
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
