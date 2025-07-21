import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";
import PortfolioSinglePage4Col from "@/app/_components/PortfolioSinglePage4Col.jsx";
import PortfolioTitle from "@/app/_components/PortfolioTitle.jsx";

export default function Page() {
  const dev = portfolioData[0].dev[4];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioTitle title={dev.title} subtitle={dev.subtitle} />
      <PortfolioSinglePage3Col imgSrc={dev.imgSrc.slice(0, 3)} />
      <PortfolioSinglePage2Col imgSrc={dev.imgSrc.slice(3, 7)} />
      <PortfolioSinglePage3Col imgSrc={dev.imgSrc.slice(7, 10)} />
      <PortfolioSinglePage4Col imgSrc={dev.imgSrc.slice(10, 14)} />

      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/html5.svg" nameTool="html" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/css3.svg" nameTool="css" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/javascript.svg" nameTool="javascript" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/angular.svg" nameTool="angular" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
