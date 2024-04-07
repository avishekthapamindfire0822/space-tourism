/* eslint-disable @next/next/no-img-element */
import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";

interface HeroImage extends BaseProps {
  src: string;
  alt: string;
  srcSets?: string;
  imageClassName?: string;
}
const HeroImage = ({
  className,
  src,
  srcSets,
  alt,
  imageClassName,
}: HeroImage) => {
  return (
    <div className={cn("absolute inset-0 -z-50", className)}>
      <img
        src={src}
        srcSet={srcSets}
        alt={alt}
        className={cn("h-full w-full", imageClassName)}
      />
    </div>
  );
};

export default HeroImage;
