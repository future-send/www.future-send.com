import React from "react";

export default function SkeletonPortfolio() {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1 gap-6 px-6">
      {Array.from({ length: 9 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="w-full h-48 bg-neutral-300 rounded-md" />
          <div className="h-6 bg-neutral-300 rounded-md mt-4 w-3/4 mx-auto" />
          <div className="h-4 bg-neutral-300 rounded-md mt-2 w-1/2 mx-auto" />
        </div>
      ))}
    </div>
  );
}
