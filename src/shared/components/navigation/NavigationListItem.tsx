import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import React from "react";

interface NavigationItemProps {
  title: string;
  url: string;
  order: number;
  onClick?: () => void;
}
const NavigationListItem = ({
  title,
  url,
  order,
  onClick,
}: NavigationItemProps) => {
  return (
    <div>
      <p
        className={cn(
          "text-base flex gap-2 uppercase text-white font-barlow tracking-2.7"
        )}
      >
        <span> {order.toString().padStart(2, "0")}</span>
        <Link href={url} onClick={onClick}>
          {title}
        </Link>
      </p>
    </div>
  );
};

export default NavigationListItem;
