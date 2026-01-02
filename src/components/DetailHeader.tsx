"use client";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";

export function DetailHeader({ id }: { id: string }) {
  const [selectedMovie, setSelectedMovie] = useState<any>();
  const getSelectedMovie = async () => {
    const response = await axiosInstance.get(`movie/${id}?language=en-US`);
    setSelectedMovie(response.data);
  };
  useEffect(() => {
    getSelectedMovie();
  }, []);

  if (!selectedMovie) {
    return null;
  }
  return (
    <div className="flex justify-between mb-6">
      <div>
        <p className="text-[36px] font-[700] ">{selectedMovie.title} </p>
        <div className="flex gap-2">
          <p> {selectedMovie.release_date}</p>
          <p>·</p>
          <div className="flex gap-1">
            <p>{Math.floor(selectedMovie.runtime / 60)}h</p>
            <p>{selectedMovie.runtime % 60}m </p>
          </div>
        </div>
      </div>
      <div className="">
        <p>Rating</p>

        <div className=" flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
          >
            <path
              d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
              fill="#FDE047"
              stroke="#FDE047"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="">
            <p className="">
              <span className="text-[24px] font-600 ">
                {Math.floor(selectedMovie.vote_average * 10) / 10}
              </span>
              <span className="text-[#71717A]">/10</span>
            </p>
            <p className="text-[#71717A]">{selectedMovie.vote_count}k </p>
          </div>
        </div>
      </div>
    </div>
  );
}
