import * as React from "react";
import { GroupedMovies } from "@/components/GroupedMovies";
import { CarouselComponent } from "@/components/Carousel";
import { Movies } from "@/components/Movies";

export default async function Home() {
  const movies = await Movies();
  return (
    <div className="flex flex-col gap-10 ">
      <CarouselComponent />   
          <div className="flex flex-col gap-10 justify-center items-center">
        {movies.map((movieGroup) => {
          return (
            <GroupedMovies
              key={Math.random()}
              movies={movieGroup.movieType}
              text={movieGroup.category}
            />
          );
        })}
      </div>
    </div>
  );
}
