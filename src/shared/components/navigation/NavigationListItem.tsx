import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";
import Link from "next/link";
import React from "react";

interface NavigationItemProps extends BaseProps {
  title: string;
  url?: string;
  order: number;
  isActive: boolean;
  isLink?: boolean;
  onClick?: (item?: string) => void;
}
const NavigationListItem = ({
  title,
  url,
  order,
  isLink,
  onClick = () => {},
  className,
  isActive = false,
}: NavigationItemProps) => {
  const hoverBorderColorStyle = {
    "after:bg-white after:scale-x-100": isActive,
    "after:bg-gray-400": !isActive,
  };
  return (
    <div
      className={cn(
        "text-base cursor-pointer after:h-0.75 after:-bottom-1.5 after:w-full md:after:bottom-0 after:rounded after:absolute  after:bg-white w-fit  hover:after:block after:transition-all ease-in-out after:scale-x-0 hover:after:scale-x-100 after:origin-center relative flex gap-2 duration-500 uppercase text-white font-barlow tracking-2.7",
        className,
        hoverBorderColorStyle
      )}
      onClick={onClick?.bind(null, title)}
    >
      {url && isLink ? (
        <Link href={url} className={cn("flex gap-2")}>
          <span className={cn("md:hidden lg:block")}>
            {order.toString().padStart(2, "0")}
          </span>
          <span>{title}</span>
        </Link>
      ) : (
        <span>{title}</span>
      )}
    </div>
  );
};

export default NavigationListItem;
