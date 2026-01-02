"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function GetGenres(props: { genres: { name: string; id: number }[] }) {
  const { genres } = props;
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get current IDs from URL and convert to an array of strings
  const currentIds = searchParams.get("id")?.split(",") || [];

  const handleClick = (id: number) => {
    const stringId = id.toString();
    let newIds: string[];

    if (currentIds.includes(stringId)) {
      // Remove ID if it's already there (deselect)
      newIds = currentIds.filter((item) => item !== stringId);
    } else {
      // Add ID if it's not there (select)
      newIds = [...currentIds, stringId];
    }

    // Filter out empty strings and join with commas
    const finalIds = newIds.filter(Boolean).join(",");

    // Update the URL
    router.push(`/genrePageDynamic?id=${finalIds}&page=1`);
  };

  return (
    <div>
      <div className="items-center flex flex-wrap gap-3">
        {genres.map((genre) => {
          const isSelected = currentIds.includes(genre.id.toString());

          return (
            <div
              key={genre.id}
              className={`cursor-pointer border-[1px] rounded-4xl px-4 py-1 font-[600] transition-colors
                ${
                  isSelected
                    ? "bg-black text-white border-black dark:bg-white dark:text-black"
                    : "bg-transparent border-gray-300"
                }`}
              onClick={() => handleClick(genre.id)}
            >
              {genre.name} {isSelected ? "✕" : ">"}
            </div>
          );
        })}
      </div>
    </div>
  );
}
