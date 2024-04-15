import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const Container = ({ className, children }: BaseProps) => {
  return <div className={cn("container", className)}>{children}</div>;
};

export default Container;
