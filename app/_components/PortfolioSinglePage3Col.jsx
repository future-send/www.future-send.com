"use client";
import React from "react";

export default function PortfolioSinglePage3Col({ title, imgSrc }) {
  return (
    <div>
      {/* Immagini */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-4 px-6">
        {imgSrc.map((src, index) => (
          <img key={index} src={src} alt={title} title={title} className="w-full border border-neutral-500 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
