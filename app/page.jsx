"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative w-full h-[100vh] flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg" // Sostituisci con il percorso della tua immagine
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative flex items-center justify-center min-h-screen text-center px-4 sm:px-10 md:px-20 lg:px-32 xl:px-60 overflow-hidden bg-neutral-900/80 text-neutral-400">
        <div>
          <h1 className="text-6xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-9xl 2xl:text-[160px] font-bold border-b border-neutral-500 leading-tight tracking-tighter animate__animated animate__fadeInRight ">Cris Delli-Zotti</h1>
          <h3 className="text-neutral-400 text-lg sm:text-xl md:text-2xl font-light mt-6 sm:mt-8 lg:px-12 xl:px-32 animate__animated animate__fadeInLeft">
            A skilled <span className="font-bold">Front-End Developer</span> with a strong focus on <span className="font-bold">UX/UI design</span> and modern web development. With expertise in <span className="font-bold">React</span>, <span className="font-bold">Next.js</span>, <span className="font-bold">Tailwind</span>, and{" "}
            <span className="font-bold">Firebase</span>, Cris builds scalable and high-performance web applications. Passionate about design and interactivity, he combines creativity and technology to deliver seamless and engaging digital experiences. 🚀
          </h3>

          <div className="mt-10 flex items-center justify-center gap-x-6 animate__animated  animate__fadeIn animate__slower">
            <Link href="/Portfolio" className="rounded-md bg-neutral-400 px-5 py-2.5 text-xl font-semibold text-neutral-900 hover:bg-neutral-100 hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition duration-500">
              Portfolio
            </Link>
            <Link href="/Resume" className="text-xl font-semibold text-neutral-400 ">
              Resume <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
