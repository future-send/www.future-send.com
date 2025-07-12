import React from "react";
import Link from "next/link";
import portfolioData from "../data/portfolioData.js";

export default function PortfolioTabsprintcontent() {
  const marketing = portfolioData[0].Marketing;

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6 px-6">
      {marketing.map((item, index) => (
        <div key={index}>
          <div className="w-full h-48 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 rounded-xl">
            <Link href={item.link}>
              <img src={item.imgThumb} alt={`${item.title} ${item.subtitle}`} className="object-cover w-full h-full" />
            </Link>
          </div>
          <div className="flex justify-between items-center border-t border-neutral-600 mt-4 mx-3 px-3 pt-2 pb-4">
            <h1 className="text-neutral-200 text-xl tracking-tighter font-semibold">
              {item.title} <span className="font-light">{item.subtitle}</span>
            </h1>
            <div className="flex gap-2 text-neutral-400 text-xl h-4">{Array.isArray(item.tools) ? item.tools.map((tool, i) => <img key={i} src={tool} alt={`Tool ${i}`} />) : item.tools && <img src={item.tools} alt="Tool" />}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
