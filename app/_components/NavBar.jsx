"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "animate.css";

export default function NavBar() {
  const pathname = usePathname(); // Ottieni il percorso corrente
  const isHome = pathname === "/";

  const links = [
    { href: "/", label: "Cris" },
    { href: "/pages/Resume", label: "Resume" },
    { href: "/pages/Portfolio", label: "Portfolio" },
    { href: "/pages/Contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full pt-14 flex justify-center items-center text-neutral-400 text-2xl fixed top-0 left-0 right-0 z-50 animate__animated  animate__fadeIn animate__slower 
    ${isHome ? "bg-transparent" : "bg-neutral-900"} `}>
      <ul className="flex flex-row justify-center border-b border-neutral-400 gap-5 px-10">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`px-2 text-center ${
                href === "/"
                  ? "text-neutral-400" // Sempre attivo per "Cris"
                  : pathname === href || (href === "/pages/Portfolio" && pathname.startsWith("/pages/Portfolio"))
                  ? "border-b-4 border-neutral-400 text-neutral-400"
                  : "hover:border-b-4 hover:border-neutral-400 transition duration-500"
              }`}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
