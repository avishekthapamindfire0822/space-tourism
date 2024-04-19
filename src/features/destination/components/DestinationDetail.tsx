import InfoPanel from "@/shared/components/info-panel/InfoPanel";
import { cn } from "@/shared/lib/utils";
import Box from "@/shared/ui/Box";
import React from "react";
import DestinationDistanceAndTravelTime from "./DestinationDistanceAndTravelTime";
import { BaseProps } from "@/shared/types";

type DestinationDetailProps = Pick<
  React.ComponentProps<typeof InfoPanel>,
  "description" | "title" | "subTitle"
> & {
  distance: string;
  travelTime: string;
};

const DestinationDetail = ({
  className,
  title,
  description,
  subTitle,
  distance,
  travelTime,
}: DestinationDetailProps & BaseProps) => {
  return (
    <Box className={cn("mt-6 md:mt-2", className)}>
      <InfoPanel
        title={title}
        className={cn("pb-10 md:pb-14 ")}
        description={description}
        titleProps={{
          className: cn("!text-white text-heading-3 md:text-heading-2"),
        }}
        descriptionProps={{
          className: cn("leading-6 mx-auto max-w-lg lg:max-w-xs lg:m-0"),
        }}
        subTitle={subTitle}
      />
      <DestinationDistanceAndTravelTime
        distance={distance}
        travelTime={travelTime}
        className={cn(
          "sm:flex border-t-2 border-gray-600 lg:justify-start lg:gap-16 lg:w-fit lg:pr-4"
        )}
      />
    </Box>
  );
};

export default DestinationDetail;
