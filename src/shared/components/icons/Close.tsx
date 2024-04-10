import React from "react";
import LogoProps from "./LogoProps";

const Close = ({ height, width }: LogoProps) => {
  const logoHeight = height ?? 48;
  const logoWidth = width ?? 48;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={logoWidth}
      height={logoHeight}
    >
      <g fill="#D0D6F9" fillRule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  );
};

export default Close;
