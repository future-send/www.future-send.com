import React from "react";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";
import PortfolioSinglePage from "@/app/_components/PortfolioSinglePage.jsx";
import PortfolioSinglePage3Col from "@/app/_components/PortfolioSinglePage3Col.jsx";
import PortfolioTitle from "@/app/_components/PortfolioTitle.jsx";

export default function Page() {
  const marketing = portfolioData[0].Marketing[2];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioTitle title={marketing.title} subtitle={marketing.subtitle} />
      <PortfolioSinglePage2Col
        imgSrc={marketing.imgSrc.slice(0, 6)} // Passiamo l'array di immagini
      />

      <PortfolioSinglePage3Col
        imgSrc={marketing.imgSrc.slice(6, 9)} // Passiamo l'array di immagini
      />

      <PortfolioSinglePage2Col
        imgSrc={marketing.imgSrc.slice(9, 11)} // Passiamo l'array di immagini
      />
      <PortfolioSinglePage
        imgSrc={marketing.imgSrc.slice(11)} // Passiamo l'array di immagini
      />

      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="mt-2 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-lg flex pe-4 me-4 border-r border-neutral-400">tools </h2>

              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/adobeillustrator.svg" nameTool="illustrator" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/adobephotoshop.svg" nameTool="photoshop" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/adobeindesign.svg" nameTool="indesign" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
