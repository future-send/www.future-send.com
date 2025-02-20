"use client";
import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen text-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-60 overflow-hidden">
      <div>
        <h1 className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[160px] font-bold border-b border-neutral-400 leading-tight tracking-tighter">Cris Delli-Zotti</h1>
        <h3 className="text-neutral-400 text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 lg:px-12 xl:px-32 ">
          A passionate and creative UX/UI Designer and Front-End Developer with a keen eye for crafting user-centric digital experiences. Adept at designing and developing responsive, accessible, and aesthetically pleasing web interfaces that engage users and deliver intuitive interactions.
        </h3>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link href="/pages/Portfolio" className="rounded-md bg-neutral-900 px-5 py-2.5 text-xl font-semibold text-white hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition duration-500">
            Portfolio
          </Link>
          <Link href="/pages/Resume" className="text-xl font-semibold text-neutral-900 ">
            Resume <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
