import React from "react";
import { BaseProps } from "../../types";
import { Button } from "../../ui/Button";
import { cn } from "../../lib/utils";

const ExploreButton = ({ className }: BaseProps) => {
  return (
    <Button
      className={cn(
        "size-37.5 md:size-60.5 focus-visible:outline-none transition-all ring-0   ring-gray-800 bg-white uppercase tracking-wide text-primary font-bellefair rounded-full text-xl md:text-3xl focus-visible:ring-36 focus-visible:ring-gray-800 hover:ring-36 hover:bg-white",
        className
      )}
    >
      explore
    </Button>
  );
};

export default ExploreButton;
