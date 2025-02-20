import React from "react";

export default function TitleSection({ titleSection }) {
  return (
    <div className="w-full flex items-center">
      <h1 className="text-5xl font-bold title">{titleSection}</h1>
      <div className="flex-grow border-b border-neutral-100 ml-4"></div>
    </div>
  );
}
