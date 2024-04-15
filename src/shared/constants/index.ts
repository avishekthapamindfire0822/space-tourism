import { NavigationItem } from "../types";

export const navigationItems: NavigationItem[] = [
  { title: "home", url: "/" },
  { title: "destination", url: "/destination" },
  { title: "crew", url: "/crew" },
  { title: "technology", url: "/technology" },
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
// export const heroImages = {
//   home: {
//     alt: "Half of our planet as seen from the vantage point of space, illustrating its magnificence.",
//     defaultSrc: "/images/home/background-home-desktop.webp",
//     sources: [
//       {
//         src: "/images/home/background-home-mobile.webp",
//         maxWidth: "640px",
//       },
//       {
//         src: "/images/home/background-home-tablet.webp",
//         maxWidth: "800px",
//       },
//     ],
//   },
//   crew: {
//     defaultSrc: "/images/crew/background-crew-desktop.webp",
//     sources: [
//       {
//         src: "/images/crew/background-crew-mobile.webp",
//         maxWidth: "640px",
//       },
//       {
//         src: "/images/crew/background-crew-tablet.webp",
//         maxWidth: "800px",
//       },
//     ],
//   },
//   destination: {
//     defaultSrc: "/images/destination/background-destination-desktop.webp",
//     sources: [
//       {
//         src: "/images/destination/background-destination-mobile.webp",
//         maxWidth: "640px",
//       },
//       {
//         src: "/images/destination/background-destination-tablet.webp",
//         maxWidth: "800px",
//       },
//     ],
//   },
//   technology: {
//     defaultSrc: "/images/technology/background-technology-desktop.webp",
//     sources: [
//       {
//         src: "/images/technology/background-technology-mobile.webp",
//         maxWidth: "640px",
//       },
//       {
//         src: "/images/technology/background-technology-tablet.webp",
//         maxWidth: "800px",
//       },
//     ],
//   },
// };
