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
          My<b className="#0a0a0a">Folio</b>
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
      <div>
        <div className="grid grid-cols-2 gap-10 mt-20 h=[70vh] px-20">
          <div className="text-4xl font-bold text-primary">
            <h1>MyFolio - Your Personalized Portfolio Builder</h1>
            <p>
              MyFolio is a platform that lets you create a personalized
              portfolio in just minutes. It’s easy to use and packed with
              features. You can quickly add your projects, skills, and
              experiences to showcase your work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
