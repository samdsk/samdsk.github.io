"use client";
import React from "react";
import NavMenu from "./NavMenu";
import Logo from "./Logo";

export default function Nav() {


  return (
    <>
      <div className="sticky max-h-[10vh] w-full p-5 top-0 z-50 flex-wrap items-center justify-between bg-gray-950">
        <nav className="flex flex-row items-center justify-between px-2">
          <div className="text-white font-mono text-2xl">
            <Logo />
          </div>
          <div className="flex flex-row justify-between">
            <NavMenu />
          </div>
        </nav>
      </div>
    </>
  );
}
