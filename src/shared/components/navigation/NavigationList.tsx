import { navigationItems } from "@/shared/constants";
import { NavigationItem } from "@/shared/types";
import React from "react";
import NavigationListItem from "./NavigationListItem";

interface NavigationProps {
  navigationItems: NavigationItem[];
}

const NavigationList = ({ navigationItems }: NavigationProps) => {
  return (
    <nav>
      <ul>
        <li>
          {navigationItems.map((navigationItem, index) => {
            return <NavigationListItem key={index + ""} {...navigationItem} />;
          })}
        </li>
      </ul>
    </nav>
  );
};

export default NavigationList;
