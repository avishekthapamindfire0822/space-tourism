import { NavigationItem } from "../types";

export const navigationItems: NavigationItem[] = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
];

export const heroImages = {
  home: {
    alt: "Half of our planet as seen from the vantage point of space, illustrating its magnificence.",
    defaultSrc: "/images/home/background-home-desktop.webp",
    sources: [
      {
        src: "/images/home/background-home-mobile.webp",
        maxWidth: "640px",
      },
      {
        src: "/images/home/background-home-tablet.webp",
        maxWidth: "800px",
      },
    ],
  },
  crew: {
    defaultSrc: "/images/crew/background-crew-desktop.webp",
    sources: [
      {
        src: "/images/crew/background-crew-mobile.webp",
        maxWidth: "640px",
      },
      {
        src: "/images/crew/background-crew-tablet.webp",
        maxWidth: "800px",
      },
    ],
  },
  destination: {
    defaultSrc: "/images/destination/background-destination-desktop.webp",
    sources: [
      {
        src: "/images/destination/background-destination-mobile.webp",
        maxWidth: "640px",
      },
      {
        src: "/images/destination/background-destination-tablet.webp",
        maxWidth: "800px",
      },
    ],
  },
  technology: {
    defaultSrc: "/images/technology/background-technology-desktop.webp",
    sources: [
      {
        src: "/images/technology/background-technology-mobile.webp",
        maxWidth: "640px",
      },
      {
        src: "/images/technology/background-technology-tablet.webp",
        maxWidth: "800px",
      },
    ],
  },
};
