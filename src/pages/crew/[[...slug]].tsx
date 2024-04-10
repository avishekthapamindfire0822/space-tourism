import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImages } from "@/shared/constants";
import React from "react";

const CrewPage = () => {
  return (
    <HeroImage
      sources={heroImages.crew.sources}
      defaultSrc={heroImages.crew.defaultSrc}
      alt=""
    />
  );
};

export default CrewPage;
