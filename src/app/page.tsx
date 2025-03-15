import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const menuItems = [
  { title: "Home", path: "/" },
  // { title: "Projects", path: "/projects" },
  // { title: "Blogs", path: "/blogs" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex justify-between items-center bg-gray-100 px-20 py-5">
        <h1 className="font-bold text-2xl text-primary">
          Port<b className="text-[#FE4E59]">folio</b>
        </h1>
        <div className="flex justify-end gap-5 items-center">
          {menuItems.map((item) => (
            <span key={item.title} className="px-4">
              {item.title}
            </span>
          ))}
        </div>
        <Button className="w-max">Sign In</Button>
      </div>
    </div>
  );
}
