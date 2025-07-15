import React from "react";
import Link from "next/link";

export default function Footer() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/About", label: "About" },
    { href: "/Portfolio", label: "Portfolio" },
    { href: "/Contact", label: "Contact" },
  ];
  return (
    <footer className="container mx-auto mt-0 z-50">
      <div className="py-6 mx-6 px-6 flex flex-col md:flex-row justify-center md:justify-between items-center text-center gap-6 px-4 border-t border-neutral-600">
        {/* Left side */}
        <div className="hidden md:flex  space-x-1">
          <img src="/footer/icon-interactive-design.png" alt="icon-interactive-design" className="h-10 w-auto" />
          <img src="/footer/icon-web-design.png" alt="icon-web-design" className="h-10 w-auto" />
          <img src="/footer/icon-print-design.png" alt="icon-print-design" className="h-10 w-auto" />
        </div>

        {/* Right side */}
        <div className="flex flex-col md:flex-row items-center text-neutral-400 text-base gap-2 md:gap-0">
          <ul className="flex flex-row justify-center   px-2 sm:px-6">
            {links.map(({ href, label }) => (
              <li className="border-e border-neutral-400 last:border-none" key={href}>
                <Link href={href} className={`px-4 text-center `}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <p>2025 | Cris Delli-Zotti </p>
        </div>
      </div>
    </footer>
  );
}
