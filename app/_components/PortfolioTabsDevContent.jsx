import React from "react";
import Link from "next/link";
import portfolioData from "../data/portfolioData.js";

export default function PortfolioTabsdevcontent() {
  const dev = portfolioData[0].dev;

  return (
    <>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6 px-6">
        {dev.map((item, index) => (
          <div key={index}>
            <div className="w-full h-48 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 rounded-xl">
              <Link href={item.link}>
                <img src={item.imgThumb} alt={`${item.title} ${item.subtitle}`} className="object-cover w-full h-full " />
              </Link>
            </div>
            <h1 className="text-center text-xl tracking-tighter font-bold py-4">
              {item.title} <span className="font-light">{item.subtitle}</span>
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}
