import navItems from "@/types/nav/nav";
import Link from "next/link";
import React from "react";

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
    {
      item: "home",
      url: "/",
    },
  ];
  return (
    <div className="h-[80px] w-[100%] bg-blue">
      <div className="container h-full mx-auto">
        <div className="grid grid-cols-1 gap-2 md:grid-cols-3 place-items-center text-white py-6">
          <div className="place-self-cente">logo</div>
          <div className="text-center">
            <ul className="flex">
              {menuItems.map((menuItem, index) => (
                <li key={index} className="mr-8">
                  <Link href={menuItem.url}>{menuItem.item}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-right">Profile</div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
