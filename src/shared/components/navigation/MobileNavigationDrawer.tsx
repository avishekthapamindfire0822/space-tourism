import { BaseProps } from "@/shared/types";
import { Drawer, DrawerContent, DrawerTrigger } from "@/shared/ui/Drawer";
import React from "react";
import { Hamburger } from "../icons";
import NavigationList from "./NavigationList";
import { navigationItems } from "@/shared/constants";

const MobileNavigationDrawer = ({ className }: BaseProps) => {
  return (
    <Drawer>
      <DrawerTrigger>
        <Hamburger className="md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <NavigationList navigationItems={navigationItems} />
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigationDrawer;
