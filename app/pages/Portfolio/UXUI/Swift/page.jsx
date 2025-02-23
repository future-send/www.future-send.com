import React from "react";
import PortfolioSinglePage from "@/app/_components/PortfolioSinglePage.jsx";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";

export default function Page() {
  const uxui = portfolioData[0].uxui[0];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioSinglePage3Col
        title={uxui.title}
        subtitle={uxui.subtitle}
        imgSrc={uxui.imgSrc.slice(0, 3)} // Seleziona le prime 3 immagini
      />
      <PortfolioSinglePage
        imgSrc={uxui.imgSrc.slice(4)} // Solo la prima immagine
      />
      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="border-b border-neutral-400 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-2xl flex pe-2 me-4 border-r border-neutral-400">tools </h2>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
