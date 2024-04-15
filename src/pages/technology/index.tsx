import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import { getImageProps, ImageProps } from "next/image";
import React from "react";

const TechnlogyPage = () => {
  const common = {
    ...heroImages.technology.default,
  } as ImageProps;
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    ...heroImages.technology.tablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    ...heroImages.technology.mobile,
  });
  return (
    <HeroImage
      sources={[
        { srcSet: mobile, maxWidth: heroImageMaxWidth.mobile },
        { srcSet: tablet, maxWidth: heroImageMaxWidth.tablet },
      ]}
      defaultSrc={heroImages.technology.default.src}
      alt={heroImages.technology.alt}
    />
  );
};

export default TechnlogyPage;
