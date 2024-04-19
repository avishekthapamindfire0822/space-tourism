import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const Description = ({ className, children }: BaseProps) => {
  return (
    <p className={cn("font-barlow text-secondary text-base", className)}>
      {children}
    </p>
  );
};

export default Description;
