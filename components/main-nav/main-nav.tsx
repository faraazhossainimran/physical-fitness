import navItems from "@/types/nav/nav";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoSearch } from "react-icons/io5";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
const MainNav = () => {
  const menuItems: navItems = [
    {
      item: "Home",
      url: "/",
    },
    {
      item: "About",
      url: "/about",
    },
    {
      item: "Courses",
      url: "/shop",
    },
    {
      item: "Events",
      url: "/events",
    },
    {
      item: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="h-[100px] bg-blue">
      <div className="md:container px-4 md:px-2 h-full mx-auto">
        <div className="flex items-center justify-between h-full py-6 md:text-3xl text-whiteDark">
          <div className=""><Image layout="responsive" width={"150"} height={"150"} src={"https://i.ibb.co/VH3V7dH/assessment-logo-1.png"} alt="logo"></Image></div>
          {/* Hamburger menu icon for mobile */}
          <div className="md:hidden -order-1">
            {/* Insert your hamburger menu icon here */}
            <IoMenu size={32}/>
          </div>
          <div className="hidden md:block text-center">
            <ul className="flex">
              {menuItems.map((menuItem, index) => (
                <li key={index} className="mr-8 hover:border-b-yellow hover:border-b-2 pb-6 -mb-6 hover:text-yellow">
                  <Link href={menuItem.url}>{menuItem.item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-3xl mt-2">
              <IoSearch className=""/>
            </div>
            <div>
              <Avatar>
                <AvatarImage
                  className="border-1 border-white border-solid rounded"
                  src="https://i.ibb.co/pRrdTg9/Ellipse-16.png"
                  alt="@shadcn"
                />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
