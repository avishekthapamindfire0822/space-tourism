import HeroImage from "@/shared/components/hero/HeroImage";
import { backgroundImage } from "@/shared/constants";
import React from "react";

const DestinationPage = () => {
  return (
    <HeroImage
      srcSets={backgroundImage.destination.srcSets}
      src={backgroundImage.destination.src}
      alt="Explore Space Destinations"
    />
  );
};

export default DestinationPage;
