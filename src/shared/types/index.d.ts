import { ClassValue } from "clsx";

export interface NavigationItem {
  title: string;
  url: string;
}

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  as?: HTMLElement;
}
