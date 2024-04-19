import { ClassValue } from "clsx";

export interface NavigationItem {
  title: string;
  url?: string;
  isLink?: boolean;
}

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  as?: HTMLElement;
}

export interface Destination {
  imageUrl: string;
  blurImageUrl?: string;
  title: string;
  description: string;
  distance: string;
  travelTime: string;
}

export type DestinationData = {
  [key: string]: Destination;
};
