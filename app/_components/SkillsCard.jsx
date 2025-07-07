import React from "react";
import Image from "next/image";
import skillsData from "../data/skillsData.js";

export default function SkillsCard() {
  return (
    <div className="mt-10 space-y-16">
      {skillsData.map((category, categoryIndex) => (
        <div key={categoryIndex}>
          {/* Categoria */}

          <div className="border-b border-neutral-500 mb-6 flex flex-col lg:flex-row items-start sm:px-0 md:px-8">
            <h1 className="text-4xl font-bold tracking-tighter flex-1 mb-2">{category.category}</h1>
          </div>

          {/* Skill List */}
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 sm:px-0 md:px-8">
            {category.skills.map((skill, index) => (
              <div key={index} className="border-b border-neutral-900 pt-4 pb-2 px-4 flex flex-row items-center justify-between">
                {/* Logo e Nome della Skill */}
                <div className="flex items-center">
                  <Image src={skill.logo} alt={`${skill.name} Logo`} width={30} height={30} className="me-3" />
                  <h1 className="text-2xl font-light">{skill.name}</h1>
                </div>
                {/* Rating */}
                <div className="font-bold text-2xl flex items-center">{skill.rating}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
