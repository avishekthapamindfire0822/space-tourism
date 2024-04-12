import { navigationItems } from "@/shared/constants";
import { BaseProps, NavigationItem } from "@/shared/types";
import React from "react";
import NavigationListItem from "./NavigationListItem";
import { cn } from "@/shared/lib/utils";

interface NavigationProps extends BaseProps {
  navigationItems: NavigationItem[];
  onListItemClick?: () => void;
}

const NavigationList = ({
  navigationItems,
  onListItemClick,
  className,
}: NavigationProps) => {
  return (
    <ul className={cn(className)}>
      {navigationItems.map((navigationItem, index) => {
        return (
          <li key={index} className={cn("")}>
            <NavigationListItem
              order={index}
              {...navigationItem}
              onClick={onListItemClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;
