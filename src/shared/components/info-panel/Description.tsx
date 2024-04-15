import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const Description = ({ className, children }: BaseProps) => {
  return (
    <p
      className={cn(
        "font-barlow max-w-80 md:mx-auto text-secondary text-base leading-6",
        className
      )}
    >
      {children}
    </p>
  );
};

export default Description;
