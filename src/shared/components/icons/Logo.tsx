import React from "react";
import LogoProps from "./LogoProps";
import { cn } from "@/shared/lib/utils";

const Logo = ({ height, width, className }: LogoProps) => {
  const logoHeight = height ?? 48;
  const logoWidth = width ?? 48;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(className)}
        height={logoHeight}
        width={logoWidth}
        viewBox="0 0 48 48"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="24" cy="24" r="24" fill="#FFF" />
          <path
            fill="#0B0D17"
            d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
          />
        </g>
      </svg>
    </>
  );
};

export default Logo;
