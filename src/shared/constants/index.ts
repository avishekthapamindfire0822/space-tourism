import { NavigationItem } from "../types";

export const navigationItems: NavigationItem[] = [
  { title: "home", url: "/", isLink: true },
  { title: "destination", url: "/destination", isLink: true },
  { title: "crew", url: "/crew", isLink: true },
  { title: "technology", url: "/technology", isLink: true },
];

export const heroImageMaxWidth = {
  tablet: "1024px",
  mobile: "640px",
};
export const heroImages = {
  home: {
    alt: "",
    default: {
      src: "/images/home/background-home-desktop.webp",
      height: 900,
      width: 1440,
    },
    tablet: {
      src: "/images/home/background-home-tablet.webp",
      height: 1024,
      width: 768,
    },
    mobile: {
      src: "/images/home/background-home-mobile.webp",
      height: 667,
      width: 375,
    },
  },
  crew: {
    alt: "",
    default: {
      src: "/images/crew/background-crew-desktop.webp",
      height: 900,
      width: 1440,
    },
    tablet: {
      src: "/images/crew/background-crew-tablet.webp",
      height: 1024,
      width: 768,
    },
    mobile: {
      src: "/images/crew/background-crew-mobile.webp",
      height: 667,
      width: 375,
    },
  },
  destination: {
    alt: "",
    default: {
      src: "/images/destination/background-destination-desktop.webp",
      height: 900,
      width: 1440,
    },
    tablet: {
      src: "/images/destination/background-destination-tablet.webp",
      height: 1024,
      width: 768,
    },
    mobile: {
      src: "/images/destination/background-destination-mobile.webp",
      height: 667,
      width: 375,
    },
  },
  technology: {
    alt: "",
    default: {
      src: "/images/technology/background-technology-desktop.webp",
      height: 900,
      width: 1440,
    },
    tablet: {
      src: "/images/technology/background-technology-tablet.webp",
      height: 1024,
      width: 768,
    },
    mobile: {
      src: "/images/technology/background-technology-mobile.webp",
      height: 667,
      width: 375,
    },
  },
};

export const DESTINATION = {
  MOON: "moon",
  MARS: "mars",
  EUROPA: "europa",
  TITAN: "titan",
};
