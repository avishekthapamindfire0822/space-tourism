import { cn } from "@/shared/lib/utils";
import { BaseProps } from "@/shared/types";

const Container = ({ className, children }: BaseProps) => {
  return <div className={cn("container", className)}>{children}</div>;
};

export default Container;
