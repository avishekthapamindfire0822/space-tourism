import React from "react";
import { Logo } from "../icons";
import { BaseProps } from "@/shared/types";
import MobileNavigationDrawer from "../navigation/MobileNavigationDrawer";
import { cn } from "@/shared/lib/utils";
import NavBar from "../navigation/NavBar";
import NavigationList from "../navigation/NavigationList";
import { navigationItems } from "@/shared/constants";

const Layout = ({ children }: BaseProps) => {
  return (
    <>
      <header
        className={cn(
          "flex m-6 md:m-0 md:ml-10  lg:mt-6 justify-between items-center"
        )}
      >
        <Logo height={40} width={40} />
        <MobileNavigationDrawer />
        <NavBar className={cn("hidden md:block")}>
          <NavigationList
            navigationItems={navigationItems}
            className={cn(
              "flex gap-8 px-12 lg:px-16 xl:gap-10 xl:px-36 backdrop-blur-md min-w-63.5 shadow-2xl"
            )}
          />
        </NavBar>
      </header>
      {children}
    </>
  );
};

export default Layout;
