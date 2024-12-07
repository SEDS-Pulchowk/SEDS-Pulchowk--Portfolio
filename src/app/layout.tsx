import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";
import Footer from "@/components/Organisms/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: "SEDS-Pulchowk",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta
          name="google-site-verification"
          content="9vmeU2bnulJ0AYjdQtA1m4iO4K-PrNWUpURwn-W8dWM"
        />
        <meta
          name="description"
          content="We are an enthusiastic, research-oriented group of engineers committed to pushing the
              boundaries of space technology."
        />

        <meta property="og:title" content="SEDS-Pulchowk" />
        <meta
          property="og:description"
          content="Official page of SEDS-Pulchowk, Nepal."
        />
        <meta
          property="og:image"
          content="https://seds.pcampus.edu.np/images/Profile.png"
        />
        <meta property="og:url" content="https://seds.pacmpus.edu.np" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Seds_Pulchowk" />
        <meta name="twitter:title" content="SEDS-Pulchowk" />
        <meta
          name="twitter:description"
          content="Official page of SEDS-Pulchowk, Nepal."
        />
        <meta
          name="twitter:image"
          content="https://seds.pcampus.edu.np/images/Profile.png"
        />
      </head>
      <body className={inter.className}>
        <header><Navbar /></header>
        {children}
        <footer>
        <Footer />
        </footer>
      </body>
      <BootstrapClient />
    </html>
  );
}
