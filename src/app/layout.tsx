import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Navbar from "@/components/Molecules/Navbar";
import Footer from "@/components/Organisms/Footer";
import BootstrapClient from "@/components/BootstrapClient";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Montserrat({ subsets: ["latin"] });

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
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
      <BootstrapClient />
    </html>
  );
}
