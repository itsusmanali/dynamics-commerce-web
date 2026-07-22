/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const name = process.argv[2];
if (!name || !/^[a-z][a-z0-9-]*$/.test(name)) {
  console.error("Usage: npm run api:create -- <lowercase-api-name>");
  process.exit(1);
}

const directory = path.join(process.cwd(), "app", "api", name);
await mkdir(directory, { recursive: false });
await writeFile(path.join(directory, "route.ts"), `/*---------------------------------------------------------------------------------------------
 * Copyright (c) Lumovy Technology Solutions. All rights reserved.
 *--------------------------------------------------------------------------------------------*/

import { NextResponse } from "next/server";

// Step 1: Browser GET /api/${name}.
// Step 2: Replace the dummy data with a server service when the real API is ready.
// Step 3: Add this endpoint to a module with npm run action:create.
export async function GET() {
  return NextResponse.json({ data: { message: "${name} works" } });
}
`);
console.log(`Created /api/${name} at ${directory}/route.ts.`);
