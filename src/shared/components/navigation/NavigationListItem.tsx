import usePath from "@/shared/hooks/usePath";
import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import Link from "next/link";
import React from "react";

interface NavigationItemProps extends BaseProps {
  title: string;
  url: string;
  order: number;
  isActive?: boolean;
  onClick?: () => void;
}
const NavigationListItem = ({
  title,
  url,
  order,
  onClick,
  className,
}: NavigationItemProps) => {
  const pathName = usePath();
  const isActivePath = pathName === url;
  const hoverBorderColorStyle = {
    "after:bg-white after:scale-x-100": isActivePath,
    "after:bg-gray-400": !isActivePath,
  };
  return (
    <p
      className={cn(
        "text-base cursor-pointer md:py-8 after:h-0.75 after:-bottom-1.5 after:w-full md:after:bottom-0 after:rounded after:absolute  after:bg-white w-fit  hover:after:block after:transition-all ease-in-out after:scale-x-0 hover:after:scale-x-100 after:origin-center relative flex gap-2 duration-500 uppercase text-white font-barlow tracking-2.7",
        className,
        hoverBorderColorStyle
      )}
    >
      <span className={cn("md:hidden lg:block")}>
        {order.toString().padStart(2, "0")}
      </span>
      <Link href={url} onClick={onClick}>
        {title}
      </Link>
    </p>
  );
};

export default NavigationListItem;
