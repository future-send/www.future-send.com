import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";
import PortfolioTitle from "@/app/_components/PortfolioTitle.jsx";

export default function Page() {
  const dev = portfolioData[0].featureDev[0];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioTitle title={dev.title} subtitle={dev.subtitle} />
      <PortfolioSinglePage3Col
        imgSrc={dev.imgSrc} // Passiamo l'array di immagini
      />

      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/next.svg" nameTool="Next js" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/tailwind.svg" nameTool="tailwind" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/shadcn.svg" nameTool="shadcn-ui" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/gsap.svg" nameTool="gsap" />
              </div>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="figma" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
