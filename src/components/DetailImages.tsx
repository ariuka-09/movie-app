"use client";
import { axiosInstance } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Trailer } from "./Trailer";
import { error } from "console";

export function DetailImages({ id }: { id: string }) {
  const [images, setImages] = useState<any>();
  const [trailer, setTrailer] = useState<any>();

  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    console.log("images", response.data);

    setImages(response.data);
  };

  useEffect(() => {
    getImages();
    getTrailer();
  }, []);

  const getTrailer = async () => {
    const response = await axiosInstance.get(
      `/movie/${id}/videos?language=en-US`
    );
    const trailer = response.data.results.filter(
      (element: { key: string; name: string; official: boolean }) => {
        const trailerName = element.name.toLocaleLowerCase();
        if (trailerName.includes("trailer")) {
          return true;
        }
      }
    );
    setTrailer(trailer);
    console.log("Trailer", response);
  };
  if (!images || !trailer) {
    return "loading";
  }
  return (
    <div className="flex gap-[2%] w-full h-full">
      <img
        className="w-[30%] "
        src={" https://image.tmdb.org/t/p/w500" + images.poster_path}
        alt=""
      />
      <div className="relative w-[100%] ">
        <img
          className="w-[100%] absolute right-0  h-full"
          src={" https://image.tmdb.org/t/p/original" + images.backdrop_path}
          alt=""
        />
        {trailer.length != 0 ? (
          <Trailer trailer={trailer}></Trailer>
        ) : (
          <div>Not found </div>
        )}
      </div>
    </div>
  );
}
