import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import portfolioData from "../data/portfolioData.js";

export default function PortfolioSubTitle() {
  const item = portfolioData;
  return (
    <div className="mt-4 mx-6 space-y-16 ">
      <div className="grid grid-cols-1 gap-6">
        <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
          <div className="flex items-center">
            <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

            <div className=" flex flex-col items-center me-2 ">
              <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
            </div>
          </div>
          <div className="flex">
            <h2 className="pe-3">see the preview</h2>

            {item.hasPreview && (
              <Link href={item.preview} className="flex items-center border-s border-neutral-400 ps-3" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className="text-neutral-400 transition-transform duration-300 ease-in-out hover:scale-125" size="xl" icon={faCirclePlay} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
