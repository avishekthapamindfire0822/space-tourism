import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const Title = ({ className, children }: BaseProps) => {
  return (
    <h1 className={cn("text-white font-bellefair uppercase", className)}>
      {children}
    </h1>
  );
};

export default Title;
