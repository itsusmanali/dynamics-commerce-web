import type { Metadata } from "next";
import "./globals.css";
import "@/styles/site.scss";
import { SiteFooter } from "@/components/site-footer";
import { defaultHeaderModule, ModuleRenderer } from "@/components/module-renderer";
import { getGlobalModules } from "@/lib/wordpress/queries";
import { ApiQueryProvider } from "@/lib/api/query/query-client";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL ?? "http://localhost:3000"),
  title: {
    default: process.env.SITE_NAME ?? "Dynamics Commerce",
    template: `%s | ${process.env.SITE_NAME ?? "Dynamics Commerce"}`,
  },
  description: process.env.SITE_DESCRIPTION ?? "Dynamics Commerce news, insights, and resources.",
  alternates: { types: { "application/rss+xml": "/feed.xml" } },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [header, footer] = await Promise.all([getGlobalModules("header"), getGlobalModules("footer")]);
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col"><Suspense><ApiQueryProvider><ModuleRenderer modules={header.length ? header : [defaultHeaderModule]} />{children}{footer.length ? <ModuleRenderer modules={footer} /> : <SiteFooter />}</ApiQueryProvider></Suspense></body>
    </html>
  );
}
