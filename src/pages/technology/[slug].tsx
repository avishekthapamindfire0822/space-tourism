import HeroImage from "@/shared/components/hero/HeroImage";
import { backgroundImage } from "@/shared/constants";
import React from "react";

const TechnlogyPage = () => {
  return (
    <HeroImage
      srcSets={backgroundImage.technology.srcSets}
      src={backgroundImage.technology.src}
      alt="Explore Space Technologies"
    />
  );
};

export default TechnlogyPage;
