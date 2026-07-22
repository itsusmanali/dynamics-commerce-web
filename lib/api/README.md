# Shared API code

Start with `modules/README.md`. This folder contains plumbing that modules reuse:

- `http/browser-client.ts`: one Axios instance for browser calls to `/api`.
- `http/commerce-client.ts`: server-only Microsoft Commerce Axios instance and interceptors.
- `data-actions/client.ts`: generic client execution with TanStack Query.
- `data-actions/server.ts`: generic server execution using the same endpoint and query parameters.
- `query/query-client.tsx`: one TanStack Query provider and common defaults.
- `commerce/config.ts`: safe fallback Commerce configuration.
- `commerce/categories/categories.server.ts`: example Commerce POST hidden behind a simple Next.js GET.

Most module developers should not need to change these files. Add a feature service only when a new external API needs server-side payload construction or authentication.
