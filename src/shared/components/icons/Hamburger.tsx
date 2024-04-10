import React from "react";
import LogoProps from "./LogoProps";
import { cn } from "@/shared/lib/utils";

const Hamburger = ({ height, width, className }: LogoProps) => {
  const logoHeight = height ?? 48;
  const logoWidth = width ?? 48;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={logoWidth}
      height={logoHeight}
      className={cn(className)}
    >
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );
};

export default Hamburger;
