import { NavigationItem } from "../types";

export const navigationItems: NavigationItem[] = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
];

export const backgroundImage = {
  home: {
    srcSets:
      "/images/home/background-home-desktop.jpg 1440w , /images/home/background-home-tablet.jpg 768w, /images/home/background-home-mobile.jpg 375w",
    src: "/images/home/background-home-desktop.jpg",
  },
  crew: {
    srcSets:
      "/images/crew/background-crew-desktop.jpg 1440w , /images/crew/background-crew-tablet.jpg 768w, /images/crew/background-crew-mobile.jpg 375w",
    src: "/images/crew/background-crew-desktop.jpg",
  },
  destination: {
    srcSets:
      "/images/destination/background-destination-desktop.jpg 1440w , /images/destination/background-destination-tablet.jpg 768w, /images/destination/background-destination-mobile.jpg 375w",
    src: "/images/destination/background-destination-desktop.jpg",
  },
  technology: {
    srcSets:
      "/images/technology/background-technology-desktop.jpg 1440w , /images/technology/background-technology-tablet.jpg 768w, /images/technology/background-technology-mobile.jpg 375w",
    src: "/images/technology/background-technology-desktop.jpg",
  },
};
