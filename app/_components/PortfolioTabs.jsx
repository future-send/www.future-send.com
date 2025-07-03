"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette, faCode, faPrint } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioTabs({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  const tabs = [
    { href: "/Portfolio/UXUI", label: "UX/UI", icon: faPalette },
    { href: "/Portfolio/Dev", label: "DEV", icon: faCode },
    { href: "/Portfolio/Marketing", label: "MARKETING", icon: faPrint },
  ];

  // Redirect to UX/UI by default if no tab is selected
  useEffect(() => {
    const defaultTab = "/Portfolio/UXUI";
    if (!tabs.some((tab) => tab.href === pathname)) {
      router.push(defaultTab);
    }
  }, [pathname, router, tabs]);

  return (
    <div className="mt-14 ">
      <div className="flex justify-center bg-white pt-32 fixed top-0 z-30 left-0 right-0">
        <div className="px-48 border-b border-gray-300 gap-8 flex mb-6">
          {tabs.map((tab) => (
            <Link key={tab.href} href={tab.href} className={`px-10 text-4xl font-bold title ${pathname === tab.href ? "border-b-4 border-neutral-900 text-neutral-900" : "border-b-4 border-white text-neutral-200 hover:text-neutral-900 hover:border-b-4 hover:border-neutral-900 transition"}`}>
              <FontAwesomeIcon className="w-6 h-6 inline-block me-2 mb-1" icon={tab.icon} />
              {tab.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-40">{children}</div>
    </div>
  );
}
