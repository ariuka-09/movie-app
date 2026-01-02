"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { SearchIcon, X, Star, ChevronRight } from "lucide-react";
import { axiosInstance } from "@/lib/utils";
import { MovieType } from "@/lib/movieType";

export function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [text, setText] = useState(searchParams.get("value") || "");
  const [moviesBySearch, setMoviesBySearch] = useState<MovieType[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const performInlineSearch = async (query: string) => {
    if (!query.trim()) {
      setMoviesBySearch([]);
      return;
    }
    try {
      const response = await axiosInstance.get(
        `/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`
      );
      setMoviesBySearch(response.data.results || []);
      setIsOpen(true);
    } catch (error) {
      console.error("Search failed", error);
    }
  };

  useEffect(() => {
    if (!text) {
      setMoviesBySearch([]);
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      performInlineSearch(text);
    }, 600); // 600ms is a sweet spot for "snappy" search

    return () => clearTimeout(timer);
  }, [text]);

  const handleSearchNavigation = (query: string) => {
    if (query.trim()) {
      setIsOpen(false);
      router.push(`/searchPage?value=${encodeURIComponent(query)}&page=1`);
    }
  };

  return (
    <div className="relative w-full max-w-md" ref={dropdownRef}>
      {/* Input Group */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchIcon className="w-4 h-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
        </div>

        <input
          type="text"
          placeholder="Search movies..."
          value={text}
          onFocus={() => text && setIsOpen(true)}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearchNavigation(text)}
          className="block w-full p-2.5 pl-10 pr-10 text-sm border rounded-lg bg-transparent border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
        />

        {text && (
          <button
            onClick={() => {
              setText("");
              setMoviesBySearch([]);
            }}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 3. Enhanced Dropdown Results */}
      {isOpen && moviesBySearch.length > 0 && (
        <div className="absolute z-50 w-full mt-2 bg-white dark:bg-[#121213] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden overflow-y-auto max-h-[420px]">
          <div className="flex flex-col">
            {moviesBySearch.slice(0, 6).map((movie: MovieType) => (
              <div
                key={movie.id}
                className="flex items-center gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer transition-colors border-b last:border-0 border-gray-100 dark:border-gray-800"
                onClick={() => {
                  setIsOpen(false);
                  router.push(`/moviePage/${movie.id}`);
                }}
              >
                {/* Thumbnail */}
                <div className="h-14 w-10 flex-shrink-0 overflow-hidden rounded bg-gray-200 dark:bg-gray-800">
                  {movie.poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                      alt={movie.title}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[8px] text-gray-500">
                      N/A
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-sm font-semibold truncate dark:text-gray-100">
                    {movie.title}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5">
                    <div className="flex items-center gap-1 text-yellow-500">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {movie.release_date?.split("-")[0] || "Unknown"}
                    </span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-gray-300" />
              </div>
            ))}

            {/* View All Footer */}
            <button
              onClick={() => handleSearchNavigation(text)}
              className="p-3 text-xs font-bold text-center bg-gray-50 dark:bg-[#1c1c1e] text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <span>See all results for &quot;{text}&quot;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
