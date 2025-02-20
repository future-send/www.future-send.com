"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function PortfolioSinglePage2Col({ title, subtitle, imgSrc }) {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || 0; // Recupera la tab attiva dalla query string

  return (
    <div>
      {/* Titolo */}
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center font-bold pt-2 pb-4 tracking-tighter">
        {title} <span className="font-light"> {subtitle}</span>
      </h1>

      {/* Immagini */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6">
        {imgSrc.map((src, index) => (
          <img key={index} src={src} alt={title} title={title} className="w-full border border-neutral-500" />
        ))}
      </div>
    </div>
  );
}

export default function PortfolioPageWrapper({ title, subtitle, imgSrc }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PortfolioSinglePage2Col title={title} subtitle={subtitle} imgSrc={imgSrc} />
    </Suspense>
  );
}
