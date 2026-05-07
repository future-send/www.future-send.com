import React from "react";
import Link from "next/link";
import portfolioData from "../data/portfolioData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

export default function PortfolioTabsdevcontent() {
  // Recupera la sezione "dev" dal dataset
  const dev = portfolioData[0]?.dev || [];

  // Primo progetto come "featured"
  const featureDev = portfolioData[0].featureDev[0];
  // Resto dei progetti
  const remainingProjects = dev.slice(0);

  return (
    <>
      {/* Feature Section */}
      {featureDev && (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6 rounded-xl mx-6">
          <div className="col-span-2 w-full h-56 mr-6 border border-neutral-950 rounded-xl overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 relative">
            <Link href={featureDev.link} rel="noopener noreferrer">
              <img src={featureDev.imgThumb} alt={`${featureDev.title} ${featureDev.subtitle}`} className="object-cover w-full h-full" />
            </Link>

            {/* GitHub link */}
            {featureDev.github && (
              <Link href={featureDev.github} target="_blank" rel="noopener noreferrer" className="flex absolute bottom-4 right-11 items-center">
                <img src="https://studiocdz-db.com/studiocdz/tools/gitHub.svg" alt="GitHub" className="h-5 w-5 text-neutral-100 transition-transform duration-300 ease-in-out hover:scale-125" />
              </Link>
            )}

            {/* Live demo / URL link */}
            {featureDev.url && (
              <Link href={featureDev.url} target="_blank" rel="noopener noreferrer" className="flex absolute bottom-4 right-4 items-center">
                <FontAwesomeIcon className="text-neutral-100 transition-transform duration-300 ease-in-out hover:scale-125" size="lg" icon={faCirclePlay} />
              </Link>
            )}
          </div>

          <div className="flex flex-col items-top justify-center p-0 xl:p-6 my-6 border-l-none xl:border-l border-neutral-600">
            <h1 className="text-neutral-200 text-3xl tracking-tighter font-semibold border-b border-neutral-600 pb-1 mb-0">
              {featureDev.title} <span className="font-light text-2xl">{featureDev.subtitle}</span>
            </h1>
            <div className="text-neutral-400 pt-3 flex gap-2">{Array.isArray(featureDev.tools) ? featureDev.tools.map((tool, i) => <img key={i} src={tool} alt={`Tool ${i}`} className="h-5" />) : featureDev.tools ? <img src={featureDev.tools} alt="Tool" className="h-8" /> : null}</div>
          </div>
        </div>
      )}

      {/* Projects Section */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6 px-6">
        {remainingProjects.map((item, index) => (
          <div key={index}>
            <div className="w-full h-48 overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105 rounded-xl">
              <Link href={item.link} rel="noopener noreferrer">
                <img src={item.imgThumb} alt={`${item.title} ${item.subtitle}`} className="object-cover w-full h-full" />
              </Link>
            </div>

            <div className="flex justify-between items-center border-t border-neutral-600 mt-4 mx-3 px-3 pt-2 pb-4">
              <h1 className="text-neutral-200 text-xl tracking-tighter font-semibold">
                {item.title} <span className="font-light">{item.subtitle}</span>
              </h1>
              <div className="flex gap-2 text-neutral-400 text-xl h-4">{Array.isArray(item.tools) ? item.tools.map((tool, i) => <img key={i} src={tool} alt={`Tool ${i}`} />) : item.tools ? <img src={item.tools} alt="Tool" /> : null}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
