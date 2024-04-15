import HeroImage from "@/shared/components/hero/HeroImage";
import { heroImageMaxWidth, heroImages } from "@/shared/constants";
import { getImageProps, ImageProps } from "next/image";
import React from "react";

const DestinationPage = () => {
  const common = {
    ...heroImages.destination.default,
  } as ImageProps;
  const {
    props: { srcSet: tablet },
  } = getImageProps({
    ...common,
    ...heroImages.destination.tablet,
  });
  const {
    props: { srcSet: mobile },
  } = getImageProps({
    ...common,
    ...heroImages.destination.mobile,
  });
  return (
    <HeroImage
      sources={[
        { srcSet: mobile, maxWidth: heroImageMaxWidth.mobile },
        { srcSet: tablet, maxWidth: heroImageMaxWidth.tablet },
      ]}
      defaultSrc={heroImages.destination.default.src}
      alt={heroImages.destination.alt}
    />
  );
};

export default DestinationPage;
