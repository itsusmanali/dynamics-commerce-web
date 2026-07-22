import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: process.env.SITE_NAME ?? "Dynamics Commerce",
    template: `%s | ${process.env.SITE_NAME ?? "Dynamics Commerce"}`,
  },
  description: process.env.SITE_DESCRIPTION ?? "Dynamics Commerce news, insights, and resources.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><SiteHeader />{children}<SiteFooter /></body>
    </html>
  );
}
