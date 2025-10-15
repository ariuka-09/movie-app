import { axiosInstance } from "@/lib/utils";
import React from 'react'
import { Trailer } from "./Trailer";
import { error } from "console";

export async function DetailImages({ id }: { id: string }) {
  const getImages = async () => {
    const response = await axiosInstance.get(`/movie/${id}?language=en-US`);
    return response.data;
  };
  const movie = await getImages();

  const getTrailer = async () => {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    const trailer = response.data.results.filter((element:{key:string; name:string; official:boolean})=>{
      const trailerName = element.name.toLocaleLowerCase();
      if(trailerName.includes("trailer") ){
        return true;
      }
    })
    console.log("Trailer",response)
    return trailer;
  };
 
  let trailer = await getTrailer();
if(!trailer){
  const getTrailer = async () => {
    const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
    const trailer = response.data.results.filter((element:{key:string; name:string; official:boolean})=>{
      if(element.official==true ){
        return true;
      }
    })
    console.log("Trailer",trailer)
    return trailer;
  };
 
  trailer = await getTrailer();
}
  if(!trailer){
    const getTrailer = async () => {
      const response = await axiosInstance.get(`/movie/${id}/videos?language=en-US`);
      const trailer = response.data.results.filter((element:{key:string; name:string; official:boolean})=>{
        if(element.official==false ){
          return true;
        }
      })
      console.log("Trailer",response)
      return trailer;
    };
    trailer = await getTrailer();
  }
  return (
    <div className="flex gap-[2%] w-full h-full">
      <img
        className="w-[30%] "
        src={" https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt=""
      />
      <div className="relative w-[100%] ">
      <img
        className="w-[100%] absolute right-0  h-full"
        src={" https://image.tmdb.org/t/p/original" + movie.backdrop_path}
        alt=""
      />
     {
      trailer.length != 0 ? <Trailer trailer={trailer}></Trailer>: <div>Not found  </div>
     }
     
     
  
      </div>
     
      
  
    </div>
  );
}
