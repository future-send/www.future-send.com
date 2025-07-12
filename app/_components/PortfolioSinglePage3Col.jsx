"use client";
import React from "react";

export default function PortfolioSinglePage3Col({ title, subtitle, imgSrc }) {
  return (
    <div>
      {/* Titolo */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold pt-2 pb-4 tracking-tighter">
        {title} <span className="font-light"> {subtitle}</span>
      </h1>

      {/* Immagini */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
        {imgSrc.map((src, index) => (
          <img key={index} src={src} alt={title} title={title} className="w-full border border-neutral-500 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
