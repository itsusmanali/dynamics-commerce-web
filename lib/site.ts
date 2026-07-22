const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

export const site = {
  name: process.env.SITE_NAME ?? "Dynamics Commerce",
  description:
    process.env.SITE_DESCRIPTION ??
    "Dynamics Commerce news, insights, and resources.",
  url: trimTrailingSlash(process.env.SITE_URL ?? "http://localhost:3000"),
  wordpressUrl: trimTrailingSlash(process.env.WORDPRESS_URL ?? ""),
  graphqlUrl: process.env.WORDPRESS_GRAPHQL_URL ?? "",
};
