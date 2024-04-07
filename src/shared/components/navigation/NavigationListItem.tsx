import React from "react";

interface NavigationItemProps {
  title: string;
  url: string;
}
const NavigationListItem = ({
  title,
  url,
  key,
}: NavigationItemProps & { key?: string }) => {
  return (
    <div>
      {" "}
      {key} {title}
    </div>
  );
};

export default NavigationListItem;
