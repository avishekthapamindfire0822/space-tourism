import { navigationItems } from "@/shared/constants";
import { BaseProps, NavigationItem } from "@/shared/types";
import React from "react";
import NavigationListItem from "./NavigationListItem";
import { cn } from "@/shared/lib/utils";

interface NavigationProps extends BaseProps {
  navigationItems: NavigationItem[];
  navListStyleClassName?: string;
  onListItemClick?: () => void;
}

const NavigationList = ({
  navigationItems,
  navListStyleClassName,
  onListItemClick,
  className,
}: NavigationProps) => {
  return (
    <nav className={cn(className)}>
      <ul className={cn(navListStyleClassName)}>
        {navigationItems.map((navigationItem, index) => {
          return (
            <li key={index}>
              <NavigationListItem
                order={index}
                {...navigationItem}
                onClick={onListItemClick}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavigationList;
