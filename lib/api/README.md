# Shared API code

Start with `modules/README.md`. This folder contains plumbing that modules reuse:

- `http/browser-client.ts`: one Axios instance for browser calls to `/api`.
- `http/commerce-client.ts`: server-only Microsoft Commerce Axios instance and interceptors.
- `data-actions/client.ts`: generic client execution with TanStack Query.
- `data-actions/server.ts`: generic server execution using the same endpoint and query parameters.
- `query/query-client.tsx`: one TanStack Query provider and common defaults.
- `commerce/config.ts`: safe fallback Commerce configuration.
- `commerce/request.ts`: the one shared authenticated Commerce request function.
- `app/api/commerce/<name>/<Name>.ts`: feature API code containing only path, method, payload, params and result handling.

Most module developers should not need to change these files. Add a feature service only when a new external API needs server-side payload construction or authentication.
