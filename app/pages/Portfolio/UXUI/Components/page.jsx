import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";

import portfolioData from "../../../../data/portfolioData.js";

export default function Page() {
  const uxui = portfolioData[0].uxui[6];

  return (
    <div className="mt-40 pb-16">
      <PortfolioSinglePage3Col title={uxui.title} subtitle={uxui.subtitle} imgSrc={uxui.imgSrc} />

      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="border-b border-neutral-900 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-2xl flex pe-2 me-4 border-r border-neutral-900">tools </h2>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
