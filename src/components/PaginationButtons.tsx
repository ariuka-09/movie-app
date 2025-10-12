"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function Pagination({ page, id }: { page: number; id: string }) {
  const router = useRouter();
  const handleOnNext = () => {
    router.push(`/genrePageDynamic/${id}/${Number(Page) + Number(1)}`);
  };
  const handleOnPrevious = () => {
    router.push(`/genrePageDynamic/${id}/${Number(Page) - 1}`);
  };
  const handleOnDynamic = (Page: number) => {
    router.push(`/genrePageDynamic/${id}/${Number(Page)}`);
  };
  const [Page, setPage] = useState(Number(page));
  const Next = () => {
    setPage(Number(Page) + Number(1));
    console.log("page", Page);
  };
  const Previous = () => {
    setPage(Number(Page) - Number(1));
    console.log("page", Page);
  };
  return (
    <div className="flex gap-3 cursor-pointer">
      {Page != 1 ? (
        <button
          onClick={() => {
            Previous();
            handleOnPrevious();
            console.log(Page);
          }}
        >
          <p className="cursor-pointer">Previous</p>
        </button>
      ) : (
        <button>
          <p className="text-gray-500">Previous</p>
        </button>
      )}

      <div className="">
        {Page <= 497 ? (
          <div className="flex gap-3">
            <div
              onClick={() => {
                handleOnDynamic(Page);
              }}
            >
              {Page}
            </div>
            <div
              onClick={() => {
                handleOnDynamic(Page + 1);
              }}
            >
              {Page + 1}
            </div>
            <div
              onClick={() => {
                handleOnDynamic(Page + 2);
              }}
            >
              {Page + 2}
            </div>
            <div>. . . .</div>
            <div
              onClick={() => {
                handleOnDynamic(Page + 6);
              }}
            >
              {Page + 6}
            </div>
          </div>
        ) : Page == 498 ? (
          <div>
            <div
              onClick={() => {
                handleOnDynamic(Page);
              }}
            >
              {Page}
            </div>
            <div
              onClick={() => {
                handleOnDynamic(Page + 1);
              }}
            >
              {Page + 1}
            </div>

            <div
              onClick={() => {
                handleOnDynamic(500);
              }}
            >
              500
            </div>
          </div>
        ) : Page == 499 ? (
          <div className="flex">
            <div
              onClick={() => {
                handleOnDynamic(Page);
              }}
            >
              {Page}
            </div>

            <div
              onClick={() => {
                handleOnDynamic(500);
              }}
            >
              500
            </div>
          </div>
        ) : (
          <div>
            <div
              onClick={() => {
                handleOnDynamic(500);
              }}
            >
              500
            </div>
          </div>
        )}
      </div>

      {Page != 500 ? (
        <button
          onClick={() => {
            Next();
            handleOnNext();
            console.log(Page);
          }}
        >
          <p className="cursor-pointer">Next</p>
        </button>
      ) : (
        <button>
          <p className="text-gray-500">Next</p>
        </button>
      )}
    </div>
  );
}
