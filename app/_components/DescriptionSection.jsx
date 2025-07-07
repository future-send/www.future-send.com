import React from "react";
import descriptionData from "../data/descriptionData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function DescriptionSection() {
  return (
    <div className="my-16">
      <div className="flex flex-col mb-20 lg:flex-row items-start sm:px-0 md:px-8">
        <h1 className="text-2xl sm:mb-2 leading-9 font-light tracking-tight sm:pb-2 md:pb-0 flex-1 ">
          I’m a multidisciplinary digital professional with more than two decades of experience designing, developing, and delivering innovative user-centered web experiences. My work sits at the intersection of design precision and code performance, enabling me to bridge creative vision with full technical execution. From early-stage conceptualization to
          full deployment, I lead and contribute to projects across UX/UI design, front-end development, and scalable back-end architecture.
        </h1>
      </div>

      {descriptionData.map((description, index) => (
        <div key={index} className="mb-24">
          <div className="border-b border-neutral-500  mb-8 flex flex-col lg:flex-row items-start sm:px-0 md:px-8">
            <h1 className="text-4xl sm:mb-2   font-bold tracking-tighter sm:pb-2 md:pb-0 flex-1 ">{description.section}</h1>
          </div>

          <h2 className="font-light text-2xl tracking-tight mt-4 mb-2 sm:px-0 md:px-8 leading-9">{description.description}</h2>

          {/* Title for the list (optional) */}
          {description.titleList && <h3 className="font-semibold text-2xl mt-6 mb-2 sm:px-0 md:px-8">{description.titleList}</h3>}

          {/* List rendering if exists */}
          {description.list && (
            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-2 font-light sm:text-lg md:text-2xl sm:ps-0 lg:ps-8 mt-0">
              {description.list.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <FontAwesomeIcon className="w-4 h-4 flex-shrink-0 mt-1" icon={faCaretRight} />
                  <span className="flex-1 leading-6">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
