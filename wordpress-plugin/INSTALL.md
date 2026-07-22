# WordPress connector installation

1. In WordPress, open **Plugins → Add New Plugin → Upload Plugin**.
2. Upload `dynamics-headless-connector.zip`, install, and activate it.
3. Open **Settings → Headless Frontend**.
4. Keep the frontend URL as `https://dynamics-commerce-web.vercel.app` and click **Save connection**.
5. Copy the generated revalidation and preview secrets.
6. In Vercel, add the environment variables shown in the repository `.env.example`, using the copied secrets.
7. Redeploy the frontend from the latest commit.
8. Return to WordPress and click **Test connection**.

Editors can now use WordPress normally. Publish/update operations refresh Next.js automatically, and the WordPress Preview button opens a secure Next.js draft preview.

Connector 2.2 also adds **Module Fragments**, **Page Templates**, automatic module synchronization, and layman-friendly Dynamics 365 Commerce connection defaults. The Gutenberg inserter shows every module generated from the repository `modules` directory.
