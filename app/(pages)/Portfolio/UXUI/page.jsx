"use client";

import React, { useEffect, useState } from "react";
import SkeletonPortfolio from "../../../_components/SkeletonPortfolio";
import PortfolioTabsUXUIcontent from "../../../_components/PortfolioTabsUXUIcontent";

export default function PortfolioPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return <div>{loading ? <SkeletonPortfolio /> : <PortfolioTabsUXUIcontent />}</div>;
}
