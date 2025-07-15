"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";

// Define project arrays for each section
const uxuiProjects = ["/Portfolio/UXUI/Swift", "/Portfolio/UXUI/SAS", "/Portfolio/UXUI/AlfaRomeo", "/Portfolio/UXUI/AlBasilico", "/Portfolio/UXUI/Websites", "/Portfolio/UXUI/Mobile", "/Portfolio/UXUI/Components", "/Portfolio/UXUI/Emails", "/Portfolio/UXUI/VisualPresentation"];

const devProjects = ["/Portfolio/Dev/Pipeline", "/Portfolio/Dev/Arbor", "/Portfolio/Dev/Deltek", "/Portfolio/Dev/WebApp", "/Portfolio/Dev/Websites", "/Portfolio/Dev/RFP", "/Portfolio/Dev/WordPress", "/Portfolio/Dev/Emails"];

const marketingProjects = ["/Portfolio/Marketing/EDW", "/Portfolio/Marketing/CoverDesign", "/Portfolio/Marketing/MagDesign", "/Portfolio/Marketing/BrochureDesign", "/Portfolio/Marketing/LogoDesign", "/Portfolio/Marketing/AdsDesign", "/Portfolio/Marketing/PostcardDesign", "/Portfolio/Marketing/TshirtDesign"];

// Helper to remove trailing slash
const normalize = (path: string) => path.replace(/\/$/, "");

export default function ProjectNavigation() {
  const pathname = usePathname();
  const normalizedPath = normalize(pathname);

  // Determine which section we're in
  let projects: string[] = [];
  if (normalizedPath.startsWith("/Portfolio/UXUI")) {
    projects = uxuiProjects;
  } else if (normalizedPath.startsWith("/Portfolio/Dev")) {
    projects = devProjects;
  } else if (normalizedPath.startsWith("/Portfolio/Marketing")) {
    projects = marketingProjects;
  }

  const normalizedProjects = projects.map(normalize);
  const currentIndex = normalizedProjects.indexOf(normalizedPath);

  // Loop navigation
  const prevProject = currentIndex === -1 ? null : projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = currentIndex === -1 ? null : projects[(currentIndex + 1) % projects.length];

  // Hide navigation if not in a known section
  if (!projects.length) return null;

  return (
    <div className="flex justify-between items-center gap-2">
      {prevProject ? (
        <Link href={prevProject} className="flex items-center gap-2 text-lg hover:underline">
          <CircleArrowLeft size={20} strokeWidth={2} />
        </Link>
      ) : (
        <div />
      )}

      {nextProject ? (
        <Link href={nextProject} className="flex items-center gap-2 text-lg hover:underline">
          <CircleArrowRight size={20} strokeWidth={2} />
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}
