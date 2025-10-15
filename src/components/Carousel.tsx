"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export function CarouselComponent() {
  return (
    <div className="flex justify-center ">
      <Carousel 
      opts={{loop:true}}
        className="relative"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="w-[1200px] h-[667px]  ">
          <CarouselItem>
            <img src="/photos/wicked.jpg" alt="" className="" />
          </CarouselItem>
          <CarouselItem className="flex justify-center ">
            {" "}
            <img src="/photos/gladiator.png" alt="" className="w-[1200px]" />
          </CarouselItem>
          <CarouselItem>
            {" "}
            <img src="/photos/moana.jpg" alt="" className="" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-5" />
        <CarouselNext className="absolute right-5" />
      </Carousel>
    </div>
  );
}
