import Link from "next/link";
import React from "react";
type categoryItem = {
  item: string;
  url: string;
}[];
const Category: React.FC = () => {
  const categoryItems: categoryItem = [
    {
      item: "Most View",
      url: "/most-view",
    },
    {
      item: "Geriatric",
      url: "/geriatric",
    },
    {
      item: "Pediatric",
      url: "/pediatric",
    },
    {
      item: "Orthopedic",
      url: "/orthopedic",
    },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-2">
        <ul className="grid grid-cols-2 md:grid-cols-4">
          {categoryItems.map((categoryItem, index) => (
            <li
              key={index}
              className="mr-6 text-yellow pb-3 hover:border-b-yellow hover:border-b-4"
            >
              <Link href={categoryItem.url}>{categoryItem.item}</Link>
            </li>
          ))}
        </ul>
        <div className="text-center text-yellow"> 
          <div className="">
            <div className="flex md:justify-end justify-center"> 
              <p className="mr-2 md:mr-6">{"<"}</p>
              <div className="mr-2 md:mr-6 inline-block h-5 w-5 bg-yellow rounded-full items-center justify-center">
                <p className= " text-white">1</p>
              </div>
              <p className="mr-2 md:mr-6">2</p>
              <p className="mr-2 md:mr-6">3</p>
              <p className="mr-2 md:mr-6">...</p>
              <p className="mr-2 md:mr-6">55</p>
              <p className="mr-2 md:mr-6">{">"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
