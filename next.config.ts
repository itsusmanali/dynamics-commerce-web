/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: process.env.WORDPRESS_URL
      ? [
          {
            protocol: new URL(process.env.WORDPRESS_URL).protocol.replace(":", "") as
              | "http"
              | "https",
            hostname: new URL(process.env.WORDPRESS_URL).hostname,
          },
        ]
      : [],
  },
};

export default nextConfig;
