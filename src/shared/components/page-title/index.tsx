import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const PageTitle = ({ children, className }: BaseProps) => {
  return (
    <h5
      className={cn(
        "max-lg:text-center lg:ml-10 xl:ml-20 md:mt-2 md:text-xl font-barlow text-white uppercase text-base tracking-2.7",
        className
      )}
    >
      {children}
    </h5>
  );
};

export default PageTitle;
