"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-neutral-400">
      <div className="text-center ">
        <h1 className="text-[12rem] tracking-tighter font-black text-neutral-400 -mb-14">404</h1>
        <h2 className="text-xl font-semibold mb-0">Page Not Found</h2>
        <p className="text-muted-foreground md:text-xl text-md mb-6">Oops! The page you are looking for seems to have wandered off.</p>
        <div className="flex justify-center gap-4">
          <Link href="/" className="rounded-md bg-neutral-400 px-5 py-2.5 text-xl font-semibold text-neutral-900 hover:bg-neutral-800 hover:text-neutral-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-600 transition duration-500">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
