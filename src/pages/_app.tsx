import type { AppProps } from "next/app";

import Layout from "@/core/components/common/Layout";

import "@/core/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
