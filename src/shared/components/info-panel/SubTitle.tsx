import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const SubTitle = ({ className, children }: BaseProps) => {
  return (
    <h5
      className={cn(
        "text-base md:text-xl uppercase text-secondary font-barlow tracking-2.7",
        className
      )}
    >
      {children}
    </h5>
  );
};

export default SubTitle;
