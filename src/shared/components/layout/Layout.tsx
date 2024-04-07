import React from "react";
import { Logo } from "../icons";
import { BaseProps } from "@/shared/types";
import MobileNavigationDrawer from "../navigation/MobileNavigationDrawer";
import { cn } from "@/shared/lib/utils";

const Layout = ({ children }: BaseProps) => {
  return (
    <>
      <header className={cn("flex justify-between items-center")}>
        {/* <Logo /> */}
        {/* <MobileNavigationDrawer /> */}
      </header>
      {children}
    </>
  );
};

export default Layout;
