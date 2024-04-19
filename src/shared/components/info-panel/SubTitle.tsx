import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const SubTitle = ({ className, children }: BaseProps) => {
  return (
    <h5 className={cn("uppercase text-secondary font-barlow", className)}>
      {children}
    </h5>
  );
};

export default SubTitle;
