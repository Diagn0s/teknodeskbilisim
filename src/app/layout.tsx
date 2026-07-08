import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { siteConfig } from "@/lib/site-data";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Kurumsal Bilişim ve Network Çözümleri`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "yapısal kablolama",
    "network çözümleri",
    "veri merkezi kurulumu",
    "sunucu sanallaştırma",
    "kamera kurulumu",
    "bilgi işlem desteği",
    "IT firması İstanbul",
  ],
  openGraph: {
    title: `${siteConfig.name} | Kurumsal Bilişim ve Network Çözümleri`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`dark ${roboto.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
