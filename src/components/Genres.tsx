"use client"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { useTheme } from "next-themes";

export  function Genres({genres} : {genres:{name:string}[]}){
  const {theme, setTheme} = useTheme()
  return(
<DropdownMenu>
<DropdownMenuTrigger className="">Genre</DropdownMenuTrigger>
<DropdownMenuContent className={`flex flex-col ${theme === "light" ?  "bg-gray-100": "bg-black" }  rounded`}>
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
  )
}
