import "@/style/main.css";
import { barlowCondensed, bellefair } from "@/assets/fonts";

import type { AppProps } from "next/app";
import { cn } from "@/shared/lib/utils";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(bellefair.variable, barlowCondensed.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
