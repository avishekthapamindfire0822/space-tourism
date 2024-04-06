import { Bellefair, Barlow_Condensed } from "next/font/google";

const bellefair = Bellefair({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-bellefair",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

export { bellefair, barlowCondensed };
