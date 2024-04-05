import React from "react";
import { GoArrowUpRight } from "react-icons/go";
const RelatedPagination = () => {
  return (
    <div className="container mx-auto my-12">
      <div className="flex justify-between border-b-2 pb-6">
        <div className="">Related Videos</div>
        <div className="flex">
          <div className="flex">
            <p className="mr-2 md:mr-6 text-[#ccc]">{"<"}</p>
            <div className="mr-2 md:mr-6 inline-block h-5 w-5 bg-yellow rounded-full items-center justify-center">
              <p className="ml-[5px]">1</p>
            </div>
            <p className="mr-2 md:mr-6">2</p>
            <p className="mr-2 md:mr-6">{">"}</p>
          </div>
          <div className="ml-4 md:ml-12 flex">
            <p> View All</p>
            <p className="mt-1 ml-1">
              <GoArrowUpRight />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedPagination;
