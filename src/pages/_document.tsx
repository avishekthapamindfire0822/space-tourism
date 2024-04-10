import { Html, Head, Main, NextScript } from "next/document";
import { barlowCondensed, bellefair } from "@/assets/fonts";
import { cn } from "@/shared/lib/utils";

export default function Document() {
  return (
    <Html
      lang="en"
      className={cn(barlowCondensed.variable, bellefair.variable)}
    >
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
