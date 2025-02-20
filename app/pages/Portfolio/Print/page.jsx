"use client";

import React, { useEffect, useState } from "react";
import SkeletonPortfolio from "../../../_components/SkeletonPortfolio";
import PortfolioTabsprintcontent from "../../../_components/PortfolioTabsPrintContent";

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <SkeletonPortfolio /> : <PortfolioTabsprintcontent />}</div>;
}
