import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImages } from "@/shared/constants";
import Image from "next/image";
import React from "react";

const TechnlogyPage = () => {
  return (
    <HeroImage
      sources={heroImages.technology.sources}
      defaultSrc={heroImages.technology.defaultSrc}
      alt=""
    />
  );
};

export default TechnlogyPage;
