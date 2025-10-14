import { axiosInstance } from "@/lib/utils";
import React from 'react'
import { Trailer } from "./Trailer";

export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  };
  const movie = await getImages();

  const getTrailer = async () => {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    const trailer = response.data.results.filter((element:{key:string; name:string})=>{
      if(element.name=="Official Trailer"){
        return true;
      }
    })
    return trailer[0].key;
  };
  const trailer = await getTrailer();
 console.log("trailer", trailer)
  return (
    <div className="flex gap-[2%] w-full">
      <img
        className="w-[30%] "
        src={" https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div>
      <img
        className="w-[68%] "
        src={" https://image.tmdb.org/t/p/original" + movie.backdrop_path}
        alt=""
      />
      <Trailer trailer={trailer}></Trailer>
      </div>
     
      
  
    </div>
  );
}
