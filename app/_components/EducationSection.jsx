import React from "react";
import educationData from "../data/educationData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import TitleSection from "./TitleSection";

export default function EducationSection() {
  return (
    <div className="my-16">
      <TitleSection titleSection="Education" />

      <h1 className="text-5xl font-bold title"></h1>
      {educationData.map((education, index) => (
        <div key={index} className="mt-12">
          <div className="border-b border-neutral-500 mb-2 flex flex-col lg:flex-row items-start px-8">
            <h1 className="text-4xl sm:mb-2 font-bold tracking-tighter sm:pb-2 md:pb-0 flex-1">{education.school}</h1>
            <h3 className="sm:text-sm md:text-xl font-light tracking-tighter flex-1 pt-2   lg:text-right">
              <FontAwesomeIcon className="w-4 h-4 mb-1 me-2 inline-block text-neutral-400" icon={faLocationDot} />
              {education.location}
              <FontAwesomeIcon className="w-4 h-4 mb-1 me-2 inline-block ms-10 text-neutral-400" icon={faCalendarDays} /> {education.period}
            </h3>
          </div>

          {/* Ruolo */}
          <h2 className="font-bold text-2xl tracking-tighter mt-4 px-8">{education.title}</h2>
        </div>
      ))}
    </div>
  );
}
