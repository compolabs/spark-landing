import "./globals.css";
import { Providers } from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Spark | Trade &amp; Swap on Fuel</title>
        <link
          rel="icon"
          href="/icons/spark.ico"
          type="image/icon"
          sizes="any"
        />
      </head>
      <body>
        <Providers>
          {children}
          <div id="portal-root" />
        </Providers>
      </body>
    </html>
  );
}
