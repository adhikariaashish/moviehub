"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";

export default function Header() {
  return (
    <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
    <div className="flex gap-5">
      <MenuItem title="HOME" address="/" Icon={AiFillHome} />
      <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
    </div>

    <div  className='flex gap-4 items-center'>
        <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span>
        <span className="text-xl hidden sm:inline">Clone</span>
    </div>
    </div>
  );
}
