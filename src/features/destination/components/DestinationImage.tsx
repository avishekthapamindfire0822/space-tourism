import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import Image from "next/image";
import React from "react";

interface DestinationImageProps
  extends React.ComponentProps<typeof Image>,
    BaseProps {
  imageProps?: Pick<React.ComponentProps<typeof Image>, "className">;
}

const DestinationImage = ({
  alt,
  className,
  imageProps,
  ...props
}: DestinationImageProps) => {
  return (
    <div
      className={cn("size-42.5 md:size-74.5 mt-8 md:mt-14 relative", className)}
    >
      <Image {...props} alt={alt} className={imageProps?.className} />
    </div>
  );
};

export default DestinationImage;
