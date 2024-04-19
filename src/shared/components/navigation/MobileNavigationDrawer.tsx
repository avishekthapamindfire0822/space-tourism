import { BaseProps } from "@/shared/types";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/shared/ui/Drawer";
import React, { useState } from "react";
import { Hamburger } from "../icons";
import NavigationList from "./NavigationList";
import { navigationItems } from "@/shared/constants";
import { cn } from "@/shared/lib/utils";
import NavBar from "./NavBar";

interface MobileNavigationDrawerProps extends BaseProps {
  checkForActiveItem?: (item: string) => boolean;
}

const MobileNavigationDrawer = ({
  className,
  checkForActiveItem,
}: MobileNavigationDrawerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const listItemClickHandler = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Drawer
      direction="right"
      open={isDrawerOpen}
      onOpenChange={(visibility) => setIsDrawerOpen(visibility)}
    >
      <DrawerTrigger>
        <Hamburger className="md:hidden" height={24} width={24} />
      </DrawerTrigger>
      <DrawerContent className={cn("backdrop-blur-lg px-8")}>
        <NavBar>
          <NavigationList
            navigationItems={navigationItems}
            className={cn("mt-21.5 flex flex-col gap-8 border-b-gray-200")}
            onListItemClick={listItemClickHandler}
            checkForActiveItem={checkForActiveItem}
          />
        </NavBar>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavigationDrawer;
