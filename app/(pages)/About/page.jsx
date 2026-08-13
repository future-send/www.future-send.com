import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import SkillsSection from "@/app/_components/SkillsSection";
import Link from "next/link";
import DescriptionSection from "@/app/_components/DescriptionSection";

export default function page() {
  return (
    <div className="container mx-auto mt-36 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-16 xl:px-16  animate__animated animate__fadeIn ">
      <div className="flex flex-col md:flex-row">
        <div className="basis-1/6 content-center hidden xl:block   ">
          <img className="rounded-full " src="/photo.png" />
        </div>
        <div className="basis-3/4 flex-col justify-start content-center">
          <h1 className="text-neutral-300 text-5xl font-bold tracking-tighter">Cris Delli-Zotti</h1>
          <h3 className="text-3xl font-normal tracking-tighter">Digital and Brand Engineer</h3>
        </div>
        <div className="basis-2/4 border-l border-neutral-600 ps-6 py-6">
          <h3 className="text-xl font-normal tracking-tighter mt-1">
            <FontAwesomeIcon className="w-5 h-5 inline-block me-2" icon={faEnvelope} />
            <a href="mailto:cris.dellizotti@studiocdz.com">cris.dellizotti@studiocdz.com</a>
          </h3>
          <h3 className="text-xl font-normal tracking-tighter mt-1">
            <FontAwesomeIcon className="w-5 h-5 inline-block me-2" icon={faPhone} />
            <a href="tel:+13143220234">(314) 322-0234</a>
          </h3>
          <h3 className="text-xl font-normal tracking-tighter mt-1">
            <FontAwesomeIcon className="w-5 h-5 inline-block me-2 mb-1" icon={faLinkedin} />
            <Link href="https://www.linkedin.com/in/cris-delli-zotti-362a136/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </Link>
          </h3>
          <h3 className="text-xl font-normal tracking-tighter mt-1">
            <FontAwesomeIcon className="w-5 h-5 inline-block me-2 mb-2" icon={faDownload} />
            <Link href="/crisDelliZotti.pdf" target="_blank" download className="hover:underline mt-2">
              Download Resume
            </Link>
          </h3>
        </div>
      </div>
      <DescriptionSection />
      <SkillsSection />
    </div>
  );
}
