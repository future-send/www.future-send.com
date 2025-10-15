"use client";
import React from "react";
import Link from "next/link";
import Testimonials from "./_components/Testimonials";

export default function Home() {
  return (
    <>
      <main className="relative mt-32  text-white">
        <div className="relative flex items-center justify-center min-h-screen text-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-60 overflow-hidden text-neutral-400">
          <div>
            <div className="my-32">
              <h1 className="text-neutral-300 title text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[160px] font-bold border-b border-neutral-500 leading-tight tracking-1">Cris Delli-Zotti</h1>
              <h3 className="text-neutral-400 text-lg sm:text-xl lg:text-xl xl:text-2xl  font-light mt-6 sm:mt-8 lg:px-11 xl:px-24">
                A multidisciplinary professional combining a strong eye for <span className="font-bold uppercase">UX/UI design</span> with <span className="font-bold uppercase">Full-Stack development</span> skills. Experienced in crafting user-centered interfaces and building scalable web applications using modern technologies like <span> </span>
                <span className="font-bold uppercase">React</span>, <span className="font-bold uppercase">NextJS</span>,<span> </span>
                <span className="font-bold uppercase">Tailwind CSS</span>, <span className="font-bold uppercase">NodeJS</span>, and different <span className="font-bold uppercase">Open-source Backend (BaaS)</span> platform. Passionate about creating intuitive, high-performance digital experiences that merge aesthetics with functionality.
              </h3>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="/Portfolio" className="rounded-md bg-neutral-400 px-5 py-2.5 text-xl font-semibold text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition duration-500 min-w-36">
                  Portfolio
                </Link>
                <Link href="/About" className="text-xl font-semibold text-neutral-400">
                  About<span aria-hidden="true"> →</span>
                </Link>
              </div>
            </div>
            <Testimonials />
          </div>
        </div>
      </main>
    </>
  );
}
