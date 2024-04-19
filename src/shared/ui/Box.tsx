import React from "react";
import { BaseProps } from "../types";
import { cn } from "../lib/utils";

const Box = ({ children, className }: BaseProps) => {
  return <div className={cn(className)}>{children}</div>;
};

export default Box;
