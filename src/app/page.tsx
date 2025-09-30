"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import Image from "next/image";
import { Link } from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { GroupedMovies } from "@/components/GroupedMovies";
import { MovieType } from "@/lib/movieType";
import test from "node:test";

export default function Home() {
  const testMovies: MovieType[] = [
    {
      name: "moana",
      rating: 9,
      img: ["httpjnanaks"],
    },
    {
      name: "one piece",
      rating: 10,
      img: ["httpjnanaks"],
    },
    {
      name: "naruto",
      rating: 9,
      img: ["httpjnanaks"],
    },
  ];
  return (
    <>
      <nav className="mx-4 px-16 py-[11.5px] flex justify-between ">
        <div className=" flex gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
          >
            <path
              d="M4.83341 1.16675V17.8334M13.1667 1.16675V17.8334M0.666748 9.50008H17.3334M0.666748 5.33341H4.83341M0.666748 13.6667H4.83341M13.1667 13.6667H17.3334M13.1667 5.33341H17.3334M2.48341 1.16675H15.5167C16.5201 1.16675 17.3334 1.9801 17.3334 2.98341V16.0167C17.3334 17.0201 16.5201 17.8334 15.5167 17.8334H2.48341C1.4801 17.8334 0.666748 17.0201 0.666748 16.0167V2.98341C0.666748 1.9801 1.4801 1.16675 2.48341 1.16675Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="text-[#4338CA] text-[16px] italic font-[700] ">
            Movie Z
          </p>
        </div>
        {/* <NavigationMenu>
          <NavigationMenuList className="flex gap-3">
            <NavigationMenuItem>
              <NavigationMenuTrigger>Genre</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>
                  <Button>Comedy</Button>
                </NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuContent>
                <NavigationMenuLink>Horror</NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuContent>
                <NavigationMenuLink>Thriller</NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuContent>
                <NavigationMenuLink>Action</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu> */}
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="">Genre</DropdownMenuTrigger>
            <DropdownMenuContent className="items-center flex flex-col min-w-[fit] ">
              <DropdownMenuItem className="  ">Horror</DropdownMenuItem>
              <DropdownMenuItem>Comedy</DropdownMenuItem>
              <DropdownMenuItem>Thriller</DropdownMenuItem>
              <DropdownMenuItem>Action</DropdownMenuItem>
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
        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M8 2.5C7.20435 3.29565 6.75736 4.37478 6.75736 5.5C6.75736 6.62522 7.20435 7.70435 8 8.5C8.79565 9.29565 9.87478 9.74264 11 9.74264C12.1252 9.74264 13.2044 9.29565 14 8.5C14 9.68669 13.6481 10.8467 12.9888 11.8334C12.3295 12.8201 11.3925 13.5892 10.2961 14.0433C9.19975 14.4974 7.99335 14.6162 6.82946 14.3847C5.66558 14.1532 4.59648 13.5818 3.75736 12.7426C2.91825 11.9035 2.3468 10.8344 2.11529 9.67054C1.88378 8.50666 2.0026 7.30026 2.45673 6.2039C2.91085 5.10754 3.67989 4.17047 4.66658 3.51118C5.65328 2.85189 6.81331 2.5 8 2.5Z"
              stroke="#FAFAFA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </nav>
      <div className="flex justify-center ">
        <Carousel
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
      <div className="flex flex-col gap-10">
        <GroupedMovies text="Upcoming" movies={testMovies}></GroupedMovies>
        <GroupedMovies text="Popular" movies={testMovies}></GroupedMovies>
      </div>
    </>
  );
}
