import "@/style/main.css";
import { barlowCondensed, bellefair } from "@/assets/fonts";
import { cn } from "@/utils";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cn(bellefair.variable, barlowCondensed.variable)}>
      <Component {...pageProps} />
    </main>
  );
}
