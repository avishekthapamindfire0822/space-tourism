import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImages } from "@/shared/constants";
import Image from "next/image";
import React from "react";

const DestinationPage = () => {
  return (
    <HeroImage
      sources={heroImages.destination.sources}
      defaultSrc={heroImages.destination.defaultSrc}
      alt=""
    />
  );
};

export default DestinationPage;
