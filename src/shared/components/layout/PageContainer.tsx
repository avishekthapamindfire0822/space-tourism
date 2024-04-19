import { BaseProps } from "@/shared/types";
import React from "react";
import { Container } from "@/shared/ui";
import { cn } from "@/shared/lib/utils";

const PageContainer = ({ className, children }: BaseProps) => {
  return (
    <Container
      className={cn(
        "lg:flex  lg:max-w-5xl  2xl:max-w-7xl  lg:flex-row pb-6 lg:pb-8 lg:mt-24 xl:mt-28 lg:justify-between lg:gap-28 items-center justify-center",
        className
      )}
    >
      {children}
    </Container>
  );
};

export default PageContainer;
