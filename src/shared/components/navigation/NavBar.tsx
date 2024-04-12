import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React from "react";

const NavBar = ({ children, className }: BaseProps) => {
  return <nav className={cn(className)}>{children}</nav>;
};

export default NavBar;
