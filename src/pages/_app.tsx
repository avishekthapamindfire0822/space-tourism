import "@/style/main.css";
import { barlowCondensed, bellefair } from "@/assets/fonts";

import type { AppProps } from "next/app";
import { cn } from "@/shared/lib/utils";
import { Layout } from "@/shared/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={cn(bellefair.variable, barlowCondensed.variable)}>
        <section>
          <Component {...pageProps} />
        </section>
      </main>
    </Layout>
  );
}
