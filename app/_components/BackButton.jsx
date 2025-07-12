"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BackButton() {
  const pathname = usePathname();

  const segments = pathname.split("/").filter(Boolean);

  const isSubPage = segments.length > 2;

  if (!isSubPage) return null;

  return (
    <Link href=".." className="text-base font-light text-neutral-400 hover:text-neutral-200">
      <span aria-hidden="true">←</span> Back
    </Link>
  );
}
