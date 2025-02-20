import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";

export default function Page() {
  const dev = portfolioData[0].dev[1];

  return (
    <div className="mt-40 pb-16">
      <PortfolioSinglePage2Col
        title={dev.title}
        subtitle={dev.subtitle}
        imgSrc={dev.imgSrc.slice(0, 2)} // Passiamo l'array di immagini
      />
      <PortfolioSinglePage3Col
        imgSrc={dev.imgSrc.slice(2, 5)} // Passiamo l'array di immagini
      />
      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="border-b border-neutral-900 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-2xl flex pe-2 me-4 border-r border-neutral-900">tools </h2>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="figma" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/html5.svg" nameTool="HTML" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/css3.svg" nameTool="CSS" />
              </div>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/wp.svg" nameTool="Wordpress" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
