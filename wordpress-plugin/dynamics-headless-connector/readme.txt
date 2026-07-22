=== Lumovy Commerce Studio ===
Contributors: lumovy
Tags: headless, nextjs, graphql, vercel
Requires at least: 6.5
Requires PHP: 8.0
Stable tag: 2.4.0
License: GPLv2 or later

Connect WordPress to the Dynamics Commerce Next.js frontend.

== Installation ==
1. Install and activate WPGraphQL, Yoast SEO, and WPGraphQL Yoast SEO Addon.
2. Upload and activate this plugin.
3. Open Settings > Commerce Studio.
4. Enter the Vercel frontend URL and save.
5. Copy the two generated secrets to the matching Vercel environment variables.
6. Redeploy Vercel, then click Test connection.

Publishing or updating a page/post automatically refreshes the frontend. WordPress Preview buttons open the secure Next.js preview.
Permanent redirects can be managed from the same settings screen with one `/old => /new` rule per line.

== Module authoring ==
Connector 2.0 registers generated Dynamics modules in Gutenberg. Authors can mix them with native blocks, create reusable Module Fragments, create Page Templates, and attach templates to pages. Module resources are stored by locale. Template scripts must be allowlisted in the Next.js repository.

Connector 2.1 synchronizes module definitions from the secured Next.js manifest endpoint every five minutes and whenever an editor opens with stale definitions. The last valid manifest is retained if synchronization fails. A manual Sync Modules button and status information are available under Settings > Commerce Studio.

Connector 2.3 adds nested module slots. Slot names and allowed child modules come from each module definition. New pages start with Header, Sub header, Main, Sub footer, and Footer slots; Container modules provide nested stacked or flowing content.

Connector 2.4 makes reusable fragments available inside every page slot. A fragment authored in the Header or Footer slot replaces that page's code-default site header or footer.
