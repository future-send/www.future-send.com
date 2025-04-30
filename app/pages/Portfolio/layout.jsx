"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faCode, faPrint } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { href: "/pages/Portfolio/UXUI", label: "UX/UI", icon: faPalette },
    { href: "/pages/Portfolio/Dev", label: "DEV", icon: faCode },
    { href: "/pages/Portfolio/Marketing", label: "Marketing", icon: faPrint },
  ];

  // Redirect to UX/UI tab by default if the current path is "/pages/Portfolio"
  useEffect(() => {
    if (pathname === "/pages/Portfolio") {
      router.replace("/pages/Portfolio/UXUI");
    }
  }, [pathname, router]);

  return (
    <div className="mt-14">
      {/* Tabs Bar */}
      <div className="flex justify-center bg-neutral-900 pt-32 fixed top-0 z-30 left-0 right-0 ">
        <div className="px-48 border-b border-gray-500 gap-8 flex mb-6 animate__animated animate__fadeIn animate__slow">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className={`px-2 sm:px-2 md:px-10  text-4xl font-bold title ${pathname.includes(tab.href) ? "border-b-4 border-neutral-400 text-neutral-400" : "border-b-4 border-neutral-900 text-neutral-400 hover:text-neutral-400 hover:border-b-4 hover:border-neutral-400 transition"}`}>
              <FontAwesomeIcon className="w-6 h-6 hidden lg:inline-block me-2 mb-1" icon={tab.icon} />
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="mt-56 mb-16 container mx-auto">{children}</div>
    </div>
  );
}
