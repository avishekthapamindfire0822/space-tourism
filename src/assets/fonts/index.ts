import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export { bellefair, barlowCondensed };
