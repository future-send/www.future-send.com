import React from "react";
import experienceData from "../data/experienceData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "./TitleSection";

export default function ExperienceSection() {
  return (
    <div className="my-16">
      <TitleSection titleSection="EXPERIENCE" />
      {experienceData.map((experience, index) => (
        <div key={index} className="mt-12">
          {/* Azienda e Periodo */}
          <div className="border-b border-neutral-500 mb-2 flex flex-col lg:flex-row items-start sm:px-0 md:px-8">
            <h1 className="text-4xl sm:mb-2 font-bold tracking-tighter sm:pb-2 md:pb-0 flex-1">{experience.company}</h1>
            <h3 className="sm:text-sm md:text-xl font-light tracking-tighter flex-1 pt-2   lg:text-right">
              <FontAwesomeIcon className="w-4 h-4 mb-1 me-2 inline-block " icon={faLocationDot} />
              {experience.location}
              <FontAwesomeIcon className="w-4 h-4 mb-1 me-2 inline-block ms-10 " icon={faCalendarDays} /> {experience.period}
            </h3>
          </div>

          {/* Ruolo */}
          <h2 className="font-bold text-2xl tracking-tighter mt-4 mb-2 sm:px-0 md:px-8">{experience.role}</h2>

          {/* Responsabilità */}
          <ul className="sm:ps-0 lg:ps-8 mt-0 font-light  sm:text-lg md:text-xl">
            {experience.responsibilities.map((task, idx) => (
              <li key={idx} className="flex items-start gap-2 mb-2">
                <FontAwesomeIcon className="w-4 h-4 flex-shrink-0 mt-1" icon={faCaretRight} />
                <span className="flex-1 leading-6">{task}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
