import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";

import portfolioData from "../../../../data/portfolioData.js";
import PortfolioTitle from "@/app/_components/PortfolioTitle.jsx";

export default function Page() {
  const uxui = portfolioData[0].uxui[5];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioTitle title={uxui.title} subtitle={uxui.subtitle} />
      <PortfolioSinglePage2Col
        imgSrc={uxui.imgSrc.slice(0, 4)} // Seleziona le prime 3 immagini
      />

      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/adobexd.svg" nameTool="Adobe XD" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/adobephotoshop.svg" nameTool="Photoshop" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
