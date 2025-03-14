import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-5 flex flex-col gap-5">
      <h1 className=" text-green-500 font-bold">Homepage</h1>
      <Button className="w-max">Button</Button>
      <Input className="w-max" placeholder="type here.."></Input>
    </div>
  );
}
