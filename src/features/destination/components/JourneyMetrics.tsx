import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import Box from "@/shared/ui/Box";
import React from "react";

interface JourneyMetricProps extends BaseProps {
  title: string;
  value: string;
}

const JourneyMetrics = ({ title, value, className }: JourneyMetricProps) => {
  return (
    <Box className={cn(className)}>
      <p
        className={cn(
          "font-barlow my-2 max-lg:text-center text-sm uppercase text-secondary tracking-wide"
        )}
      >
        {title}
      </p>
      <p
        className={cn(
          "font-bellefair uppercase max-lg:text-center text-3xl text-white"
        )}
      >
        {value}
      </p>
    </Box>
  );
};

export default JourneyMetrics;
