"use client";
import React from "react";

export default function PortfolioTitle({ title, subtitle }) {
  return (
    <div>
      {/* Titolo */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center border-b border-neutral-600 font-bold py-2 mb-12 tracking-tighter">
        {title} <span className="font-light"> {subtitle}</span>
      </h1>
    </div>
  );
}
