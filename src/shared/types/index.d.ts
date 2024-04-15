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

export interface InfoPanelProps extends BaseProps {
  title?: string;
  subTitle?: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  subTitleClassName?: string;
}
