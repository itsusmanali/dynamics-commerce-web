=== Dynamics Headless Connector ===
Contributors: lumovy
Tags: headless, nextjs, graphql, vercel
Requires at least: 6.5
Requires PHP: 8.0
Stable tag: 1.2.0
License: GPLv2 or later

Connect WordPress to the Dynamics Commerce Next.js frontend.

== Installation ==
1. Install and activate WPGraphQL, Yoast SEO, and WPGraphQL Yoast SEO Addon.
2. Upload and activate this plugin.
3. Open Settings > Headless Frontend.
4. Enter the Vercel frontend URL and save.
5. Copy the two generated secrets to the matching Vercel environment variables.
6. Redeploy Vercel, then click Test connection.

Publishing or updating a page/post automatically refreshes the frontend. WordPress Preview buttons open the secure Next.js preview.
Permanent redirects can be managed from the same settings screen with one `/old => /new` rule per line.
