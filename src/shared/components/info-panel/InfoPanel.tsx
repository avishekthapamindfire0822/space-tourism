import { cn } from "@/shared/lib/utils";
import { InfoPanelProps } from "@/shared/types";

import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Description from "./Description";

const InfoPanel = ({
  title,
  subTitle,
  description,
  titleClassName,
  descriptionClassName,
  subTitleClassName,
  className,
}: InfoPanelProps) => {
  return (
    <div className={cn("text-center", className)}>
      {subTitle && (
        <SubTitle className={cn(subTitleClassName)}>{subTitle}</SubTitle>
      )}
      {title && <Title className={cn(titleClassName)}>{title}</Title>}
      {description && (
        <Description className={cn(descriptionClassName)}>
          {description}
        </Description>
      )}
    </div>
  );
};

export default InfoPanel;
