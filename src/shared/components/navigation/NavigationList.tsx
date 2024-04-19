import { navigationItems } from "@/shared/constants";
import { BaseProps, NavigationItem } from "@/shared/types";
import React from "react";
import NavigationListItem from "./NavigationListItem";
import { cn } from "@/shared/lib/utils";

interface NavigationProps extends BaseProps {
  navigationItems: NavigationItem[];
  navListItemProps?: Pick<
    React.ComponentProps<typeof NavigationListItem>,
    "className"
  >;
  onListItemClick?: (item?: string) => void;
  checkForActiveItem?: (item: string) => boolean;
}

const NavigationList = ({
  navigationItems,
  onListItemClick,
  navListItemProps,
  checkForActiveItem,
  className,
}: NavigationProps) => {
  return (
    <ul className={cn(className)}>
      {navigationItems.map((navigationItem, index) => {
        return (
          <li key={index}>
            <NavigationListItem
              className={cn(navListItemProps?.className)}
              order={index}
              {...navigationItem}
              onClick={onListItemClick}
              isActive={
                checkForActiveItem?.(navigationItem.title ?? "") || false
              }
            />
          </li>
        );
      })}
    </ul>
  );
};

export default NavigationList;
