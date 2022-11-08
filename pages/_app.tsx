import "../styles/globals.css";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import ErrorBoundary from "../next.config.errorHandler";

// import { makeServer } from "../server/index";

// if (process.env.NODE_ENV === "development") {
//   console.log("[System][mock server]: started");
//   makeServer({ environment: "development" });
// }

export function reportWebVitals(metric) {
  console.log("[System][monitoring][CVW]: ", metric);
}

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
