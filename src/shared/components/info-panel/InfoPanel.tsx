import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";

import React from "react";
import SubTitle from "./SubTitle";
import Title from "./Title";
import Description from "./Description";

export interface InfoPanelProps extends BaseProps {
  title?: string;
  subTitle?: string;
  description?: string;
  titleProps?: React.ComponentProps<typeof Title>;
  descriptionProps?: React.ComponentProps<typeof Description>;
  subTitleProps?: React.ComponentProps<typeof SubTitle>;
}
const InfoPanel = ({
  title,
  subTitle,
  description,
  titleProps,
  subTitleProps,
  descriptionProps,
  className,
}: InfoPanelProps) => {
  return (
    <div className={cn("text-center lg:text-left", className)}>
      {subTitle && <SubTitle {...subTitleProps}>{subTitle}</SubTitle>}
      {title && <Title {...titleProps}>{title}</Title>}
      {description && (
        <Description {...descriptionProps}>{description}</Description>
      )}
    </div>
  );
};

export default InfoPanel;
