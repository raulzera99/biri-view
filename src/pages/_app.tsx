import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { RootLayout } from "@/layout/root";

import { useEffect, useState } from "react";
interface AppContentProps {
  Component: AppProps["Component"];
  pageProps: AppProps["pageProps"];
}

export default function App({ Component, pageProps }: AppContentProps) {
  const [isClient, setIsClient] = useState(true);
  // if (typeof window !== "undefined") setIsClient(true);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     // eslint-disable-next-line global-require
  //     // require("@/lib/init");

  //   }
  // }
  // , [isClient]);

  if (!isClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}
