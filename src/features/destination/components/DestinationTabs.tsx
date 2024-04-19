import NavigationList from "@/shared/components/navigation/NavigationList";
import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import React, { useCallback } from "react";

interface DestinationTabProps extends BaseProps {
  currentTab: string;
  onTabItemClick?: (tabItem?: string) => void;
}

const DestinationTabs = ({
  className,
  currentTab,
  onTabItemClick,
}: DestinationTabProps) => {
  const checkForActiveTab = useCallback(
    (tab: string) => tab === currentTab,
    [currentTab]
  );
  return (
    <NavigationList
      className={cn(
        "flex gap-8 md:gap-10 justify-center lg:justify-start",
        className
      )}
      navigationItems={[
        { title: "moon" },
        { title: "mars" },
        { title: "europa" },
        { title: "titan" },
      ]}
      navListItemProps={{
        className: cn("md:py-2"),
      }}
      onListItemClick={onTabItemClick}
      checkForActiveItem={checkForActiveTab}
    />
  );
};

export default DestinationTabs;
