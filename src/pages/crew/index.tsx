import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import { getImageProps, ImageProps } from "next/image";
import React from "react";

const CrewPage = () => {
  const common = {
    ...heroImages.crew.default,
  } as ImageProps;
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    ...heroImages.crew.tablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    ...heroImages.crew.mobile,
  });
  return (
    <HeroImage
      sources={[
        { srcSet: mobile, maxWidth: heroImageMaxWidth.mobile },
        { srcSet: tablet, maxWidth: heroImageMaxWidth.tablet },
      ]}
      defaultSrc={heroImages.crew.default.src}
      alt={heroImages.crew.alt}
    />
  );
};

export default CrewPage;
