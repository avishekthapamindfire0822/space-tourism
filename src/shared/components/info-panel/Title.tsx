import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const Title = ({ className, children }: BaseProps) => {
  return (
    <h1
      className={cn(
        "text-white text-7.15xl md:text-9.65xl font-bellefair uppercase",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
