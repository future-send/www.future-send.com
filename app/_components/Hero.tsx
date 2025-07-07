import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="absolute top-0 -z-50 inset-0">
      <Image src="/hero.jpg" alt="Hero Background" fill className="object-cover object-center" priority />
    </div>
  );
}
