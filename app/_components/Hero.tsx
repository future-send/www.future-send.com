import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="fixed inset-0 -z-50">
      {/* Background image */}
      <Image src="/hero.jpg" alt="Hero Background" fill className="object-cover object-center" priority />

      {/* Overlay dark background */}
      <div className="absolute inset-0 bg-neutral-900/80" />
    </div>
  );
}
