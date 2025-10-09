import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ModeToggle } from "./Theme";
import { Movie_Z } from "./Movie_Z";
import { axiosInstance } from "@/lib/utils";

export async function Navbar() {
  const getGenres = async () => {
    const response = await axiosInstance.get("genre/movie/list?language=en")

    return response.data.genres;
  };
  const genres = await getGenres();

  return (
    <nav className="mx-4 px-16 py-[11.5px] flex justify-between ">
      <Movie_Z></Movie_Z>
      <div className="flex z-10">
        <DropdownMenu>
          <DropdownMenuTrigger className="">Genre</DropdownMenuTrigger>
          <DropdownMenuContent className="flex flex-col bg-gray-100 rounded">
            <div className="px-10 py-5">
              <p className="font-bold text-[25px] ">Genres</p>
              <p>See lists of movies by genre</p>
            </div>
            <DropdownMenuSeparator />

            <div className="items-center flex flex-wrap min-w-[fit] w-[40vw] gap-3 p-5">
              {genres.map((genre: { name: string }) => {
                return (
                  <DropdownMenuItem
                    key={Math.random()}
                    className="border-[1px] rounded-4xl font-[600] "
                  >
                    {genre.name + ` >`}
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
        >
          <g opacity="0.5">
            <path
              d="M6.93311 3.1333C9.30786 3.1333 11.2328 5.05837 11.2329 7.43311C11.2329 8.44873 10.8819 9.38107 10.2935 10.1167L10.0132 10.4663L13.3569 13.8101C13.3633 13.8166 13.3667 13.825 13.3667 13.8335L13.3569 13.8569C13.3439 13.8698 13.3231 13.8697 13.3101 13.8569L9.96631 10.5132L9.6167 10.7935C8.88107 11.3819 7.94873 11.7329 6.93311 11.7329C4.55837 11.7328 2.6333 9.80786 2.6333 7.43311C2.63341 5.05844 4.55844 3.13341 6.93311 3.1333ZM6.93311 3.19971C4.59525 3.19981 2.69981 5.09525 2.69971 7.43311C2.69971 9.77105 4.59519 11.6664 6.93311 11.6665C9.27111 11.6665 11.1665 9.77111 11.1665 7.43311C11.1664 5.09519 9.27105 3.19971 6.93311 3.19971Z"
              fill="#FAFAFA"
              stroke="#FAFAFA"
            />
          </g>
        </svg>
        <input type="text" placeholder="Search.." />
      </div>
      <ModeToggle />
    </nav>
  );
}
