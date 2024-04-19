import Box from "@/shared/ui/Box";
import React from "react";
import JourneyMetrics from "./JourneyMetrics";
import { BaseProps } from "@/shared/types";
import { cn } from "@/shared/lib/utils";

interface DestinationDistanceAndTravelTimeProps extends BaseProps {
  distance: string;
  travelTime: string;
}

const DestinationDistanceAndTravelTime = ({
  distance,
  travelTime,
  className,
}: DestinationDistanceAndTravelTimeProps) => {
  return (
    <Box className={cn("mt-6 flex flex-wrap justify-center  gap-4", className)}>
      <JourneyMetrics
        className={cn("max-lg:basis-52")}
        title="avg. distance"
        value={distance}
      />
      <JourneyMetrics
        className={cn("max-lg:basis-52")}
        title="est. travel time"
        value={travelTime}
      />
    </Box>
  );
};

export default DestinationDistanceAndTravelTime;
