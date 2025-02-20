import React from "react";

export default function PortfolioSiglePageTools({ nameTool, logoTool }) {
  return (
    <>
      <img src={logoTool} alt={nameTool} className="pt-2 w-9 h-9" />
      <h1 className="text-xs mt-1 uppercase font-light text-neutral-900">{nameTool}</h1>
    </>
  );
}
