"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DarkToggle from "./darkToggle";

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      console.log(isDark);
    } else {
      document.documentElement.classList.remove("dark");
      console.log(isDark);
    }
  }, [isDark]);
  return (
    <>
      <div className="text-black dark:text-white dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900 w-full flex justify-around p-2 items-center fixed bg-white z-10">
        <Link href={"/"}>
          <h1 className="font-extrabold text-3xl">Norex</h1>
        </Link>

        <div className="flex gap-6">
          <Link href={"/"}>Home</Link>
          <Link href={"/search"}>Search</Link>
          <Link href={"/"}>NFTs</Link>
          <div
            onClick={() => setIsDark(!isDark)}
            className="hover:text-blue-600"
          >
            <DarkToggle isDarkMode={isDark} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
