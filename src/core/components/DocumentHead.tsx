/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";

import { googleTagId } from "../constants/googleTagId";
const DocumentHead = () => {
  return (
    <Head>
      <title>Spark | Trade & Swap on Fuel</title>
      <meta name="description" content="Spark landing for spark app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="./spark.ico" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${googleTagId}`}
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${googleTagId}');
      `,
        }}
      />
    </Head>
  );
};

export default DocumentHead;
