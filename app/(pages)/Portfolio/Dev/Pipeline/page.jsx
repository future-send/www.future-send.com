import React from "react";
import PortfolioSinglePage from "@/app/_components/PortfolioSinglePage.jsx";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";

export default function Page() {
  const dev = portfolioData[0].dev[0];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioSinglePage2Col
        title={dev.title}
        subtitle={dev.subtitle}
        imgSrc={dev.imgSrc.slice(0, 6)} // Passiamo l'array di immagini
      />
      <PortfolioSinglePage
        imgSrc={dev.imgSrc.slice(6, 8)} // Passiamo l'array di immagini
      />
      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          {" "}
          <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/react.svg" nameTool="React" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/tailwind.svg" nameTool="Tailwind" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/next.svg" nameTool="Next JS" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
