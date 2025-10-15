import React from "react";
import Link from "next/link";
import portfolioData from "../data/portfolioData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioTabsUXUIcontent() {
  const uxui = portfolioData[0].uxui;

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6 px-6">
      {uxui.map((item, index) => (
        <div key={index}>
          <div className="w-full h-48 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl">
            <Link href={item.link}>
              <img src={item.imgThumb} alt={`${item.title} ${item.subtitle}`} className="object-cover w-full h-full" />
            </Link>
          </div>
          <div className="flex justify-between items-center  border-t border-neutral-600 mt-4 mx-3 px-3 pt-2 pb-4">
            <h1 className="text-neutral-200 text-xl tracking-tighter font-semibold">
              {item.title} <span className="font-light">{item.subtitle}</span>
            </h1>
            <div className="flex gap-2 text-neutral-400 text-xl h-4">
              {Array.isArray(item.tools) ? item.tools.map((tool, i) => <img key={i} src={tool} alt={`Tool ${i}`} />) : item.tools && <img src={item.tools} alt="Tool" />}
              {item.hasPreview && (
                <Link href={item.preview} className="flex items-center border-s ps-3" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon className="text-neutral-200 transition-transform duration-300 ease-in-out hover:scale-125" size="sm" icon={faCirclePlay} />
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
