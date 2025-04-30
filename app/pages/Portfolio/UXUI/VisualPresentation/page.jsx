import React from "react";
import PortfolioSinglePage2Col from "@/app/_components/PortfolioSinglePage2Col.jsx";
import PortfolioSiglePageTools from "@/app/_components/PortfolioSiglePageTools.jsx";
import portfolioData from "../../../../data/portfolioData.js";

export default function Page() {
  const uxui = portfolioData[0].uxui[8];

  return (
    <div className="mt-40 pb-16 animate__animated animate__fadeIn">
      <PortfolioSinglePage2Col title={uxui.title} subtitle={uxui.subtitle} imgSrc={uxui.imgSrc} />
      <div className="mt-4 mx-6 space-y-16 ">
        <div className="grid grid-cols-1 gap-6">
          <div className="border-b border-neutral-400 py-3 px-8 flex flex-row items-center justify-between ">
            <div className="flex items-center">
              <h2 className="font-light text-2xl flex pe-2 me-4 border-r border-neutral-400">tools </h2>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/figma.svg" nameTool="Figma" />
              </div>
              <div className=" flex flex-col items-center me-2 ">
                <PortfolioSiglePageTools logoTool="/skills/sketch.svg" nameTool="sketch" />
              </div>
            </div>
            {/* <div className="flex items-center content-center">
              <h2 className="font-light text-2xl me-2">See it</h2>
              <Link target="_blank" href="https://www.figma.com/proto/qyi2ULzbHWeei7NfIvzihE/Prototype?page-id=0%3A1&node-id=20-84726&node-type=CANVAS&viewport=88%2C54%2C0.48&t=fVtqiaTvs0sWODY9-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2" className="text-neutral-900 hover:text-neutral-900 flex items-center">
                <FontAwesomeIcon icon={faCirclePlay} className="mr-2 w-6 h-6 text-neutral-900 hover:text-neutral-300 transition duration-500" />
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
