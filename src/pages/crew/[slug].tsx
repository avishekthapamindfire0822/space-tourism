import HeroImage from "@/shared/components/hero/HeroImage";
import { backgroundImage } from "@/shared/constants";
import React from "react";

const CrewPage = () => {
  return (
    <HeroImage
      srcSets={backgroundImage.crew.srcSets}
      src={backgroundImage.crew.src}
      alt="Explore Crew Members"
    />
  );
};

export default CrewPage;
