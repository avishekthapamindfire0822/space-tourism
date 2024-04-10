/* eslint-disable @next/next/no-img-element */
import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ImageSource {
  src: string;
  maxWidth: string;
}
interface HeroImageProps extends BaseProps {
  defaultSrc: string;
  sources: ImageSource[];
  alt: string;
}
const HeroImage = ({
  defaultSrc,
  sources,
  alt = "",
  className,
}: HeroImageProps) => {
  return (
    <div className={cn("fixed inset-0 -z-50", className)}>
      <picture>
        {sources?.map(({ src, maxWidth }, index) => {
          return (
            <source
              srcSet={src}
              media={`(max-width :${maxWidth})`}
              key={index}
            ></source>
          );
        })}
        <img
          src={defaultSrc}
          alt={alt}
          className={cn("w-full h-full", className)}
        />
      </picture>
    </div>
  );
};

export default HeroImage;
