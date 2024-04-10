import React from "react";
import { Logo } from "../icons";
import { BaseProps } from "@/shared/types";
import MobileNavigationDrawer from "../navigation/MobileNavigationDrawer";
import { cn } from "@/shared/lib/utils";

const Layout = ({ children }: BaseProps) => {
  return (
    <>
      <header className={cn("flex mt-6 px-6 justify-between items-center")}>
        <Logo height={40} width={40} />
        <MobileNavigationDrawer />
      </header>
      {children}
    </>
  );
};

export default Layout;
