/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const [name, kind = "query"] = process.argv.slice(2);
if (!name || !/^[a-z][a-z0-9-]*$/.test(name) || !["query", "mutation"].includes(kind)) {
  console.error("Usage: npm run api:create -- <api-name> [query|mutation]");
  console.error("Examples: npm run api:create -- products query");
  console.error("          npm run api:create -- add-to-cart mutation");
  process.exit(1);
}

const functionName = name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("");
const directory = path.join(process.cwd(), "app", "api", "commerce", name);
const copyright = `/*---------------------------------------------------------------------------------------------\n * Copyright (c) Lumovy Technology Solutions. All rights reserved.\n *--------------------------------------------------------------------------------------------*/\n\n`;
await mkdir(directory, { recursive: false });

const queryCode = `${copyright}import { commerceRequest } from "@/lib/api/commerce/request";

// EDIT HERE: use a generated Commerce type when available.
interface ${functionName}Response { value?: unknown[] }

// Edit only these five numbered areas.
export async function ${functionName}(request: Request) {
  const search = new URL(request.url).searchParams;
  const response = await commerceRequest<${functionName}Response>({
    path: "/${functionName}", // 1. Commerce path
    method: "POST", // 2. Upstream method
    payload: (config) => ({ channelId: config.channelId }), // 3. Payload
    params: { $top: search.get("top") || "100" }, // 4. Query parameters
  });
  return response.value ?? response; // 5. Returned data
}
`;
const mutationCode = `${copyright}import { commerceRequest } from "@/lib/api/commerce/request";

// EDIT HERE: variables passed to mutation.mutate(...).
export interface ${functionName}Input { id: number }
interface ${functionName}Response { success?: boolean }

// Edit only these five numbered areas.
export async function ${functionName}(input: ${functionName}Input) {
  const response = await commerceRequest<${functionName}Response>({
    path: \`/${functionName}(\${input.id})\`, // 1. Commerce path
    method: "POST", // 2. Upstream method
    payload: input, // 3. Dynamic payload
    params: {}, // 4. Query parameters
  });
  return response; // 5. Returned data
}
`;
await writeFile(path.join(directory, `${functionName}.ts`), kind === "query" ? queryCode : mutationCode);

const routeCode = kind === "query"
  ? `${copyright}import { createGetRoute } from "@/lib/api/route";\nimport { ${functionName} } from "./${functionName}";\n\n// Generated plumbing. Do not edit.\nexport const GET = createGetRoute(${functionName});\n`
  : `${copyright}import { createMutationRoute } from "@/lib/api/route";\nimport { ${functionName}, type ${functionName}Input } from "./${functionName}";\n\n// Generated plumbing. Do not edit.\nexport const POST = createMutationRoute<${functionName}Input, Awaited<ReturnType<typeof ${functionName}>>>(${functionName});\n`;
await writeFile(path.join(directory, "route.ts"), routeCode);

console.log(`Created isolated ${kind} API: /api/commerce/${name}`);
console.log(`Edit only app/api/commerce/${name}/${functionName}.ts.`);
if (kind === "query") console.log(`Connect when ready: npm run action:create -- <module> ${name} /api/commerce/${name} client`);
else console.log(`Use when ready: useApiMutation({ endpoint: "/api/commerce/${name}" })`);
